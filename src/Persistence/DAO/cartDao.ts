import { Cart } from "../../Models/cart";
import { CartItem } from "../../Models/cartItem";
import { ProductDao } from "./productDAO";
const productDAO = new ProductDao()

export class CartDao {
    constructor() { }

    createCart = async () => {
        try {
            const cart = await Cart.create()
            return cart.dataValues
        } catch (error: any) {
            return error.message
        }
    }

    getItemCart = async (idCart: number) => {
        try {
            const itemsCart = await CartItem.findAll({ where: { idCart } })
            if (itemsCart) {
                return itemsCart
            }
            return `This cart hasn't items`
        } catch (error: any) {
            return error.message
        }
    }

    addProduct = async (idCart: number, idProduct: number, quantity: number) => {
        try {
            const cart = await Cart.findByPk(idCart)
            if (cart) {
                const product = await productDAO.getProductById(idProduct)
                if (product) {
                    const productInCart = await CartItem.findOne({ where: { idProduct: idProduct } })
                    if (productInCart) {
                        return "Product already in cart"
                    }
                    const cartItem = await CartItem.create({ idProduct: idProduct, quantity, idCart })
                    return cartItem.dataValues
                }
                return `Product doesn't exist`
            }
            return `Cart doesn't exist`
        } catch (error: any) {
            return error.message
        }
    }

    updateProductCart = async (idCart: number, idProduct: number, quantity: number) => {
        try {
            const cart = await Cart.findByPk(idCart)

            if (cart) {
                let productFind = await CartItem.findOne({ where: { idProduct: idProduct } })
                if (productFind) {
                    if (quantity > 0) {
                        await CartItem.update({ quantity }, { where: { idCart, idProduct: idProduct } })
                        return "Product quantity updated"
                    }
                } return `Product doesn't exist in cart`
            }
            return "Cart doesn't exist"
        } catch (error: any) {
            return error.message
        }
    }
    updateCart = async (idCart: number, newCart: { idProduct: number, quantity: number }[]) => {
        try {
            const cart = await Cart.findByPk(idCart)
            if (cart) {
                await CartItem.destroy({ where: { idCart } })
                for (let i = 0; i < newCart.length; i++) {
                    await CartItem.create({ idProduct: newCart[i].idProduct, quantity: newCart[i].quantity, idCart })
                }
                return "Cart updated"
            }
            return "Cart doesn't exist"
        } catch (error: any) {
            return error.message
        }
    }

    deleteCart = async (idCart: number) => {
        const cart = await Cart.findByPk(idCart)
        if (cart) {
            await CartItem.destroy({ where: { idCart } })
            return `Cart with id ${idCart} deleted`
        }
        return "Cart doesn't exist"
    }
}
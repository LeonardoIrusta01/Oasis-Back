import { Product } from "../Models"
import { faker } from '@faker-js/faker';
import { Category } from "../Models";

export const generate = async () => {
    const productCount = await Product.count()

    if (productCount) return

    const categoryCount = await Category.count()

    if (categoryCount) return

    const nombres: string[] = ["harinas y otros", "frutos secos", "cereales", "semillas", "reposteria", "cereales y legumbres", "condimentos", "herboresteria y yerbas", "aceites de oliva", "jugos", "salsa de soja", "galletas y pan", "fideos integrales", "miel", "dulces y mermeladas", "aceite de coco", "leches vegetales", "alfajores", "chocolate", "edulcorante", "celiacos", "frutas desecadas"]

    const booleans: boolean[] = [false, true]

    const getRandomBoolean = () => {
        return booleans[Math.round(Math.random())]
    }

    for (let i = 0; i < nombres.length - 1; i++) {
        const category = {
            name: nombres[i],
            image: faker.image.url()
        }
        await Category.create(category)
    }

    for (let i = 0; i < 100; i++) {
        const product = {
            name: faker.person.firstName(),
            price: getRandomBoolean(),
            image: faker.image.url(),
            description: faker.commerce.productDescription(),
            discount: getRandomBoolean(),
            active: getRandomBoolean(),
            stock: getRandomBoolean(),
            idCategory: Math.floor(Math.random() * 21) + 1
        }
        await Product.create(product)
    }
}
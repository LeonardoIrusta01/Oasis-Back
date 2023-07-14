import { Product, User } from "../../Models";
import { Cart } from "../../Models/cart";
import { CartItem } from "../../Models/cartItem";
import { MapUser } from "../DTO/userDTO";

export class UserDao {
    constructor() { }

    async getAll() {
        try {
            const users: User[] = await User.findAll()
            return users
        } catch (error: any) {
            return error.message
        }
    }

    async getById(id: string) {
        try {
            const user: User | null = await User.findByPk(id)
            if (user) {
                return user.dataValues
            }
            return `User doesn't exist`
        } catch (error: any) {
            return error.message
        }
    }

    async getByEmail(email: string) {
        try {
            const user: User | null = await User.findOne({ where: { email }, include: Cart })
            return user?.dataValues
        } catch (error: any) {
            return error.message
        }
    }

    async createUser(body: MapUser) {
        try {
            const { firstName = "", lastName = "", email = "", cellphone = 0, admin = false, dni = 0 } = body
            const user: User | null = await User.create({ firstName, lastName, email, cellphone, admin, dni })
            return user
        } catch (error: any) {
            return error.message
        }
    }

    async updateUser(id: string, body: MapUser) {
        try {
            const user = await User.update(body, { where: { id } });
            return user
        } catch (error: any) {
            return error.message
        }
    }
}
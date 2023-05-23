import { User } from "../../Models";
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
            return user
        } catch (error: any) {
            return error.message
        }
    }

    async createUser(body: MapUser) {
        try {
            const { firstName = "", lastName = "", email = "", cellphone = 0, admin = false, dni = 0, password = "" } = body
            const user: User | null = await User.create({firstName, lastName, email, cellphone, admin, dni, password})
            return user
        } catch (error:any) {
            return error.message
        }
    }

    async updateUser(id: string, body: MapUser) {
        try {
            const user = await User.update(body, { where: { id } });
            return user
        } catch (error:any) {
            return error.message
        }
     }
}
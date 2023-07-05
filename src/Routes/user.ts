import { Router } from "express";

import {
  getAll,
  getById,
  updateUser
} from "../Controllers/User/userController";
import { register } from "../Controllers/User/POST/register";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      properties:
 *        firstName:
 *          type: string
 *          description: the name of the user
 *        lastName:
 *          type: string
 *          description: the lastName of the user
 *        email:
 *          type: string
 *          description: the email of the user
 *          format: email
 *        cellphone:
 *          type: integer
 *          description: the cellphone of the user
 *        password:
 *          type: string
 *          description: the password of the user
 *          format: password
 *        admin:
 *          type: boolean
 *        dni:
 *          type: integer
 *          description: the dni of the user
 *
 *      required:
 *        - firstName
 *        - lastName
 *        - email
 *        - cellphone
 *        - password
 *        - admin
 *        - dni
 *      example:
 *        firstName: Gabriel
 *        lastName: Carducho
 *        email: carducho@gmail.com
 *        cellphone: 362456825
 *        password: asdf9a8fdasdfb398DB9A8FO73bHASKD
 *        admin: false
 *        dni: 46375405
 *
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Users
 *      example:
 *        msg: Users was not found
 *
 *  parameters:
 *    userId:
 *      name: id
 *      in: path
 *      required: true
 *      schema:
 *        type: string
 *      description: the user id
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users endpoint
 */

/**
 * @swagger
 * /api/user:
 *  get:
 *    summary: Return a Users list
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: The List of Users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Users'
 *      404:
 *        description: The users not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/user/{id}:
 *  get:
 *    summary: Return a Users list
 *    tags: [Users]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: The User by Id
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Users'
 *      404:
 *        description: The user was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 */
router.get("/:id", getById);

/**
 * @swagger
 * /api/user/{id}:
 *  put:
 *    summary: Update a User
 *    tags: [Users]
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: The user was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserNotFound'
 */

router.post("/", register)

router.put("/:id", updateUser);

export default router;

import { Router } from "express";

import {
  getAllCategories,
  createCategory,
} from "../Controllers/Category/categoryController";

const router: Router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Categories:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the name of the product
 *        image:
 *          type: string
 *          description: the image of the product
 *
 *      required:
 *        - name
 *        - image
 * 
 *      example:
 *        name: Cereal
 *        image: https://images.theconversation.com/files/509761/original/file-20230213-18-wshola.jpg?ixlib=rb-1.1.0&rect=34%2C8%2C5716%2C3819&q=45&auto=format&w=1000&fit=clip
 *
 *    CategoryNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Category
 *      example:
 *        msg: Categories was not found
 *
 */

/**
 * @swagger
 * tags:
 *  name: Categories
 *  description: Categories endpoint
 */

/**
 * @swagger
 * /api/categories:
 *  get:
 *    summary: Return a Categories list
 *    tags: [Categories]
 *    responses:
 *      200:
 *        description: The List of Categories
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Categories'
 *      404:
 *        description: The categories not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 */
router.get("/", getAllCategories);

/**
 * @swagger
 * /api/categories:
 *  post:
 *    summary: Create a new category
 *    tags: [Categories]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categories'
 *    responses:
 *      200:
 *        description: The category was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Categories'
 *      500:
 *        description: Some server error
 */
router.post("/", createCategory);

export default router;

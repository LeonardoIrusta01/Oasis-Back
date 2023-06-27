import { Router } from "express";

import {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
} from "../Controllers/Products/productController";

const router: Router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Products:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the name of the product
 *        price:
 *          type: integer
 *          description: the price of the product
 *        image:
 *          type: string
 *          description: the image of the product
 *        description:
 *          type: string
 *          description: the description of the product
 *        discount:
 *          type: boolean
 *          description: the discount of the product
 *        active:
 *          type: boolean
 *        stock:
 *          type: boolean
 *        idCategory:
 *          type: integer
 *          description: the idCategory of the Category
 *
 *      required:
 *        - name
 *        - price
 *        - image
 *        - description
 *        - discount
 *        - active
 *        - stock
 *        - idCategory
 *      example:
 *        name: Cereal
 *        price: 432
 *        image: https://images.theconversation.com/files/509761/original/file-20230213-18-wshola.jpg?ixlib=rb-1.1.0&rect=34%2C8%2C5716%2C3819&q=45&auto=format&w=1000&fit=clip
 *        description: A lot of cereal
 *        discount: false
 *        active: true
 *        stock: true
 *        Category: { "id": 3, "name": "Cereals", "image": "dfbakfkalskflja"}
 *
 *    ProductNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Products
 *      example:
 *        msg: Products was not found
 *
 *  parameters:
 *    productId:
 *      name: id
 *      in: path
 *      required: true
 *      schema:
 *        type: string
 *      description: the product id
 *
 *    limitQuery:
 *      name: limit
 *      in: query
 *      description: "results"
 *      example: 50
 *      schema:
 *        type: integer
 *
 *    pageQuery:
 *      name: page
 *      in: query
 *      description: "results"
 *      example: 1
 *      schema:
 *        type: integer
 *
 *    filterQuery:
 *      name: filter
 *      in: query
 *      description: "results"
 *      example: 1
 *      schema:
 *        type: string
 */

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Products endpoint
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Return a Products list
 *    tags: [Products]
 *    parameters:
 *      - $ref: '#/components/parameters/limitQuery'
 *      - $ref: '#/components/parameters/pageQuery'
 *      - $ref: '#/components/parameters/filterQuery'
 *    responses:
 *      200:
 *        description: The List of Products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: The products not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 */
router.get("/", getAllProduct);

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Return a Product by Id
 *    tags: [Products]
 *    parameters:
 *      - $ref: '#/components/parameters/productId'
 *    responses:
 *      200:
 *        description: The Product by Id
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: The product was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 */
router.get("/:id", getProductById);

/**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Create a new product
 *    tags: [Products]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Products'
 *    responses:
 *      200:
 *        description: The product was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Products'
 *      500:
 *        description: Some server error
 */
router.post("/", createProduct);

/**
 * @swagger
 * /api/products:
 *  put:
 *    summary: Update a Product
 *    tags: [Products]
 *    parameters:
 *      - $ref: '#/components/parameters/productId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Products'
 *    responses:
 *      200:
 *        description: The product was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Products'
 *      404:
 *        description: The product was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 */
router.put("/:id", updateProduct);

export default router;

import { Router } from "express";
import { sendMail } from "../Controllers/Mail/POST/sendMail";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Mails:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the name of the mail
 *        email:
 *          type: string
 *          description: the email of the mail
 *          format: email
 *        subject:
 *          type: string
 *          description: the subject of the mail
 *        message:
 *          type: string
 *          description: the message of the mail
 *
 *      required:
 *        - name
 *        - email
 *        - subject
 *        - cellphone
 *        - message
 *      example:
 *        name: Gabriel
 *        email: carducho@gmail.com
 *        subject: "..."
 *        message: Registro terminado
 *
 *    MailNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the mail not send
 *      example:
 *        msg: Mail was not sended
 *
 */

/**
 * @swagger
 * tags:
 *  name: Mails
 *  description: Mails endpoint
 */

/**
 * @swagger
 * /api/contact:
 *  post:
 *    summary: Create a mail
 *    tags: [Mails]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Mails'
 *    responses:
 *      200:
 *        description: The mail was successfully sended
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Mails'
 *      500:
 *        description: Some server error
 */
router.post("/", sendMail)

export default router;
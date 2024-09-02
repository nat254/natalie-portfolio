"use server";
import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { contactTemplate } from "@/templates/contact";


interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};


export async function sendContactForm(data: FormData) {
    const transporter = nodemailer.createTransport({
        port: 465,
        secure: true,
        host: process.env.CONTACT_FORM_HOST,
        auth: {
            user: process.env.CONTACT_FORM_USER,
            pass: process.env.CONTACT_FORM_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
        
    });

    try {
        const body = await compileTemplate(data.firstName, data.lastName, data.email, data.message);

        await transporter.sendMail({
            from: `<${process.env.CONTACT_FORM_USER}>`,
            replyTo: data.email,
            to: process.env.CONTACT_FORM_RECEIVE_EMAIL,
            subject: `New Message from your Portfolio -- ${data.firstName} ${data.lastName}`,
            html: body,
        });

        return { success: true };
    } catch (err: any){
        console.error(err);
        return { error: err?.response };
    }
};

export async function compileTemplate(firstName: string, lastName: string, email: string, message: string) {
    const template = handlebars.compile(contactTemplate);
    const htmlBody = template({
        firstName,
        lastName,
        email,
        message,
    });

    return htmlBody;
}
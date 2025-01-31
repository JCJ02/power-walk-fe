import { z } from "zod";

const studentSchema = z.object({
    rfidNumber: z.number().min(1, "RFID Number Is Required!")
        .max(255, "RFID Number Must Not Exceed To 255 Characters!"),
    studentId: z.string().min(7, "Student ID Is Required!")
        .max(255, "Student ID Must Not Exceed To 255 Characters!"),
    lastname: z.string().min(1, "Lastname Is Required!")
        .max(255, "Lastname Must Not Exceed To 255 Characters!"),
    firstname: z.string().min(1, "Firstname Is Required!")
        .max(255, "Firstname Must Not Exceed To 255 Characters!"),
    emailAddress: z.string({
        required_error: "E-mail Is Required!"
    }).email("Must Be A Valid E-Mail Address!"),
    // dateOfBirth: z.coerce.date(),
    dateOfBirth: z.string().min(1, "Birthdate Is Required!"),
    address: z.string().min(1, "Address Is Required!")
        .max(255, "Address Must Not Exceed To 255 Characters!"),
});

export type StudentType = z.infer<typeof studentSchema>;

export {
    studentSchema
}
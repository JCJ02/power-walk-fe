import { z } from "zod";

const logInSchema = z.object({
    email: z.string({
        required_error: "E-mail Is Required!"
    }).email("Must Be A Valid E-Mail Address!"),
    password: z.string({
        required_error: "Password Is Required!"
    }).min(8, "Password Must Be At Least 8 Characters Long!")
        .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, "Password Must Contain At Least One Number And Special Character!")
});

export type LogInType = z.infer<typeof logInSchema>;

const signUpSchema = z.object({
    firstname: z.string().min(1, "Firstname Is Required!").max(255, "Firstname Must Not Exceed To 255 Characters Long!"),
    lastname: z.string().min(1, "Lastname Is Required!").max(255, "Lastname Must Not Exceed To 255 Characters Long!"),
    email: z.string({
        required_error: "E-mail Is Required!"
    }).email("Must Be A Valid E-Mail Address!"),
    password: z.string({
        required_error: "Password Is Required!"
    }).min(8, "Password Must Be At Least 8 Characters Long!")
        .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, "Password Must Contain At Least One Number And Special Character!")
});

export type SignUpType = z.infer<typeof signUpSchema>;

export {
    logInSchema,
    signUpSchema
}
import { z } from "zod";

const logInSchema = z.object({
    email: z.string({
        required_error: "E-mail Is Required!",
        invalid_type_error: "Invalid E-mail Address!"
    }).email("Must Be A Valid E-Mail Address!"),
    password: z.string({
        required_error: "Password Is Required!"
    }).min(8, "Password Must Be At Least 8 Characters Long!")
});

export type LogInType = z.infer<typeof logInSchema>;

export {
    logInSchema,
}
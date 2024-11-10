import { z } from "zod";

const loginSchema = z.object({
    email: z.string({
        required_error: "E-mail Is Required!"
    }).email("Must Be A Valid E-Mail Address!"),
    password: z.string({
        required_error: "Password Is Required!"
    }).min(8, "Password Must Be At Least 8 Characters Long!")
});

export type Login = z.infer<typeof loginSchema>;

export {
    loginSchema,
}
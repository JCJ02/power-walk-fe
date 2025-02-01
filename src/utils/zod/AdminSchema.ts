import { z } from "zod";

const authenticateAdminSchema = z.object({
    email: z.string({
        required_error: "E-mail Is Required!"
    }).email("Must Be A Valid E-Mail Address!"),
    password: z.string({
        required_error: "Password Is Required!"
    }).min(8, "Password Must Be At Least 8 Characters Long!")
        .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, "Password Must Contain At Least One Number And Special Character!")
});
export type LogInType = z.infer<typeof authenticateAdminSchema>;

const createAdminSchema = z.object({
    firstname: z.string({
        required_error: "Firstname Is Required!",
        invalid_type_error: "Firstname Must Be String!"
    })
        .min(1, "Firstname Must Be At Least 3 Characters Long!")
        .max(255, "Firstname Must Not Exceed 255 Characters!"),
    lastname: z.string({
        required_error: "Lastname Is Required!",
        invalid_type_error: "Lastname Must Be String!"
    })
        .min(1, "Lastname Must Be At Least 3 Characters Long!")
        .max(255, "Lastname Must Not Exceed 255 Characters!"),
    email: z.string({
        required_error: "E-mail Is Required!"
    }).email("Must Be A Valid E-mail!"),
    password: z.string()
        .min(8, "Password Must Be At Least 8 Characters Long!")
        .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, "Password Must Containt At Least One Number And One Special Character!"),
    confirmPassword: z.string().optional().nullable()
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password And Confirm Password Are Not Match!",
});
export type SignUpType = z.infer<typeof createAdminSchema>;

const updateAdminSchema = z.object({
    firstname: z.string({
        required_error: "Firstname Is Required!",
        invalid_type_error: "Firstname Must Be String!"
    })
        .min(1, "Firstname Must Be At Least 3 Characters Long!")
        .max(255, "Firstname Must Not Exceed 255 Characters!"),
    lastname: z.string({
        required_error: "Lastname Is Required!",
        invalid_type_error: "Firstname Must Be String!"
    })
        .min(1, "Lastname Must Be At Least 3 Charaters Long!")
        .max(255, "Lastnmae Must Not Exceed 255 Characters!"),
    email: z.string({
        required_error: "E-mail Is Required!"
    }).email("Must Be A Valid Email!"),
});
export type UpdateAdminType = z.infer<typeof updateAdminSchema>;

export {
    authenticateAdminSchema,
    createAdminSchema,
    updateAdminSchema
}
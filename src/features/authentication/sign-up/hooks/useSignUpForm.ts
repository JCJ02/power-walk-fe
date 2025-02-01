import { useState } from "react";
import { createAdminSchema, SignUpType } from "../../../../utils/zod/AdminSchema";

type useSignUpFormTypes = {
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string
    confirmPassword?: string
}

const useSignUpForm = () => {
    const defaultValues: SignUpType = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const [values, setValues] = useState<SignUpType>(defaultValues);
    const [errors, setErrors] = useState<useSignUpFormTypes>({});

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setValues({ ...values, [name]: value });
    };

    const validateForm = () => {
        const result = createAdminSchema.safeParse(values);

        if (result.error) {
        const errorMessages = result.error.flatten().fieldErrors;
            setErrors({
                firstname: errorMessages.firstname?.[0],
                lastname: errorMessages.lastname?.[0],
                email: errorMessages.email?.[0],
                password: errorMessages.password?.[0],
                confirmPassword: errorMessages.confirmPassword?.[0]
            });
            return false;
        } else {
            setErrors({});
            setValues(defaultValues);
            return true;
        }
    }

    return {
        values, 
        setValues, 
        errors, 
        setErrors, 
        handleChange, 
        validateForm
    }
}

export default useSignUpForm;
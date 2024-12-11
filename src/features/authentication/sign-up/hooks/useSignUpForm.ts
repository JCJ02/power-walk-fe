import { useState } from "react";
import { signUpSchema, SignUpType } from "../../../../utils/validations/AdminSchema";

type useSignUpFormTypes = {
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string
}

const useSignUpForm = () => {
    const defaultValues: SignUpType = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    };

    const [values, setValues] = useState<SignUpType>(defaultValues);
    const [errors, setErrors] = useState<useSignUpFormTypes>({});

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setValues({ ...values, [name]: value });
    };

    const validateForm = () => {
        const result = signUpSchema.safeParse(values);

        if (result.error) {
        const errorMessages = result.error.flatten().fieldErrors;
            setErrors({
                firstname: errorMessages.firstname?.[0],
                lastname: errorMessages.lastname?.[0],
                email: errorMessages.email?.[0],
                password: errorMessages.password?.[0],
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
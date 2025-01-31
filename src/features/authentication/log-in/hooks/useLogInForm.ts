import { useState } from "react";
import { logInSchema, LogInType } from "../../../../utils/validations/AdminSchema";

const useLogInForm = () => {
    const defaultValues: LogInType = {
        email: "",
        password: "",
    };
    
    const [values, setValues] = useState<LogInType>(defaultValues);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setValues({ ...values, [name]: value });
    };

    const validateForm = () => {
        const result = logInSchema.safeParse(values);
        
        if (result.error) {
          const errorMessages = result.error.flatten().fieldErrors;
          setErrors({
            email: errorMessages.email?.[0],
            password: errorMessages.password?.[0],
          });
          return false;
        }
        setErrors({});
        setValues(defaultValues);
        return true;
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        validateForm
    }
}

export default useLogInForm;
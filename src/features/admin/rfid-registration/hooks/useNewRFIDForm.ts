import { useState } from "react";
import { createRFIDSchema, NewRFIDType } from "../../../../utils/zod/RFIDSchema";

const useNewRFIDForm = () => {
    const defaultValues: NewRFIDType = {
        uid: "",
    }

    const [values, setValues] = useState<NewRFIDType>(defaultValues);
    const [errors, setErrors] = useState<{ 
        uid?: string;
    }>({});
        

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setValues((input) => ({ ...input, [name]: value }));
    };
      

    const validateForm = () => {
        const result = createRFIDSchema.safeParse(values);
        if(result.error) {
            const errorMessages = result.error.flatten().fieldErrors;
            setErrors({
                uid: errorMessages.uid?.[0],
            });
            return false;
        }
        return true;
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

export default useNewRFIDForm;
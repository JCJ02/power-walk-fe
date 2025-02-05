import { useState } from "react";
import { createStudentSchema, NewStudentType } from "../../../../utils/zod/StudentSchema";

const useNewStudentForm = () => {
    const defaultValues: NewStudentType = {
        uid: "",
        studentId: "",
        firstname: "",
        lastname: "",
        middlename: "",
        email: "",
        dateOfBirth: new Date(),
        address: "",
    }

    const [values, setValues] = useState<NewStudentType>(defaultValues);
    const [errors, setErrors] = useState<{ 
        uid?: string;
        studentId?: string;
        firstname?: string;
        lastname?: string;
        middlename?: string;
        email?: string;
        dateOfBirth?: string;
        address?: string;
    }>({});
        

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setValues((previousValues) => ({
            ...previousValues,
            [name]: name === "dateOfBirth" ? new Date(value) : value,
        }));
    };
      

    const validateForm = () => {
        const result = createStudentSchema.safeParse(values);
        
        if (result.error) {
          const errorMessages = result.error.flatten().fieldErrors;
          setErrors({
            uid: errorMessages.uid?.[0],
            studentId: errorMessages.studentId?.[0],
            firstname: errorMessages.firstname?.[0],
            lastname: errorMessages.lastname?.[0],
            middlename: errorMessages.middlename?.[0],
            email: errorMessages.email?.[0],    
            dateOfBirth: errorMessages.dateOfBirth?.[0],
            address: errorMessages.address?.[0],
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

export default useNewStudentForm;
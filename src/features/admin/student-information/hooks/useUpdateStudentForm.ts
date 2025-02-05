import { useState } from "react";
import { updateStudentSchema, UpdateStudentType } from "../../../../utils/zod/StudentSchema";

const useUpdateStudentForm = () => {
    const defaultValues: UpdateStudentType = {
        studentId: "",
        firstname: "",
        lastname: "",
        middlename: "",
        email: "",
        dateOfBirth: new Date(),
        address: "",
    }

    const [values, setValues] = useState<UpdateStudentType>(defaultValues);
    const [errors, setErrors] = useState<{ 
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
        const result = updateStudentSchema.safeParse(values);
        
        if (result.error) {
          const errorMessages = result.error.flatten().fieldErrors;
          setErrors({
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

export default useUpdateStudentForm;
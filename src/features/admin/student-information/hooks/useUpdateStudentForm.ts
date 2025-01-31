import { useState } from "react";
import { studentSchema, StudentType } from "../../../../utils/validations/StudentSchema";

const useUpdateStudentForm = () => {
    const defaultValues: StudentType = {
        rfidNumber: 0,
        studentId: "",
        lastname: "",
        firstname: "",
        emailAddress: "",
        dateOfBirth: "",
        address: "",
    }

    const [values, setValues] = useState<StudentType>(defaultValues);
    const [errors, setErrors] = useState<{ 
        rfidNumber?: number;
        studentId?: string;
        lastname?: string;
        firstname?: string;
        emailAddress?: string;
        dateOfBirth?: string;
        address?: string;
    }>({});
        

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setValues({ ...values, [name]: value });
    };

    const validateForm = () => {
        const result = studentSchema.safeParse(values);
        
        if (result.error) {
          const errorMessages = result.error.flatten().fieldErrors;
          setErrors({
            studentId: errorMessages.studentId?.[0],
            lastname: errorMessages.lastname?.[0],
            firstname: errorMessages.firstname?.[0],
            emailAddress: errorMessages.emailAddress?.[0],
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
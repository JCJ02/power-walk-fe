import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Input } from "../../../../components/ui/input";
import useUpdateStudentForm from "../hooks/useUpdateStudentForm";
import { StudentType } from "../../../../types/StudentType";
import useUpdateStudentMutation from "../hooks/useUpdateStudentMutation";

type UpdateStudentFormProps = {
  closeForm: any;
  student: StudentType;
};

const UpdateStudentForm = ({ closeForm, student }: UpdateStudentFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const { values, setValues, errors, handleChange, validateForm } =
    useUpdateStudentForm();
  useEffect(() => {
    if (student) {
      setValues(student);
    }
  }, [student, setValues]);
  const updateStudentMutation = useUpdateStudentMutation(student.id);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      updateStudentMutation.mutate(values, {
        onSuccess: () => {
          if (closeForm) closeForm();
        },
        onError: () => {
          const message =
            "Oops, Invalid Crendentials! Please Check Your Credentials!";
          setErrorMessage(message);
        },
      });
    }
  };
  useEffect(() => {
    document.title = "Update Student - Power Walk Technology";
  });
  return (
    <>
      <form
        className="flex flex-col items-start gap-5 bg-white font-poppins px-8 py-10 w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold">Edit Student</h1>
        <div className="flex flex-col items-center gap-2 w-full">
          {/* 1ST FIELDS */}
          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                RFID Number<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="RFID Number"
                name="uid"
                value={student.uid}
                disabled
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                Student ID<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Student ID"
                name="studentId"
                value={values.studentId || ""}
                onChange={handleChange}
              />
              {errors.studentId && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.studentId}
                </p>
              )}
            </div>
          </div>

          {/* 2ND FIELDS */}
          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                Lastname<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Lastname"
                name="lastname"
                value={values.lastname || ""}
                onChange={handleChange}
              />
              {errors.lastname && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.lastname}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                Firstname<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Firstname"
                name="firstname"
                value={values.firstname || ""}
                onChange={handleChange}
              />
              {errors.firstname && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.firstname}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">Middlename</label>
              <Input
                placeholder="Middlename"
                name="middlename"
                value={values.middlename ?? ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 3RD FIELDS */}
          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                Email Address<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Email Address"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                Date Of Birth<b className="text-red-700">*</b>
              </label>
              <input
                className="text-sm md:text-md p-2 border-2 rounded-md border-[#EEEEEE] w-full"
                type="date"
                name="dateOfBirth"
                value={
                  values.dateOfBirth
                    ? new Date(values.dateOfBirth).toISOString().split("T")[0]
                    : ""
                }
                onChange={handleChange}
              />
              {errors.dateOfBirth && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="text-sm md:text-md">
              Address<b className="text-red-700">*</b>
            </label>
            <Input
              placeholder="Address"
              name="address"
              value={values.address || ""}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="font-poppins self-start text-xs md:text-md text-red-700">
                {errors.address}
              </p>
            )}
          </div>
          {errorMessage && (
            <p className="font-poppins text-red-700 text-xs md:text-md w-full">
              {`Error Message: ${errorMessage}`}
            </p>
          )}
        </div>
        <div className="flex self-end items-center pt-5 gap-2">
          <Button
            className="bg-white lg:text-sm text-[#385A65] px-5 md:px-10 rounded-md border-[1px] border-white hover:border-[1px] hover:border-[#385A65]"
            onClick={closeForm}
          >
            Cancel
          </Button>
          <Button
            className="lg:text-sm px-5 md:px-10 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default UpdateStudentForm;

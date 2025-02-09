import { useEffect, useRef, useState } from "react";
import { Input } from "../../../../components/ui/input";
import Button from "../../../../components/Button";
import useNewStudentForm from "../hooks/useNewStudentForm";
import useNewStudentMutation from "../hooks/useNewStudentMutation";

type NewStudentFormProps = {
  closeForm: () => void;
};

const NewStudentForm = ({ closeForm }: NewStudentFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const { values, setValues, errors, handleChange, validateForm } =
    useNewStudentForm();
  const newStudentMutation = useNewStudentMutation();
  const rfidInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log("Submitting Data:", values);
    if (validateForm()) {
      newStudentMutation.mutate(values, {
        onSuccess: () => {
          // console.log("Form is Valid");
          if (closeForm) closeForm();
        },
        onError: () => {
          const message =
            "Oops, Invalid Crendentials! Please Check Your Credentials!";
          setErrorMessage(message);
        },
      });
    }
    // else {
    //   console.log("Form is Invalid");
    // }
  };

  useEffect(() => {
    document.title = "Create Student - Power Walk Technology";

    if (rfidInputRef.current) {
      rfidInputRef.current.focus();
    }

    const handleRFIDScan = (event: any) => {
      event.stopPropagation();
      const rfidNumber = event.detail;
      if (rfidNumber) {
        setValues(rfidNumber);
        if (rfidInputRef.current) {
          rfidInputRef.current.focus();
        }
      }
    };

    window.addEventListener("rfidScan", handleRFIDScan);

    return () => {
      window.removeEventListener("rfidScan", handleRFIDScan);
    };
  }, [setValues]);
  return (
    <>
      <form
        className="flex flex-col items-start gap-5 bg-white font-poppins px-8 py-10 w-full"
        onSubmit={handleSubmit}
        onClick={(event: any) => event.stopPropagation()}
      >
        <h1 className="text-xl font-semibold">New Student</h1>
        <div className="flex flex-col items-center gap-2 w-full">
          {/* 1ST FIELDS */}
          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-start w-full">
              <label className="text-xs md:text-md">
                RFID Number<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="RFID Number"
                name="uid"
                value={values.uid || ""}
                onChange={handleChange}
                ref={rfidInputRef}
                onClick={(event: any) => event.stopPropagation()}
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-xs md:text-md">
                Student ID<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Student ID"
                name="studentId"
                value={values.studentId}
                onChange={handleChange}
                onClick={(event: any) => event.stopPropagation()}
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
              <label className="text-xs md:text-md">
                Firstname<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Firstname"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                onClick={(event: any) => event.stopPropagation()}
              />
              {errors.firstname && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.firstname}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-xs md:text-md">
                Lastname<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Lastname"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                onClick={(event: any) => event.stopPropagation()}
              />
              {errors.lastname && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.lastname}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-xs md:text-md">Middlename</label>
              <Input
                placeholder="Middlename"
                name="middlename"
                value={values.middlename ?? ""}
                onChange={handleChange}
                onClick={(event: any) => event.stopPropagation()}
              />
            </div>
          </div>

          {/* 3RD FIELDS */}
          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-start w-full">
              <label className="text-xs md:text-md">
                Email Address<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Email Address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onClick={(event: any) => event.stopPropagation()}
              />
              {errors.email && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-xs md:text-md">
                Date Of Birth<b className="text-red-700">*</b>
              </label>
              <input
                className="text-xs md:text-md p-2 border-2 rounded-md border-[#EEEEEE] w-full"
                type="date"
                name="dateOfBirth"
                value={
                  values.dateOfBirth
                    ? new Date(values.dateOfBirth).toISOString().split("T")[0]
                    : ""
                }
                onChange={handleChange}
                onClick={(event: any) => event.stopPropagation()}
              />
              {errors.dateOfBirth && (
                <p className="font-poppins self-start text-xs text-red-700">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="text-xs md:text-md">
              Address<b className="text-red-700">*</b>
            </label>
            <Input
              placeholder="Address"
              name="address"
              value={values.address}
              onChange={handleChange}
              onClick={(event: any) => event.stopPropagation()}
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
            type="button"
            onClick={(event: any) => {
              event.stopPropagation();
              closeForm();
            }}
          >
            Cancel
          </Button>
          <Button
            className="lg:text-sm px-5 md:px-10 rounded-md"
            type="submit"
            onClick={(event: any) => event.stopPropagation()}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewStudentForm;

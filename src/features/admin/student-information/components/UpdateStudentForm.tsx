import { useEffect } from "react";
import Button from "../../../../components/Button";
import { Input } from "../../../../components/ui/input";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useUpdateStudentForm from "../hooks/useUpdateStudentForm";

type UpdateStudentFormProps = {
  closeForm?: () => void;
};

const UpdateStudentForm = ({ closeForm }: UpdateStudentFormProps) => {
  const navigate = useNavigate();
  const { values, setValues, errors, setErrors, handleChange, validateForm } =
    useUpdateStudentForm();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      toast.success("Successfully Signed In!", {
        toastId: "successfullySignedIn",
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/");
    }
  };
  useEffect(() => {
    document.title = "Update Student - Power Walk Technology";
  });
  return (
    <>
      <div className="flex flex-col items-start gap-5 bg-white font-poppins px-8 py-10 w-full">
        <h1 className="text-xl font-semibold">Edit Student</h1>
        <div className="flex flex-col items-center gap-2 w-full">
          {/* 1ST FIELDS */}
          <div className="flex items-start gap-2 w-full">
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                RFID Number<b className="text-red-700">*</b>
              </label>
              <Input placeholder="RFID Number" />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                Student ID<b className="text-red-700">*</b>
              </label>
              <Input
                placeholder="Student ID"
                value={values.studentId}
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
                value={values.lastname}
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
                value={values.firstname}
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
              <Input placeholder="Middlename" />
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
                name="emailAddress"
                value={values.emailAddress}
                onChange={handleChange}
              />
              {errors.emailAddress && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.emailAddress}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm md:text-md">
                Date Of Birth<b className="text-red-700">*</b>
              </label>
              <input
                type="date"
                className="text-sm md:text-md py-1 px-2 border-2 rounded-md border-[#EEEEEE] w-full"
                value={values.dateOfBirth}
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
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="font-poppins self-start text-xs md:text-md text-red-700">
                {errors.address}
              </p>
            )}
          </div>
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
      </div>
    </>
  );
};

export default UpdateStudentForm;

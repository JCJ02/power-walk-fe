import { useEffect, useRef, useState } from "react";
import { Input } from "../../../../components/ui/input";
import Button from "../../../../components/Button";
import useNewRFIDForm from "../hooks/useNewRFIDForm";
import useNewRFIDFormMutation from "../hooks/useNewRFIDFormMutation";

type NewRFIDProps = {
  closeForm: () => void;
};

const NewRFIDForm = ({ closeForm }: NewRFIDProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    values,
    setValues,
    errors,
    // setErrors,
    handleChange,
    validateForm,
  } = useNewRFIDForm();
  const createRFIDMutation = useNewRFIDFormMutation();
  const rfidInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      createRFIDMutation.mutate(values, {
        onSuccess: () => {
          closeForm();
        },
        onError: () => {
          const message = "E-mail is already Exist!";
          setErrorMessage(message);
        },
      });
    }
  };

  useEffect(() => {
    document.title = "RFID Registration - Power Walk Technology";

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
        onClick={(event: any) => event.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold">Register RFID</h1>
        <div className="flex flex-col items-start gap-1 w-full">
          <label className="text-xs md:text-md lg:text-lg">
            RFID Number<b className="text-red-700">*</b>
          </label>
          <Input
            className="text-xs md:text-md lg:text-lg"
            placeholder="RFID Number or UID"
            name="uid"
            value={values.uid}
            onChange={handleChange}
            onClick={(event: any) => event.stopPropagation()}
            ref={rfidInputRef}
          />
          {errors.uid && (
            <p className="font-poppins text-red-700 text-xs md:text-md w-full">
              {errors.uid}
            </p>
          )}
        </div>
        {errorMessage && (
          <p className="font-poppins text-red-700 text-xs md:text-md w-full">
            {errorMessage}
          </p>
        )}
        <div className="flex flex-col self-end items-center pt-1 gap-2 w-full">
          <Button className="lg:text-sm px-5 md:px-10 rounded-md w-full">
            Submit
          </Button>
          <Button
            className="bg-white lg:text-sm text-[#385A65] px-5 md:px-10 rounded-md border-[1px] border-white hover:border-[1px] hover:border-[#385A65] w-full"
            onClick={(event: any) => {
              event.stopPropagation();
              closeForm();
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewRFIDForm;

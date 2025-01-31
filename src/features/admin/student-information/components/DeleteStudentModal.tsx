import { useEffect } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Button from "../../../../components/Button";

type DeleteStudentModalProps = {
  closeForm?: () => void;
};

const DeleteStudentModal = ({ closeForm }: DeleteStudentModalProps) => {
  useEffect(() => {
    document.title = "Delete Student - Power Walk Technology";
  });
  return (
    <>
      <div className="flex flex-col items-center bg-white py-10 px-8 w-full">
        <RiDeleteBin6Fill className="text-6xl text-[#385A65]" />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold">Delete Student Information</h1>
          <p className="text-xs md:text-md lg:text-lg text-center w-[360px]">
            Are you sure you want to delete this Student Informatioin?
          </p>
          <div className="flex justify-center items-center pt-2 gap-2 w-full">
            <Button
              className="bg-white lg:text-sm text-[#385A65] px-5 md:px-10 rounded-md border-[1px] border-white hover:border-[1px] hover:border-[#385A65]"
              onClick={closeForm}
            >
              No
            </Button>
            <Button className="lg:text-sm px-5 md:px-10 rounded-md">Yes</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteStudentModal;

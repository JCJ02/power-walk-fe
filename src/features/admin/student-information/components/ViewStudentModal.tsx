import { useEffect } from "react";
import Button from "../../../../components/Button";

type ViewStudentModalProps = {
  closeForm?: () => void;
};

const ViewStudentModal = ({ closeForm }: ViewStudentModalProps) => {
  useEffect(() => {
    document.title = "View Student - Power Walk Technology";
  });
  return (
    <>
      <div className="flex flex-col items-start gap-5 bg-white px-8 py-10">
        <h1 className="text-xl font-semibold">View Student</h1>
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex flex-col items-start">
            <label>RFID Number</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65]">
              1000213
            </label>
          </div>
          <div className="flex flex-col items-start">
            <label>Student ID</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65]">
              21-1780
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex flex-col items-start">
            <label>Lastnamer</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65]">
              Jacobe
            </label>
          </div>
          <div className="flex flex-col items-start">
            <label>Firstname</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65]">
              John Carlo
            </label>
          </div>
          <div className="flex flex-col items-start">
            <label>Middlename</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65]">
              Pura
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="flex flex-col items-start">
            <label>Email Address</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65]">
              jacobe.johncarlo.02022003@gmail.com
            </label>
          </div>
          <div className="flex flex-col items-start">
            <label>Date Of Birth</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65]">
              Feb. 02, 2024
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label>Address</label>
          <label className="test-xs md:text-md lg:text-lg text-[#385A65]">
            49-P Sampaloc Alley Hills St. Batasan Hills, Quezon City
          </label>
        </div>
        <div className="flex self-end items-center pt-5 gap-2">
          <Button
            className="bg-white lg:text-sm text-[#385A65] px-5 md:px-10 rounded-md border-[1px] border-white hover:border-[1px] hover:border-[#385A65]"
            onClick={closeForm}
          >
            Cancel
          </Button>
          <Button className="lg:text-sm px-5 md:px-10 rounded-md">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default ViewStudentModal;

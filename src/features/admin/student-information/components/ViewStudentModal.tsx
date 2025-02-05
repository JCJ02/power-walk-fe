import { useEffect } from "react";
import Button from "../../../../components/Button";
import { StudentType } from "../../../../types/StudentType";
import { format } from "date-fns";

type ViewStudentModalProps = {
  closeForm: () => void;
  student: StudentType;
};

const ViewStudentModal = ({ closeForm, student }: ViewStudentModalProps) => {
  useEffect(() => {
    document.title = "View Student - Power Walk Technology";
  });
  return (
    <>
      <div
        className="flex flex-col items-start gap-5 bg-white p-10 w-[640px]"
        key={student.id}
      >
        <h1 className="text-xl font-semibold">View Student</h1>
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-1 w-full">
            <label>RFID Number:</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65] font-bold">
              {student.uid}
            </label>
          </div>
          <div className="flex items-center gap-1 w-full">
            <label>Student ID:</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65] font-bold">
              {student.studentId}
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex flex-col items-start">
            <label>Firstname:</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65] font-bold">
              {student.firstname}
            </label>
          </div>
          <div className="flex flex-col items-start">
            <label>Lastname:</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65] font-bold">
              {student.lastname}
            </label>
          </div>
          <div className="flex flex-col items-start">
            <label>Middlename:</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65] font-bold">
              {student.middlename}
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="flex flex-col items-start w-3/4">
            <label>Email Address:</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65] font-bold">
              {student.email}
            </label>
          </div>
          <div className="flex flex-col items-start w-1/4">
            <label>Date Of Birth:</label>
            <label className="test-xs md:text-md lg:text-lg text-[#385A65] font-bold">
              {format(new Date(student.dateOfBirth), "MMMM dd, yyyy")}
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label>Address:</label>
          <label className="test-xs md:text-md lg:text-lg text-[#385A65] font-bold">
            {student.address}
          </label>
        </div>
        <Button
          className="lg:text-sm px-5 md:px-10 self-end rounded-md"
          onClick={closeForm}
        >
          Ok
        </Button>
      </div>
    </>
  );
};

export default ViewStudentModal;

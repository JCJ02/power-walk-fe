import { useEffect } from "react";

const StudentInformation = () => {
  useEffect(() => {
    document.title = "Student Information - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="h-full w-full">Student Information</div>
    </>
  );
};

export default StudentInformation;

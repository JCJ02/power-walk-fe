import { useEffect } from "react";

const Students = () => {
  useEffect(() => {
    document.title = "Students - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="h-full w-full">Students</div>
    </>
  );
};

export default Students;

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "../../../components/Button";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { StudentInformationData } from "../../../data/studentInformationData";
import { FaEye } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../../../components/Modal";
import NewStudentForm from "./components/NewStudentForm";
import UpdateStudentForm from "./components/UpdateStudentForm";
import ViewStudentModal from "./components/ViewStudentModal";
import DeleteStudentModal from "./components/DeleteStudentModal";

const StudentInformation = () => {
  const [isNewStudentFormOpen, setIsNewStudentFormOpen] = useState(false);
  const [isUpdateStudentFormOpen, setIsUpdateStudentFormOpen] = useState(false);
  const [isViewStudentFormOpen, setIsViewStudentFormOpen] = useState(false);
  const [isDeleteStudentModalOpen, setIsDeleteStudentModalOpen] =
    useState(false);

  // HANDLE NEW STUDENT FORM
  const openNewStudentForm = () => {
    setIsNewStudentFormOpen(true);
  };
  const closeNewStudentForm = () => {
    setIsNewStudentFormOpen(false);
  };

  // HANDLE UPDATE STUDENT FORM
  const openUpdateStudentForm = () => {
    setIsUpdateStudentFormOpen(true);
  };
  const closeUpdateStudentForm = () => {
    setIsUpdateStudentFormOpen(false);
  };

  // HANDLE UPDATE STUDENT FORM
  const openViewStudentForm = () => {
    setIsViewStudentFormOpen(true);
  };
  const closeViewStudentForm = () => {
    setIsViewStudentFormOpen(false);
  };

  // HANDLE DELETE STUDENT FORM
  const openDeleteStudentModal = () => {
    setIsDeleteStudentModalOpen(true);
  };
  const closeDeleteStudentModal = () => {
    setIsDeleteStudentModalOpen(false);
  };

  useEffect(() => {
    document.title = "Student Information - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="flex flex-col items-start gap-5 font-poppins py-5 pl-6 lg:pl-8 pr-6 lg:pr-10 overflow-y-scroll h-screen w-full">
        {/* STUDENT INFORMATION HEADER */}
        <h1 className="text-xl xl:text-3xl font-semibold">
          Student Information
        </h1>

        {/* SECTION 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-2 w-full">
          <Button
            className="flex items-center gap-2 font-poppins text-white bg-[#385A65] px-4 rounded-md"
            onClick={openNewStudentForm}
          >
            <FaPlus />
            <label className="text-xs md:text-md lg:text-lg cursor-pointer">
              New Student
            </label>
          </Button>
          <Input
            className="border-[#385A65] md:w-[280px]"
            placeholder="Search Student Information"
          />
        </div>

        {/* STUDENT INFORMATION TABLE */}
        <div className="w-full">
          <Table>
            <TableHeader className="bg-[#385A65]">
              <TableRow className="text-xs md:text-md">
                <TableHead className="text-white">Student ID</TableHead>
                <TableHead className="text-white">Student Name</TableHead>
                <TableHead className="text-white">Email Address</TableHead>
                <TableHead className="text-white">Date Of Birth</TableHead>
                <TableHead className="text-white">Address</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {StudentInformationData.map((students, index) => (
                <TableRow
                  key={students.id}
                  className={index % 2 === 0 ? "bg-[#FFE95F]" : "bg-white"}
                >
                  <TableCell>{students.studentId}</TableCell>
                  <TableCell>{students.studentName}</TableCell>
                  <TableCell>{students.emailAddress}</TableCell>
                  <TableCell>{students.dateOfBirth}</TableCell>
                  <TableCell>{students.address}</TableCell>
                  <TableCell className="flex items-center gap-1">
                    <Button
                      className="bg-[#FFFFFF] text-[#385A65] p-1 rounded-md"
                      onClick={openViewStudentForm}
                    >
                      <FaEye />
                    </Button>
                    <Button
                      className="bg-[#FFFFFF] text-green-500 p-1 rounded-md"
                      onClick={openUpdateStudentForm}
                    >
                      <MdEditSquare />
                    </Button>
                    <Button
                      className="bg-[#FFFFFF] text-red-700 p-1 rounded-md"
                      onClick={openDeleteStudentModal}
                    >
                      <RiDeleteBin6Fill />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* NEW STUDENT FORM */}
        <Modal isOpen={isNewStudentFormOpen} onClose={closeNewStudentForm}>
          <NewStudentForm closeForm={closeNewStudentForm} />
        </Modal>

        {/* UPDATE STUDENT FORM */}
        <Modal
          isOpen={isUpdateStudentFormOpen}
          onClose={closeUpdateStudentForm}
        >
          <UpdateStudentForm closeForm={closeUpdateStudentForm} />
        </Modal>

        {/* VIEW STUDENT FORM */}
        <Modal isOpen={isViewStudentFormOpen} onClose={closeViewStudentForm}>
          <ViewStudentModal closeForm={closeViewStudentForm} />
        </Modal>

        {/* DELETE STUDENT MODAL */}
        <Modal
          isOpen={isDeleteStudentModalOpen}
          onClose={closeDeleteStudentModal}
        >
          <DeleteStudentModal closeForm={closeDeleteStudentModal} />
        </Modal>
      </div>
    </>
  );
};

export default StudentInformation;

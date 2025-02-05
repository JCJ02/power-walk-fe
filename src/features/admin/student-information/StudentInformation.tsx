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
import { FaEye } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "../../../components/Modal";
import NewStudentForm from "./components/NewStudentForm";
import UpdateStudentForm from "./components/UpdateStudentForm";
import ViewStudentModal from "./components/ViewStudentModal";
import DeleteStudentModal from "./components/DeleteStudentModal";
import useFetchStudents from "./hooks/useFetchStudents";
import { StudentType } from "../../../types/StudentType";
import { format } from "date-fns";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";
import generatePaginationLinks from "../../../utils/generatePaginationLinks";

const StudentInformation = () => {
  const [isNewStudentFormOpen, setIsNewStudentFormOpen] = useState(false);
  const [isUpdateStudentFormOpen, setIsUpdateStudentFormOpen] = useState(false);
  const [isViewStudentFormOpen, setIsViewStudentFormOpen] = useState(false);
  const [isDeleteStudentModalOpen, setIsDeleteStudentModalOpen] =
    useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentType | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const { data, isLoading, isError, error } = useFetchStudents(
    searchQuery,
    currentPage,
    limit
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // HANDLE NEW STUDENT FORM
  const openNewStudentForm = () => {
    setIsNewStudentFormOpen(true);
  };
  const closeNewStudentForm = () => {
    setIsNewStudentFormOpen(false);
  };

  // HANDLE UPDATE STUDENT FORM
  const openUpdateStudentForm = (
    event: React.FormEvent,
    student: StudentType
  ) => {
    event.preventDefault();
    setSelectedStudent(student);
    setIsUpdateStudentFormOpen(true);
  };
  const closeUpdateStudentForm = () => {
    setIsUpdateStudentFormOpen(false);
  };

  // HANDLE VIEW STUDENT FORM
  const openViewStudentForm = (
    event: React.FormEvent,
    student: StudentType
  ) => {
    event.preventDefault();
    setSelectedStudent(student);
    setIsViewStudentFormOpen(true);
  };
  const closeViewStudentForm = () => {
    setIsViewStudentFormOpen(false);
  };

  // HANDLE DELETE STUDENT FORM
  const openDeleteStudentModal = (
    event: React.FormEvent,
    student: StudentType
  ) => {
    event.preventDefault();
    setSelectedStudent(student);
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
      <div className="flex flex-col items-start gap-5 font-poppins py-5 pl-6 lg:pl-8 pr-6 lg:pr-10 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 h-screen w-full">
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
            className="text-xs md:text-md border-[#385A65] md:w-[280px]"
            placeholder="Search Student Information"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* STUDENT INFORMATION TABLE */}
        <div className="flex flex-col gap-2 w-full">
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
              {isLoading ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center text-xs md:text-md lg:text-lg text-gray-500"
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              ) : isError ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-xs md:text-md lg:text-lg text-red-500"
                  >
                    {`Error: ${error?.message || "An Unknown Error Occurred."}`}
                  </TableCell>
                </TableRow>
              ) : data && data?.data.students.length > 0 ? (
                data.data.students.map(
                  (student: StudentType, index: number) => (
                    <TableRow
                      key={student.id}
                      className={index % 2 === 0 ? "bg-[#FFE95F]" : "bg-white"}
                    >
                      <TableCell className="text-sm">
                        {student.studentId}
                      </TableCell>
                      <TableCell className="text-sm">
                        {`${student.firstname} ${student.middlename} ${student.lastname}`}
                      </TableCell>
                      <TableCell className="text-sm">{student.email}</TableCell>
                      <TableCell className="text-sm">
                        {format(new Date(student.dateOfBirth), "MMMM dd, yyyy")}
                      </TableCell>
                      <TableCell className="text-sm">
                        {student.address}
                      </TableCell>
                      <TableCell className="flex items-center gap-1">
                        {/* VIEW BUTTON */}
                        <Button
                          className="bg-[#FFFFFF] text-[#385A65] p-1 rounded-md"
                          onClick={(event: React.FormEvent) => {
                            openViewStudentForm(event, student);
                          }}
                        >
                          <FaEye />
                        </Button>

                        {/* EDIT BUTTON */}
                        <Button
                          className="bg-[#FFFFFF] text-green-500 p-1 rounded-md"
                          onClick={(event: React.FormEvent) => {
                            event.stopPropagation();
                            openUpdateStudentForm(event, student);
                          }}
                        >
                          <MdEditSquare />
                        </Button>

                        {/* DELETE BUTTON */}
                        <Button
                          className="bg-[#FFFFFF] text-red-700 p-1 rounded-md"
                          onClick={(event: React.FormEvent) => {
                            event.stopPropagation();
                            openDeleteStudentModal(event, student);
                          }}
                        >
                          <RiDeleteBin6Fill />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center text-xs md:text-md lg:text-lg text-gray-500"
                  >
                    No Data Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* PAGINATION */}
          <Pagination className="justify-end">
            <PaginationContent className="flex items-center">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="text-sm"
                />
              </PaginationItem>

              {/* DYNAMIC PAGINATION LINKS */}
              {generatePaginationLinks(
                currentPage,
                Math.ceil((data?.data?.totalStudents ?? 0) / limit)
              ).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(page)}
                    className={
                      currentPage === page
                        ? "bg-[#385A65] text-white text-xs"
                        : ""
                    }
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={data && data?.data?.students?.length < limit}
                  className="text-sm"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* NEW STUDENT FORM */}
        <Modal
          className="px-4"
          isOpen={isNewStudentFormOpen}
          onClose={closeNewStudentForm}
        >
          <NewStudentForm closeForm={closeNewStudentForm} />
        </Modal>

        {/* UPDATE STUDENT FORM */}
        <Modal
          isOpen={isUpdateStudentFormOpen}
          onClose={closeUpdateStudentForm}
        >
          {isUpdateStudentFormOpen && selectedStudent ? (
            <UpdateStudentForm
              student={selectedStudent}
              closeForm={closeUpdateStudentForm}
            />
          ) : null}
        </Modal>

        {/* VIEW STUDENT FORM */}
        <Modal isOpen={isViewStudentFormOpen} onClose={closeViewStudentForm}>
          {isViewStudentFormOpen && selectedStudent ? (
            <ViewStudentModal
              student={selectedStudent}
              closeForm={closeViewStudentForm}
            />
          ) : null}
        </Modal>

        {/* DELETE STUDENT MODAL */}
        <Modal
          isOpen={isDeleteStudentModalOpen}
          onClose={closeDeleteStudentModal}
        >
          {isDeleteStudentModalOpen && selectedStudent ? (
            <DeleteStudentModal
              student={selectedStudent}
              closeForm={closeDeleteStudentModal}
            />
          ) : null}
        </Modal>
      </div>
    </>
  );
};

export default StudentInformation;

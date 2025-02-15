import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "../../../components/Button";
import { Input } from "../../../components/ui/input";
import Modal from "../../../components/Modal";
import NewRFIDForm from "./components/NewRFIDForm";
import useFetchRFIDs from "./hooks/useFetchRFIDs";
import { RFIDType } from "../../../types/RFIDType";

const RFID = () => {
  const [isNewRFIDForm, setIsNewRFIDForm] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const { RFIDData, isRFIDLoading, isRFIDError, RFIDError } = useFetchRFIDs(
    searchQuery,
    currentPage,
    limit
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // HANDLE NEW STUDENT FORM
  const openNewRFIDForm = () => {
    setIsNewRFIDForm(true);
  };
  const closeNewRFIDForm = () => {
    setIsNewRFIDForm(false);
  };
  useEffect(() => {
    document.title = "RFID Registration - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="flex flex-col items-start gap-5 font-poppins py-5 pl-6 lg:pl-8 pr-6 lg:pr-10 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 h-screen w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl xl:text-3xl font-semibold">
            Radio-Frequency IDentification
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-2 w-full">
          <Button
            className="flex items-center gap-2 font-poppins text-white bg-[#385A65] px-4 rounded-md"
            // onClick={openNewStudentForm}
            onClick={openNewRFIDForm}
          >
            <FaPlus />
            <label className="text-xs md:text-md lg:text-lg cursor-pointer">
              Register RFID
            </label>
          </Button>
          <Input
            className="text-xs md:text-md border-[#385A65] md:w-[280px]"
            placeholder="Search RFID or UID"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* RFID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 w-full">
          {isRFIDLoading ? (
            <div className="flex justify-center items-center gap-1 border-2 p-5 rounded-md h-[144px]">
              <label className="text-center text-lg text-gray-500">
                Loading...
              </label>
            </div>
          ) : isRFIDError ? (
            <div className="flex items-center gap-1 border-2 p-5 rounded-md h-[144px]">
              <label className="text-center text-lg text-gray-500 h-[144px]">{`Error: ${
                RFIDError?.message || "An Unknown Error Occurred."
              }`}</label>
            </div>
          ) : RFIDData && RFIDData?.data.rfids.length > 0 ? (
            RFIDData.data.rfids.map((rfid: RFIDType, index: number) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-center items-center gap-1 border-2 p-5 rounded-md h-[144px]"
              >
                <label className="text-lg">RFID Number:</label>
                <label className="text-lg font-bold">{rfid.uid}</label>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center gap-1 border-2 p-5 rounded-md h-[144px]">
              <label className="text-center text-lg text-gray-500">
                No Data Found
              </label>
            </div>
          )}
        </div>

        {/* NEW STUDENT FORM */}
        <Modal
          className="px-4"
          isOpen={isNewRFIDForm}
          onClose={closeNewRFIDForm}
        >
          {/* <NewStudentForm closeForm={closeNewStudentForm} /> */}
          <NewRFIDForm closeForm={closeNewRFIDForm} />
        </Modal>
      </div>
    </>
  );
};

export default RFID;

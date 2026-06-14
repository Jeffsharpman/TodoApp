import React, {useContext} from "react";
import TaskFormModal from "./TaskFormModal";
import Filter from "./Filter";
import TaskItem from "./TaskItem";
import Head from "./Head";
import Footer from "./Footer";
import Modal from "./Modal";
import { PageContext } from "../context/PageContext";

const Main = () => {
  const { isModalOpen, setIsModalOpen } = useContext(PageContext);
  return (
    <main
      className="min-h-screen bg-[#0E0E0E] text-[#F2F0EB] font-sans
      max-w-6xl mx-auto px-6 py-16 space-y-8"
    >
      <Head />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Task"
      >
        <TaskFormModal />
      </Modal>
      <Filter />
      <TaskItem />
    </main>
  );
};

export default Main;

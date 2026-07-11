import React, { useContext } from "react";
import TaskFormModal from "./TaskFormModal";
import Filter from "./Filter";
import TaskItem from "./TaskItem";
import Head from "./Head";
import Footer from "./Footer";
import Modal from "./Modal";
import WhatsAppFab from "./WhatsAppFab";
import { PageContext } from "../lib/PageContext";

const Main = () => {
  const { isModalOpen, setIsModalOpen } = useContext(PageContext);
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
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
        <WhatsAppFab />
      </div>
    </main>
  );
};

export default Main;

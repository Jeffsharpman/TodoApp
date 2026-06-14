import React from "react";
import { ClipboardList, CheckCircle, Search } from "lucide-react";

const EmptyState = ({ state = "No Task" }) => {
  let emptyStateContent;

  if (state === "No Task") {
    emptyStateContent = (
      <div className="empty-card border border-[#2C2C2C] bg-[#0E0E0E] rounded-2xl py-16 px-8 text-center">
        <div className="flex justify-center mb-6">
          <ClipboardList size={72} className="text-[#555]" strokeWidth={1.5} />
        </div>
        <p className="text-2xl font-medium text-white">No tasks yet</p>
        <p className="text-[#888880] mt-3 text-lg">Add your first task above</p>
      </div>
    );
  } else if (state === "All Caught Up") {
    emptyStateContent = (
      <div className="empty-card border border-[#C8F13530] bg-[#C8F13508] rounded-2xl py-16 px-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={72} className="text-[#C8F135]" strokeWidth={1.5} />
        </div>
        <p className="text-2xl font-medium text-[#C8F135]">All caught up!</p>
        <p className="text-[#888880] mt-3 text-lg">Great work</p>
      </div>
    );
  } else if (state === "No Result") {
    emptyStateContent = (
      <div className="empty-card border border-[#2C2C2C] bg-[#0E0E0E] rounded-2xl py-16 px-8 text-center">
        <div className="flex justify-center mb-6">
          <Search size={72} className="text-[#555]" strokeWidth={1.5} />
        </div>
        <p className="text-2xl font-medium text-white">No results</p>
        <p className="text-[#888880] mt-3 text-lg">Try different filters</p>
      </div>
    );
  } else {
    // Default fallback
    emptyStateContent = (
      <div className="empty-card border border-[#2C2C2C] bg-[#0E0E0E] rounded-2xl py-16 px-8 text-center">
        <div className="flex justify-center mb-6">
          <ClipboardList size={72} className="text-[#555]" strokeWidth={1.5} />
        </div>
        <p className="text-2xl font-medium text-white">No tasks yet</p>
        <p className="text-[#888880] mt-3 text-lg">Add your first task above</p>
      </div>
    );
  }

  return (
    <>
      {/* 06 — Empty States */}
      <section id="empty">
        <div className="showcase-card border border-[#2C2C2C] bg-[#0E0E0E] rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12">{emptyStateContent}</div>
        </div>
      </section>
    </>
  );
};

export default EmptyState;

import React from "react";

const EmptyState = () => {
  return (
    <>
      {/* 06 — Empty States */}
      <section id="empty">
        {/* <p className="comp-label">06 — EMPTY STATES</p> */}
        <div className="showcase-card p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="empty-card">
              <div className="text-6xl mb-6">📋</div>
              <p className="text-xl font-medium">No tasks yet</p>
              <p className="text-[#888880] mt-2">Add your first task above</p>
            </div>
            <div
              className="empty-card"
              style={{ borderColor: "#C8F13530", background: "#C8F13508" }}
            >
              <div className="text-6xl mb-6">🎉</div>
              <p className="text-xl font-medium text-[#C8F135]">
                All caught up!
              </p>
              <p className="text-[#888880] mt-2">Great work</p>
            </div>
            <div className="empty-card">
              <div className="text-6xl mb-6">🔍</div>
              <p className="text-xl font-medium">No results</p>
              <p className="text-[#888880] mt-2">Try different filters</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmptyState;

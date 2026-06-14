import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";

const filterOptions = ["All", "Active", "Done"];

const Filter = () => {
  const { filter, setFilter, category, priority, setCategoryFilter, setPriorityFilter, setSortFilter } = useContext(PageContext);

  return (
    <div>
      {/* 03 — Filters */}
      <section id="filters">
        {/* <p className="comp-label">03 — FILTER BAR</p> */}
        <div className="showcase-card">
          <div className="p-8">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-2 bg-[#181818] p-1 rounded-xl">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    className={`f-tab ${option === filter ? "active" : ""}`}
                    onClick={() => setFilter(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <select className="sel" onChange={(e) => setCategoryFilter(e.target.value)}>
                  <option value="All">All Categories</option>
                  {category.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <select className="sel" onChange={(e) => setPriorityFilter(e.target.value)}>
                  <option value="All">All Priorities</option>
                  {priority.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <select className="sel" onChange={(e) => setSortFilter(e.target.value)}>
                  <option value="Newest first">Newest first</option>
                  <option value="By priority">By priority</option>
                </select>
                {/* <button className="clear-btn">Clear Done</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filter;

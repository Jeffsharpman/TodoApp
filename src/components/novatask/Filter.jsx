import React, { useContext } from "react";
import { motion } from "framer-motion";
import { PageContext } from "../lib/PageContext";
import { fadeInUp } from "../lib/animations";

const filterOptions = ["All", "Active", "Done"];

const Filter = () => {
  const {
    filter,
    setFilter,
    category,
    priority,
    setCategoryFilter,
    setPriorityFilter,
    setSortFilter,
  } = useContext(PageContext);

  return (
    <div>
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        id="filters"
      >
        <div className="showcase-card">
          <div className="p-8">
            <div className="flex flex-wrap gap-6 justify-between items-center">
              {/* Status Tabs */}
              <div className="flex bg-card p-1.5 rounded-2xl border border-line">
                {filterOptions.map((option) => (
                  <motion.button
                    key={option}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(option)}
                    className={`f-tab px-6 py-2.5 text-sm font-mono tracking-widest rounded-xl transition-all ${
                      option === filter
                        ? "bg-primary text-black font-medium"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {/* Category Filter */}
                <select
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="sel bg-card border border-line text-muted font-mono text-sm px-5 py-3 rounded-2xl focus:outline-none focus:border-primary cursor-pointer transition-colors"
                >
                  <option value="All">All Categories</option>
                  {category.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                {/* Priority Filter */}
                <select
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="sel bg-card border border-line text-muted font-mono text-sm px-5 py-3 rounded-2xl focus:outline-none focus:border-primary cursor-pointer transition-colors"
                >
                  <option value="All">All Priorities</option>
                  {priority.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>

                {/* Sort Filter */}
                <select
                  onChange={(e) => setSortFilter(e.target.value)}
                  className="sel bg-card border border-line text-muted font-mono text-sm px-5 py-3 rounded-2xl focus:outline-none focus:border-primary cursor-pointer transition-colors"
                >
                  <option value="Newest first">Newest first</option>
                  <option value="Oldest first">Oldest first</option>
                  <option value="By priority">By priority</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Filter;

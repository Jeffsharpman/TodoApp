import { useContext } from "react";
import { motion } from "framer-motion";
import { PageContext } from "../lib/PageContext";
import { fadeInUp } from "../lib/animations";
import Card from "../UI/Card";
import Button from "../UI/Button";
import StyledSelect from "../UI/StyledSelect";

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
        <Card variant="surface" padding="p-8">
          <div className="flex flex-wrap gap-6 justify-between items-center">
            <div className="flex bg-card p-1.5 rounded-2xl border border-line">
              {filterOptions.map((option) => (
                <Button
                  key={option}
                  variant={option === filter ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(option)}
                  className={`!px-6 !py-2.5 !text-sm !font-mono !tracking-widest !rounded-xl ${
                    option !== filter ? "!text-muted" : ""
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <StyledSelect
                defaultValue="All"
                onChange={(e) => setCategoryFilter(e.target.value)}
                options={[
                  { value: "All", label: "All Categories" },
                  ...category.map((c) => ({ value: c, label: c })),
                ]}
              />
              <StyledSelect
                defaultValue="All"
                onChange={(e) => setPriorityFilter(e.target.value)}
                options={[
                  { value: "All", label: "All Priorities" },
                  ...priority.map((p) => ({ value: p, label: p })),
                ]}
              />
              <StyledSelect
                defaultValue="Newest first"
                onChange={(e) => setSortFilter(e.target.value)}
                options={[
                  { value: "Newest first", label: "Newest first" },
                  { value: "Oldest first", label: "Oldest first" },
                  { value: "By priority", label: "By priority" },
                ]}
              />
            </div>
          </div>
        </Card>
      </motion.section>
    </div>
  );
};

export default Filter;

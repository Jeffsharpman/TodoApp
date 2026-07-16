import { useRef, useContext } from "react";
import { PageContext } from "../lib/PageContext";
import { Plus } from "lucide-react";
import Button from "../UI/Button";
import BadgeGroup from "../UI/BadgeGroup";
import Input from "../UI/Input";

const TaskFormModal = () => {
  const {
    input,
    setInput,
    todos,
    setTodos,
    cat,
    setCat,
    prio,
    setPrio,
    getCategoryColor,
    getPriorityColor,
    category,
    priority,
    setIsModalOpen,
  } = useContext(PageContext);
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  const id = todos.length + 1;
  const handleTask = () => {
    if (input.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: id,
          text: input,
          cat: cat,
          prio: prio,
          done: false,
          createdAt: Date.now(),
        },
      ]);
      setInput("");
      setCat("Work");
      setPrio("High");
      setIsModalOpen(false);
    } else return;
  };

  return (
    <div>
      <section id="input">
        <div className="w-full bg-transparent">
          <div className="space-y-5">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to get done?"
                className="flex-1 [&_input]:!py-4"
              />
              <Button
                variant="primary"
                onClick={() => {
                  focusInput();
                  handleTask();
                }}
                className="!px-8 !rounded-xl !font-mono !text-sm"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span className="hidden sm:inline">ADD TASK</span>
              </Button>
            </div>

            <div className="space-y-4 pt-1">
              <BadgeGroup
                label="CATEGORY"
                items={category}
                selected={cat}
                onSelect={setCat}
                getColor={getCategoryColor}
              />
              <BadgeGroup
                label="PRIORITY"
                items={priority}
                selected={prio}
                onSelect={setPrio}
                getColor={getPriorityColor}
                formatLabel={(l) => l.toUpperCase()}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskFormModal;

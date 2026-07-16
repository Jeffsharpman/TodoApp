import { CheckCircle2, ListTodo, Star, Clock, Tag, Zap } from "lucide-react";

function Marquee() {
  const items = [
    { icon: CheckCircle2, text: "Task Completion" },
    { icon: ListTodo, text: "Smart Lists" },
    { icon: Star, text: "Priority Levels" },
    { icon: Clock, text: "Deadlines" },
    { icon: Tag, text: "Categories" },
    { icon: Zap, text: "Quick Actions" },
  ];

  return (
    <div className="relative overflow-hidden border-y border-line bg-canvas py-8">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="flex items-center gap-3 font-['Bebas_Neue'] text-3xl tracking-wider text-ink md:text-5xl">
              <item.icon className="h-6 w-6 text-primary" />
              {item.text}
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

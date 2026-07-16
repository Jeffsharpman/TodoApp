import Badge from "./Badge";

const BadgeGroup = ({
  label,
  items,
  selected,
  onSelect,
  getColor,
  formatLabel = (l) => l,
  className = "",
}) => (
  <div className={className}>
    <p className="mb-2 text-[10px] font-mono tracking-widest text-muted">
      {label}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Badge
          key={item}
          variant={item === selected ? "solid" : "default"}
          className={`cursor-pointer !px-3.5 !py-1.5 !text-xs transition-all ${
            item === selected ? "" : "hover:border-hover-bdr"
          }`}
          style={{ color: getColor(item) }}
          onClick={() => onSelect(item)}
        >
          {formatLabel(item)}
        </Badge>
      ))}
    </div>
  </div>
);

export default BadgeGroup;

import Badge from "./Badge";

const TagBadge = ({ label, color, className = "" }) => (
  <Badge
    className={`!px-3 !py-1 ${className}`}
    style={{
      color,
      borderColor: `${color}30`,
    }}
  >
    {label}
  </Badge>
);

export default TagBadge;

import { ShortcutCardProps, colors } from "../../../types";

function ShortcutCard({
  title,
  shortcuts,
  titleColor,
  bgColor,
}: ShortcutCardProps) {
  return (
    <div
      className="p-4 rounded-lg shadow-md"
      style={{ backgroundColor: bgColor }}
    >
      <h3
        className="text-lg font-bold text-center mb-2"
        style={{ color: titleColor }}
      >
        {title}
      </h3>
      <ul className="gap-2">
        {shortcuts.map((shortcut, index) => (
          <li key={index} className="flex justify-between">
            <span className="font-medium" style={{ color: colors.text }}>
              {shortcut.keys}
            </span>
            <span style={{ color: colors.subtext0 }}>{shortcut.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortcutCard;

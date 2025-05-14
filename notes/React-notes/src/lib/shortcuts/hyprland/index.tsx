import ShortcutCard from "../../components/ui/ShortcutCard";
import { colors } from "../../../types";
import {
  hyprlandApps,
  hyprlandWindows,
  hyprlandMovement,
  hyprlandWorkspace,
  hyprlandActions,
  hyprlandFnKeys,
} from "../data";

const sections = [
  {
    title: "Aplicativos",
    shortcuts: hyprlandApps,
    titleColor: colors.blue,
    bgColor: colors.surface0,
  },
  {
    title: "Gerenciamento de Janelas",
    shortcuts: hyprlandWindows,
    titleColor: colors.sapphire,
    bgColor: colors.mantle,
  },
  {
    title: "Movimentação",
    shortcuts: hyprlandMovement,
    titleColor: colors.blue,
    bgColor: colors.surface0,
  },
  {
    title: "Workspaces",
    shortcuts: hyprlandWorkspace,
    titleColor: colors.sapphire,
    bgColor: colors.mantle,
  },
  {
    title: "Ações do Sistema",
    shortcuts: hyprlandActions,
    titleColor: colors.blue,
    bgColor: colors.surface0,
  },
  {
    title: "Teclas Fn",
    shortcuts: hyprlandFnKeys,
    titleColor: colors.sapphire,
    bgColor: colors.mantle,
  },
];

function HyprlandShortcuts() {
  return (
    <section
      id="hyprland"
      className="mb-12"
      style={{ scrollMarginTop: "5rem" }}
    >
      <h2
        className="text-xl font-bold mb-4 p-2 rounded"
        style={{ backgroundColor: colors.blue, color: colors.crust }}
      >
        Hyprland
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {sections.map((section) => (
          <ShortcutCard
            key={section.title}
            title={section.title}
            shortcuts={section.shortcuts}
            titleColor={section.titleColor}
            bgColor={section.bgColor}
          />
        ))}
      </div>
    </section>
  );
}

export default HyprlandShortcuts;

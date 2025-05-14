import ShortcutCard from "../../components/ui/ShortcutCard";
import { colors } from "../../../types";
import { nvimBasic, nvimMovement, nvimEditing, nvChadSpecial } from "../data";

const sections = [
  {
    title: "Comandos Básicos",
    shortcuts: nvimBasic,
    titleColor: colors.green,
    bgColor: colors.surface0,
  },
  {
    title: "Movimentação",
    shortcuts: nvimMovement,
    titleColor: colors.teal,
    bgColor: colors.mantle,
  },
  {
    title: "Edição",
    shortcuts: nvimEditing,
    titleColor: colors.green,
    bgColor: colors.surface0,
  },
  {
    title: "Comandos NvChad",
    shortcuts: nvChadSpecial,
    titleColor: colors.teal,
    bgColor: colors.mantle,
  },
];

function NeovimShortcuts() {
  return (
    <section id="neovim" className="mb-12">
      <h2
        className="text-xl font-bold mb-4 p-2 rounded"
        style={{ backgroundColor: colors.green, color: colors.crust }}
      >
        Neovim / NvChad
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

export default NeovimShortcuts;

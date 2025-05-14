import ShortcutCard from "../../components/ui/ShortcutCard";
import { colors } from "../../../types";
import {
  qutebrowserBasic,
  qutebrowserTabs,
  qutebrowserNavigation,
} from "../data";

const sections = [
  {
    title: "Navegação Básica",
    shortcuts: qutebrowserBasic,
    titleColor: colors.mauve,
    bgColor: colors.surface0,
  },
  {
    title: "Gerenciar Abas",
    shortcuts: qutebrowserTabs,
    titleColor: colors.lavender,
    bgColor: colors.mantle,
  },
  {
    title: "Navegação na Página",
    shortcuts: qutebrowserNavigation,
    titleColor: colors.mauve,
    bgColor: colors.surface0,
  },
];

function QutebrowserShortcuts() {
  return (
    <section id="qutebrowser" className="mb-12">
      <h2
        className="text-xl font-bold mb-4 p-2 rounded"
        style={{ backgroundColor: colors.mauve, color: colors.crust }}
      >
        Qutebrowser
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

export default QutebrowserShortcuts;

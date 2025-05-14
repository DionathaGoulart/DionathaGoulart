import { colors } from "../../types";
import HyprlandShortcuts from "../../lib/shortcuts/hyprland";
import NeovimShortcuts from "../../lib/shortcuts/neovim";
import QutebrowserShortcuts from "../../lib/shortcuts/qutebrowser";

function Home() {
  return (
    <div className="gap-8">
      <div className="text-center mb-8">
        <h1
          className="text-2xl font-bold mb-3"
          style={{ color: colors.rosewater }}
        >
          Atalhos de Teclado
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        <HyprlandShortcuts />
        <NeovimShortcuts />
        <QutebrowserShortcuts />
      </div>
    </div>
  );
}

export default Home;

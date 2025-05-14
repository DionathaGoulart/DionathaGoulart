import { colors } from "../../../types";

function Footer() {
  return (
    <footer className="py-4 mt-8" style={{ backgroundColor: colors.crust }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p style={{ color: colors.overlay0 }}>Tema: Catppuccin Mocha</p>
          <p className="mt-2" style={{ color: colors.overlay2 }}>
            © {new Date().getFullYear()} - Adaptado para monitor vertical
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

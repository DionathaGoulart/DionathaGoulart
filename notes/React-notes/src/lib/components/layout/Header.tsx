import { colors } from "../../../types";

const navLinks = [
  { href: "#hyprland", label: "Hyprland", color: colors.blue },
  { href: "#neovim", label: "Neovim", color: colors.green },
  { href: "#qutebrowser", label: "Qutebrowser", color: colors.mauve },
];

function Header() {
  return (
    <header
      className="py-4 sticky top-0 z-10"
      style={{ backgroundColor: colors.crust }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1
            className="text-2xl font-bold"
            style={{ color: colors.rosewater }}
          >
            Notes
          </h1>
          <nav>
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:underline"
                    style={{ color: link.color }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

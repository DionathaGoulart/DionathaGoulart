import { colors } from "../../types";

function About() {
  return (
    <div className="container mx-auto p-6">
      <h1
        className="text-2xl font-bold mb-6"
        style={{ color: colors.rosewater }}
      >
        Sobre este Guia de Atalhos
      </h1>

      <div className="space-y-4" style={{ color: colors.text }}>
        <p>
          Este guia foi criado para facilitar a visualização e memorização dos
          atalhos de teclado para Hyprland, Neovim/NvChad e Qutebrowser em um
          monitor vertical.
        </p>

        <h2
          className="text-xl font-bold mt-6 mb-3"
          style={{ color: colors.flamingo }}
        >
          Tema
        </h2>
        <p>
          O tema utilizado é o Catppuccin Mocha, popular na comunidade de
          personalização e conhecido por suas cores suaves e agradáveis.
        </p>

        <h2
          className="text-xl font-bold mt-6 mb-3"
          style={{ color: colors.flamingo }}
        >
          Organização
        </h2>
        <p>
          Os atalhos estão organizados por aplicativo e por categoria funcional
          para facilitar a consulta rápida durante o uso diário.
        </p>
      </div>
    </div>
  );
}

export default About;

import { Shortcut } from "../../types";

// Hyprland Shortcuts
export const hyprlandApps: Shortcut[] = [
  { keys: "Super + Return", action: "Abrir Alacritty" },
  { keys: "Super + K", action: "Abrir Kitty" },
  { keys: "Super + W", action: "Abrir Firefox" },
  { keys: "Super + B", action: "Abrir Brave" },
  { keys: "Super + Shift + W", action: "Abrir Qutebrowser" },
  { keys: "Super + C", action: "Abrir SpeedCrunch" },
  { keys: "Super + N", action: "Abrir Neovim no Alacritty" },
  { keys: "Super + Shift + N", action: "Abrir Neovim no Kitty" },
  { keys: "Super + E", action: "Abrir Thunar" },
  { keys: "Super + Shift + E", action: "Thunar como Admin" },
  { keys: "Super + V", action: "Abrir VS Code" },
  { keys: "Super + M", action: "Abrir Pavucontrol" },
  { keys: "Super + R", action: "Abrir Network Manager" },
  { keys: "Super + S", action: "Abrir htop" },
  { keys: "Super + F1", action: "Abrir bpytop" },
  { keys: "Super + Ctrl + S", action: "Abrir fastfetch" },
];

export const hyprlandWindows: Shortcut[] = [
  { keys: "Super + Q", action: "Fechar janela ativa" },
  { keys: "Alt + F4", action: "Fechar janela ativa" },
  { keys: "Super + F", action: "Fullscreen parcial" },
  { keys: "Super + Shift + F", action: "Fullscreen total" },
  { keys: "Super + T", action: "Alternar flutuante" },
  { keys: "Super + J", action: "Alternar split" },
  { keys: "Alt + Tab", action: "Próxima janela" },
  { keys: "Super + Tab", action: "Próxima janela" },
];

export const hyprlandMovement: Shortcut[] = [
  { keys: "Super + ←→↑↓", action: "Mover janela" },
  { keys: "Super + Mouse1", action: "Mover janela" },
  { keys: "Super + Mouse2", action: "Redimensionar janela" },
  { keys: "Super + Shift + ↑", action: "Diminuir janela verticalmente" },
  { keys: "Super + Shift + ↓", action: "Aumentar janela verticalmente" },
  { keys: "Super + Shift + ←", action: "Diminuir janela horizontalmente" },
  { keys: "Super + Shift + →", action: "Aumentar janela horizontalmente" },
];

export const hyprlandWorkspace: Shortcut[] = [
  { keys: "Super + 1-6", action: "Mudar workspace" },
  { keys: "Super + Ctrl + ←", action: "Workspace anterior" },
  { keys: "Super + Ctrl + →", action: "Próximo workspace" },
  { keys: "Super + Ctrl + ↓", action: "Workspace vazio" },
];

export const hyprlandActions: Shortcut[] = [
  { keys: "Super + A", action: "Rofi menu" },
  { keys: "Super + Shift + B", action: "Reiniciar Waybar" },
  { keys: "Super + Shift + R", action: "Recarregar Hyprland" },
  { keys: "Super + Shift + Q", action: "Menu wlogout" },
  { keys: "Super + L", action: "Bloquear tela" },
  { keys: "Super + Shift + S", action: "Capturar área" },
  { keys: "Super + Print", action: "Capturar tela" },
  { keys: "Super + Shift + Z", action: "Editar config Hyprland" },
  { keys: "Super + Shift + X", action: "Editar Waybar" },
  { keys: "Super + Shift + V", action: "Editar módulos Waybar" },
];

export const hyprlandFnKeys: Shortcut[] = [
  { keys: "XF86MonBrightness ↑↓", action: "Controle de brilho" },
  { keys: "XF86Audio ↑↓", action: "Controle de volume" },
  { keys: "XF86AudioMute", action: "Mutar áudio" },
  { keys: "XF86AudioMicMute", action: "Mutar microfone" },
  { keys: "XF86Lock", action: "Bloquear tela" },
  { keys: "Print", action: "Capturar tela" },
];

// Neovim/NvChad Shortcuts
export const nvimBasic: Shortcut[] = [
  { keys: "i", action: "Modo inserção" },
  { keys: "Esc", action: "Modo normal" },
  { keys: ":w", action: "Salvar arquivo" },
  { keys: ":q", action: "Sair" },
  { keys: ":wq", action: "Salvar e sair" },
  { keys: ":q!", action: "Sair sem salvar" },
];

export const nvimMovement: Shortcut[] = [
  { keys: "h j k l", action: "Mover esquerda/baixo/cima/direita" },
  { keys: "w", action: "Próxima palavra" },
  { keys: "b", action: "Palavra anterior" },
  { keys: "0", action: "Início da linha" },
  { keys: "$", action: "Final da linha" },
  { keys: "gg", action: "Início do arquivo" },
  { keys: "G", action: "Final do arquivo" },
];

export const nvimEditing: Shortcut[] = [
  { keys: "dd", action: "Cortar linha" },
  { keys: "yy", action: "Copiar linha" },
  { keys: "p", action: "Colar" },
  { keys: "u", action: "Desfazer" },
  { keys: "Ctrl + r", action: "Refazer" },
];

export const nvChadSpecial: Shortcut[] = [
  { keys: "Space + th", action: "Mudar tema" },
  { keys: "Space + e", action: "Abrir navegador de arquivos" },
  { keys: "Space + /", action: "Comentar linhas" },
  { keys: "Space + ff", action: "Buscar arquivos" },
  { keys: "Space + fb", action: "Buffers abertos" },
];

// Qutebrowser Shortcuts
export const qutebrowserBasic: Shortcut[] = [
  { keys: "o", action: "Abrir URL" },
  { keys: "O", action: "Editar URL atual" },
  { keys: "r", action: "Recarregar página" },
  { keys: "R", action: "Recarregar página (ignorar cache)" },
  { keys: "H", action: "Voltar" },
  { keys: "L", action: "Avançar" },
];

export const qutebrowserTabs: Shortcut[] = [
  { keys: "J", action: "Aba anterior" },
  { keys: "K", action: "Próxima aba" },
  { keys: "d", action: "Fechar aba" },
  { keys: "u", action: "Reabrir aba fechada" },
  { keys: "T", action: "Nova aba" },
  { keys: "gt", action: "Ir para aba N" },
];

export const qutebrowserNavigation: Shortcut[] = [
  { keys: "/", action: "Buscar na página" },
  { keys: "n", action: "Próxima ocorrência" },
  { keys: "N", action: "Ocorrência anterior" },
  { keys: "f", action: "Links clicáveis" },
  { keys: "F", action: "Links em nova aba" },
  { keys: "g g", action: "Topo da página" },
  { keys: "G", action: "Final da página" },
];

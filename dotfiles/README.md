# 🚀 Dotfiles

Meus arquivos de configuração pessoais para Arch Linux com Hyprland e tema Catppuccin Mocha.

<div align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="600px" />
</div>

## 🍮 Tema Catppuccin Mocha

Todos os dotfiles seguem o tema [Catppuccin Mocha](https://github.com/catppuccin/catppuccin), uma paleta de cores pastel suave e aconchegante com tons escuros.

## 🧩 Programas Configurados

- **Alacritty**: Terminal rápido e minimalista
- **GTK-3.0/4.0**: Configurações de tema para aplicativos GTK
- **Hyprland**: Compositor Wayland dinâmico e moderno
- **Qutebrowser**: Navegador minimalista com controles de teclado
- **Rofi**: Launcher de aplicativos personalizado
- **Thunar**: Gerenciador de arquivos leve
- **Waybar**: Barra de status moderna para Wayland

## 📋 Pré-requisitos

```bash
sudo pacman -S hyprland waybar rofi alacritty thunar qutebrowser
yay -S catppuccin-gtk-theme-mocha ttf-fira-sans
```

## 🔧 Instalação

### Método Manual

1. Clone este repositório:

   ```bash
   git clone https://github.com/GoodGD-Dev/GoodGD-Dev.git
   cd GoodGD-Dev/dotfiles
   ```

2. Faça backup das suas configurações atuais (opcional):

   ```bash
   mkdir -p ~/.config_backup
   cp -r ~/.config/{alacritty,gtk-3.0,gtk-4.0,hypr,qutebrowser,rofi,thunar,waybar} ~/.config_backup/
   ```

3. Copie os arquivos para seus respectivos diretórios:

   ```bash
   cp -r alacritty ~/.config/
   cp -r gtk-3.0 ~/.config/
   cp -r gtk-4.0 ~/.config/
   cp -r hypr ~/.config/
   cp -r qutebrowser ~/.config/
   cp -r rofi ~/.config/
   cp -r thunar ~/.config/
   cp -r waybar ~/.config/
   ```

4. Atualize o tema GTK:
   ```bash
   gsettings set org.gnome.desktop.interface gtk-theme "Catppuccin-Mocha"
   ```

### Usando o Script de Instalação

Você também pode usar o script de instalação automatizado:

```bash
./install.sh
```

## 🎨 Detalhes dos Temas

### Rofi

Launcher centralizado com ícones, usando as cores Catppuccin Mocha e a fonte Fira Sans.

### Waybar

Barra moderna com módulos para:

- Workspaces do Hyprland
- Status do sistema
- Informações de áudio
- Data e hora
- Menu de energia

### Hyprland

Configurado para uma experiência fluida com:

- Animações suaves
- Regras de janela
- Atalhos de teclado intuitivos
- Integração com o tema Catppuccin Mocha

#!/bin/bash

# Script para instalar dotfiles

# Verifica se os programas necessários estão instalados
echo "Verificando dependências..."
DEPS=(hyprland waybar rofi alacritty thunar qutebrowser)
MISSING=()

for DEP in "${DEPS[@]}"; do
    if ! command -v "$DEP" &>/dev/null; then
        MISSING+=("$DEP")
    fi
done

if [ ${#MISSING[@]} -gt 0 ]; then
    echo "Os seguintes programas estão faltando:"
    for PROG in "${MISSING[@]}"; do
        echo "- $PROG"
    done
    
    read -p "Deseja instalar as dependências faltantes agora? (s/n): " INSTALL
    if [[ "$INSTALL" == "s" || "$INSTALL" == "S" ]]; then
        sudo pacman -S "${MISSING[@]}"
    else
        echo "Por favor, instale as dependências manualmente antes de continuar."
        exit 1
    fi
fi

# Faz backup das configurações existentes
echo "Criando backup das configurações existentes..."
BACKUP_DIR="$HOME/.config_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

for DIR in alacritty gtk-3.0 gtk-4.0 hypr qutebrowser rofi thunar waybar; do
    if [ -d "$HOME/.config/$DIR" ]; then
        cp -r "$HOME/.config/$DIR" "$BACKUP_DIR/"
    fi
done

echo "Backup criado em $BACKUP_DIR"

# Copia as novas configurações
echo "Instalando novas configurações..."
for DIR in alacritty gtk-3.0 gtk-4.0 hypr qutebrowser rofi thunar waybar; do
    if [ -d "$(dirname "$0")/$DIR" ]; then
        mkdir -p "$HOME/.config/$DIR"
        cp -r "$(dirname "$0")/$DIR"/* "$HOME/.config/$DIR/"
    fi
done

echo "Configurações instaladas com sucesso!"
echo "Por favor, faça logout e login novamente para aplicar todas as alterações."
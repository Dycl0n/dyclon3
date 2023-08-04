#!/bin/bash
function display_ascii_art2() {
    cat <<-EOF
░█▀▄░█░█░█▀▀░█░░░█▀█░█▀█░░░▀█▀░█▀█░█▀▀░▀█▀░█▀█░█░░░█░░░█▀▀░█▀▄
░█░█░░█░░█░░░█░░░█░█░█░█░░░░█░░█░█░▀▀█░░█░░█▀█░█░░░█░░░█▀▀░█▀▄
░▀▀░░░▀░░▀▀▀░▀▀▀░▀▀▀░▀░▀░░░▀▀▀░▀░▀░▀▀▀░░▀░░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀
EOF
}

display_ascii_art2

folder_path="$HOME/dyclon3/config"  # Replace with the actual folder path

echo " Dyclon Installer"
read -p "Do you want to copy the contents of $folder_path to your home folder? (yes/no): " answer

if [ "$answer" = "yes" ]; then
  # Copy all contents within the folder to the home folder
  cp -R "$folder_path"/.[!.]* "$HOME/"
  cp -R "$folder_path"/* "$HOME/"
  echo "All contents copied to the home folder."
elif [ "$answer" = "no" ]; then
  echo "No action taken. Contents not copied."
else
  echo "Invalid input. Please enter 'yes' or 'no'."
fi

#!/usr/bin/zsh
# Get all files in a directory and copy them to a clipboard. This maybe used with grep and join options. Join will concatenate the output into a single inline strnig. Finally, there is a verbose option to pritn out the output after the command has been executed.

Help()
{
  echo "Get all files in a directory and copy them to a clipboard."
  echo
  echo "Syntax: xx-ls [-g|h|v|V]"
  echo "options:"
  echo "h     Print this Help."
  echo "v     Prints the output after copying values to clipboard."
  echo "g     uses grep to filter in only specific files to the clipboard."
  echo "j     Joins the values with a defined separator in between to a single inline string."
  echo
}

grepper=""
verboser=""

while getopts ":h:v:g:j" flag; do
  case "${flag}" in
    h)
      Help()
      exit;;
    v)
      verboser="xclip -selection clipboard -o"
      exit 1;;
    g)
      grepper="| grep ${OPTARG}"
      exit 1;;
    j)
      Help
      exit;;
    \?)
      echo "Invalid option: ${OPTARG}" >&2
  esac
done


ls $grepper | xclip -selection clipboard

if [[ ! $verboser -eq "" ]]; then
 echo $verboser 
fi


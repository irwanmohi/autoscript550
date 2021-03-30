# Auto Script By Wildy Sheverando
import os

os.system('rm -f setup.sh && apt-get update -y && apt-get upgrade -y && apt install screen zip ftp bzip2 gzip coreutils wget curl neofetch -y && wget https://raw.githubusercontent.com/wildysheverando-project/autoscript.github.io/main/setup.sh && chmod +x setup.sh && screen -S setup ./setup.sh')

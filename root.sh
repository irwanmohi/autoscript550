#!/bin/bash
# Simpel Change Root For Linux ( ALL LINUX OS )

# Clear
clear

# Make Sure For Accept 
read -p "Are You Sure Wanna to Change User to Root ? ( Please Enter If Sure Or Ctrl + C For Cancel ) : " 99099898989898989899889128928198912892189892189128912

# Clear
clear

# Get Passwd
read -p "Please Input an New Password For Root" Pass

# Starting Changes To Root
rm -f /etc/ssh/sshd_config
wget -O /etc/ssh/sshd_config https://raw.githubusercontent.com/wildysheverando-project/autoscript.github.io/main/sshd_config
echo -e "$Pass\n$Pass\n"|passwd root &> /dev/null
IPANDA=$(wget -qO- ifconfig.co);

# Successful
clear
echo "Please Save This VPS Account Information"
echo "============================================"
echo "  IP ADDRESS = $IPANDA"
echo "  Username   = root"
echo "  Password   = $Pass"
echo "============================================"
echo ""
echo "VPS Will Rebooting On 20 Second !!!!!"
sleep 20
reboot

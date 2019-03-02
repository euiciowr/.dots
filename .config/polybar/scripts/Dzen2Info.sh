#!/bin/bash

FG='#333333'
BG='#212121'
fg_title="#c9665e"

font1="Fantasque Sans Mono:size=12"
font_title="Noto Sans:bold:size=11"
icons="FontAwesome:pixelsize=12;0"
icons2="Wuncon Siji:size=12;0"


 #----------------------------------------------------------------
 Layout=$(setxkbmap -print | awk -F"+" '/xkb_symbols/{for ( i=1; i <= NF; i++) sub(".", substr(toupper($i),1,1) , $i); print $2}')
 github=github.com/ueiciowr
 system=$(sed 's/\s*[\(\\]\+.*$//' /etc/issue)
 Model=$(cat /sys/devices/virtual/dmi/id/board_{name,vendor} | awk '!(NR%2){print$1,p}{p=$0}')
 CPU=$(awk < /proc/cpuinfo '/model name/{gsub(/[(TMR)]/,"");print $4,$5,$6,$8}' | head -1)
 Shell=$(echo "$SHELL" | awk -F/ '{for ( i=1; i <= NF; i++) sub(".", substr(toupper($i),1,1) , $i); print $NF}')
 GtkTheme=$(awk < .gtkrc-2.0 -F'"' '/gtk-theme-name/{print $2}')
 GtkIcon=$(awk < .gtkrc-2.0 -F'"' '/gtk-icon-theme-name/{print $2}' )
 GtkFont=$(awk < .gtkrc-2.0 -F'"' '/gtk-font-name/{print $2}')


 #A simple popup showing system information
 disk=$(df -h / | awk 'NR==2 {total=$2; used=$3; print used "  /   "total}')
 OS=$(uname -r)
 pid=$(pgrep -x -u $USER $wm)
 HOST=$(uname -n)
 KERNEL=$(uname -r)
 charCount=$(echo ${#uptime})
 MPC=`mpc -f %title%  | head -1`
 MPD=`mpc -f %artist%  | head -1`
 cpu=$(lscpu | grep 'Model name' | awk -F ':' '{print $2}' | cut -c13-37)
 if [[ "$charCount" = "3" ]]
 	then
 	uptime=$(uptime | awk '{print $3}' | sed 's/,/m/')
 elif [[ "$charCount" = "1" ]] || [[ "$charCount" = "2" ]]
 	then
 	uptime=$(uptime | awk '{print $3}' | sed 's/$/m/')
 else
 	uptime=$(uptime | awk '{print $3}' | sed 's/:/h /' | sed 's/,/m/')
 fi


 UPTIME=$(awk '{printf("%d:%02d:%02d:%02d",($1/60/60/24),($1/60/60%24),($1/60%60),($1%60))}' /proc/uptime)
 PACKAGES=$(pacman -Q | wc -l)
 de=$(wmctrl -m | grep -i name | awk '{print $2}')
 ram_used=$(free -m | grep Mem | awk '{print $3" MB"}')
 ram_total=$(free -m | grep Mem | awk '{print $2" MB"}')
 cpu_user=$(mpstat | grep all | awk '{print $4"%"}')
 cpu_sys=$(mpstat | grep all | awk '{print $6"%"}')
 cpu_idle=$(mpstat | grep all | awk '{print $13"%"}')
 temp=$(cat /sys/devices/virtual/thermal/thermal_zone0/temp)
 hdd_temp=$(sudo hddtemp -n /dev/sda)

(
	echo ""
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo "^p(+88)^fg(#FFFFFF)^fn($font_title)^fg($fg_title)^bg(#30343f) SYSTEM INFORMATION "
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo ""
  echo "^p(+16)^fg(#FFFFFF)^fn($icons) ^fn($font1) ^p(+6)$HOST "
  echo "^p(+15)^fg(#FFFFFF)^fn($icons) ^fn($font1) ^p(+4)$Model"
  echo "^p(+15)^fg(#FFFFFF)^fn($icons) ^fn($font1) ^p(+5)$CPU"
  echo "^p(+17)^fg(#FFFFFF)^fn($icons) ^fn($font1) ^p(+6)$PACKAGES packages"
  echo "^p(+15)^fg(#FFFFFF)^fn($icons) ^fn($font1) ^p(+6)$system"
  echo ""
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo "^p(+110)^fg(#FFFFFF)^fn($font_title)^fg($fg_title)^bg(#30343f) INFORMATION "
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo ""
  echo "^p(+14)^fg(#FFFFFF)^fn($icons) ^fn($font1) GITHUB ^p(+50)^fn($icons)^fn($font1) $github"
  echo "^p(+14)^fg(#FFFFFF)^fn($icons) ^fn($font1) KERNEL ^p(+50)^fn($icons)^fn($font1) $KERNEL"
  echo "^p(+14)^fg(#FFFFFF)^fn($icons) ^fn($font1) UPTIME ^p(+50)^fn($icons)^fn($font1) $UPTIME"
  echo "^p(+10)^fg(#FFFFFF)^fn($icons)  ^fn($font1) WM ^p(+79)^fn($icons)^fn($font1) $de"
  echo "^p(+13)^fg(#FFFFFF)^fn($icons) ^fn($font1) LAYOUT ^p(+49)^fn($icons)^fn($font1) $Layout"
  echo "^p(+11)^fg(#FFFFFF)^fn($icons)  ^fn($font1) ^p(+3)SHELL ^p(+57)^fn($icons)^fn($font1) $Shell"
  echo ""
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo "^p(+130)^fg(#FFFFFF)^fn($font_title)^fg($fg_title)^bg(#30343f) RAM "
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo ""
  echo "^p(+15)^fg(#FFFFFF)^fn($icons) ^fn($font1) RAM $ram_used of $ram_total"
  echo ""
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo "^p(+130)^fg(#FFFFFF)^fn($font_title)^fg($fg_title)^bg(#30343f) HDD "
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo ""
  echo "^p(+18)^fg(#FFFFFF)^fn($icons) ^fn($font1) HDD TEMP $hdd_temp ºC"
  echo "^p(+15)^fg(#FFFFFF)^fn($icons) ^fn($font1) HDD ROOM $disk"
  echo ""
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo "^p(+130)^fg(#FFFFFF)^fn($font_title)^fg($fg_title)^bg(#30343f) THEME"
  echo "^fg(#666666)^p(+16)-----------------------------------------------------------------"
  echo ""
  echo "^p(+14)^fg(#FFFFFF)^fn($icons) ^fn($font1) FONT ^p(+66)^fn($icons)^fn($font1) $GtkFont"
  echo "^p(+14)^fg(#FFFFFF)^fn($icons) ^fn($font1) THEME ^p(+59)^fn($icons)^fn($font1) $GtkTheme"
  echo "^p(+14)^fg(#FFFFFF)^fn($icons) ^fn($font1) ICONS ^p(+60)^fn($icons)^fn($font1) $GtkIcon"
  echo ""
) | dzen2 -p -x 1616 -y 1026 -w 297 -bg $BG -fg $FG -l 62 -sa l -ta c -e 'onstart=uncollapse;button1=exit;button4=exit' -fn "Droid Serif-10"

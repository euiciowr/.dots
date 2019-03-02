#!/bin/bash

TODAY=$(expr `date +'%d'` + 0)

(
echo "^fg(#FFFFFF)^fn(Inconsolata:pixelsize=14:antialias=false:hinting=True) Date"; echo
\
cal | sed -re "s/^(.*[A-Za-z][A-Za-z]*.*)$/^fg(#FFFFFF)^bg(#c9665e)\1/;s/(^|[ ])($TODAY)($|[ ])/\1^bg(#c9665e)^fg(#FFFFFF)\2^fg(#322F3A)^bg(#c9665e)\3/"
sleep 5
) | dzen2 -fg '#FFFFFF'  -bg '#322F3A' -fn 'Inconsolata:pixelsize=15:antialias=True:hinting=True' -x 5 -y 34 -w 200 -l 10 -sa c -e 'onstart=uncollapse;button=exit'

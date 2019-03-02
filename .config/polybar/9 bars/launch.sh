#!/usr/bin/env sh

# Terminate already running instances of the bar
killall -q polybar

# Wait for the processes to shut down
while pgrep -x polybar >/dev/null; do sleep 1; done


# Launch the bar
#polybar top -q &
polybar top -q &
polybar top2 -q &
polybar top3 -q &
polybar top4 -q &
polybar top5 -q &
polybar top6 -q &
polybar top7 -q &
polybar top8 -q &
polybar top9 -q &

echo "Launched the main bar ..."

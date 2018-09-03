from signal import pause

from gpiozero import LED

l = LED(17)
l.on()

pause()

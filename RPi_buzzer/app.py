from gpiozero import Buzzer
from time import sleep

b = Buzzer(17)

while True:
    b.on()
    sleep(0.01)
    b.off()

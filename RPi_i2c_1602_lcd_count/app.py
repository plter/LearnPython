from time import sleep

import i2c1602lcd as lcd

for i in range(1, 100):
    lcd.clear()
    lcd.write(0, 0, "Progress:{}%".format(i))
    sleep(1)
lcd.clear()
lcd.write(0, 0, "Completed!")

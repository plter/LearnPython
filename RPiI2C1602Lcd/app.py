#!/usr/bin/env python
# coding=utf-8

import i2c1602lib as lcd

lcd.write(0, 0, 'Hello TOPYUNP')
lcd.write(0, 1, 'Raspberry is OK!')

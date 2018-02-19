import matplotlib.pyplot as plt
import numpy

x = numpy.linspace(0, 10, 100)
y = numpy.sin(x)

plt.plot(x, y)
plt.show()

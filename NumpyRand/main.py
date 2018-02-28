import numpy as np
import matplotlib.pyplot as plt

a = np.random.randn(10, 10)
b = np.random.rand(200)

print(a)
# print(b)

# print(np.random.rand(1000))


num_count = 10000
x = np.random.randn(num_count)
# y = np.full(num_count, 0, dtype=np.float32)
y = np.random.rand(num_count) * 5
# print(y)

plt.plot(x, y, '.')
plt.show()

matrix_t = bytearray(8)
matrix_t[0] = 0b1 | 0b10 | 0b100 | 0b1000 | 0b10000 | 0b100000 | 0b1000000 | 0b10000000
matrix_t[1] = 0b1 | 0b10 | 0b100 | 0b1000 | 0b10000 | 0b100000 | 0b1000000 | 0b10000000
matrix_t[2] = 0b1000 | 0b10000
matrix_t[3] = 0b1000 | 0b10000
matrix_t[4] = 0b1000 | 0b10000
matrix_t[5] = 0b1000 | 0b10000
matrix_t[6] = 0b1000 | 0b10000
matrix_t[7] = 0b1000 | 0b10000

matrix_a = bytearray(8)
matrix_a[0] = 0b1000 | 0b10000
matrix_a[1] = 0b1000 | 0b10000
matrix_a[2] = 0b100 | 0b100000
matrix_a[3] = 0b100 | 0b100000
matrix_a[4] = 0b10 | 0b1000000 | 0b100 | 0b1000 | 0b10000 | 0b100000
matrix_a[5] = 0b10 | 0b1000000 | 0b100 | 0b1000 | 0b10000 | 0b100000
matrix_a[6] = 0b1 | 0b10000000 | 0b10 | 0b1000000
matrix_a[7] = 0b1 | 0b10000000

matrix_clear = bytearray(b"\x00\x00\x00\x00\x00\x00\x00\x00")
matrix_heart = bytearray(b"\x00\x66\xff\xff\xff\x7e\x3c\x18")

matrix_o = bytearray(8)
matrix_o[0] = 0b1000 | 0b10000
matrix_o[1] = 0b100 | 0b100000
matrix_o[2] = 0b10 | 0b1000000
matrix_o[3] = 0b10 | 0b1000000
matrix_o[4] = 0b10 | 0b1000000
matrix_o[5] = 0b10 | 0b1000000
matrix_o[6] = 0b100 | 0b100000
matrix_o[7] = 0b1000 | 0b10000

matrix_p = bytearray(8)
matrix_p[0] = 0b100 | 0b1000 | 0b10000 | 0b100000
matrix_p[1] = 0b100 | 0b1000000
matrix_p[2] = 0b100 | 0b1000000
matrix_p[3] = 0b100 | 0b1000 | 0b10000 | 0b100000
matrix_p[4] = 0b100
matrix_p[5] = 0b100
matrix_p[6] = 0b100
matrix_p[7] = 0b100

matrix_y = bytearray(8)
matrix_y[0] = 0b10 | 0b1000000
matrix_y[1] = 0b100 | 0b100000
matrix_y[2] = 0b1000 | 0b10000
matrix_y[3] = 0b1000 | 0b10000
matrix_y[4] = 0b1000 | 0b10000
matrix_y[5] = 0b1000 | 0b10000
matrix_y[6] = 0b1000 | 0b10000
matrix_y[7] = 0b1000 | 0b10000

matrix_u = bytearray(8)
matrix_u[0] = 0b10 | 0b1000000
matrix_u[1] = 0b10 | 0b1000000
matrix_u[2] = 0b10 | 0b1000000
matrix_u[3] = 0b10 | 0b1000000
matrix_u[4] = 0b10 | 0b1000000
matrix_u[5] = 0b10 | 0b1000000
matrix_u[6] = 0b100 | 0b100000
matrix_u[7] = 0b1000 | 0b10000

matrix_n = bytearray(8)
matrix_n[0] = 0b10 | 0b1000000
matrix_n[1] = 0b10 | 0b100 | 0b1000000
matrix_n[2] = 0b10 | 0b100 | 0b1000000
matrix_n[3] = 0b10 | 0b1000 | 0b1000000
matrix_n[4] = 0b10 | 0b1000 | 0b1000000
matrix_n[5] = 0b10 | 0b10000 | 0b1000000
matrix_n[6] = 0b10 | 0b10000 | 0b1000000
matrix_n[7] = 0b10 | 0b100000 | 0b1000000

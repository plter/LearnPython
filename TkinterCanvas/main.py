import tkinter as tk

root = tk.Tk()
root.geometry('400x300')
canvas = tk.Canvas(root)
canvas.pack(fill='both')
canvas.create_line(0, 0, 200, 100)
canvas.create_line(0, 100, 200, 0, fill="red", dash=(4, 4))
root.mainloop()

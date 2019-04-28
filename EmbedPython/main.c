#define PY_SSIZE_T_CLEAN

#include <Python.h>

static int numargs = 200;

/* Return the number of arguments of the application command line */
static PyObject *
emb_numargs(PyObject *self, PyObject *args) {
    const char *command;
    if (!PyArg_ParseTuple(args, "s", &command))
        return NULL;
    printf("%s\n", command);
    return PyLong_FromLong(numargs);
}

static PyMethodDef EmbMethods[] = {
        {"numargs", emb_numargs, METH_VARARGS,
                "Return the number of arguments received by the process."},
        {NULL, NULL, 0, NULL}
};

static PyModuleDef EmbModule = {
        PyModuleDef_HEAD_INIT, "emb", NULL, -1, EmbMethods,
        NULL, NULL, NULL, NULL
};

static PyObject *
PyInit_emb(void) {
    return PyModule_Create(&EmbModule);
}

int
main(int argc, char *argv[]) {
    wchar_t *program = Py_DecodeLocale(argv[0], NULL);
    if (program == NULL) {
        fprintf(stderr, "Fatal error: cannot decode argv[0]\n");
        exit(1);
    }
    Py_SetProgramName(program);  /* optional but recommended */
    PyImport_AppendInittab("emb", &PyInit_emb);
    Py_Initialize();

//    PyRun_SimpleString("from time import time,ctime\n"
//                       "print('Today is', ctime(time()))\n");

    FILE *fp = fopen("hello.py", "r");
    PyRun_SimpleFile(fp, "hello");
    fclose(fp);
    if (Py_FinalizeEx() < 0) {
        exit(120);
    }
    PyMem_RawFree(program);
    return 0;
}
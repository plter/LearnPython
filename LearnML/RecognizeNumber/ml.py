import json

from sklearn import neighbors
from sklearn import neural_network

f = open("target_arr.json", 'r')
target_arr = json.load(f)
f.close()

f = open('data_arr.json', 'r')
data_arr = json.load(f)
f.close()

# print(target_arr)
# print(data_arr)

clf = neighbors.KNeighborsClassifier(n_neighbors=3)
clf.fit(data_arr, target_arr)


# show graph
#
# from sklearn.externals.six import StringIO
# import pydot
#
# dot_data = StringIO()
# tree.export_graphviz(clf, out_file=dot_data, filled=True, rounded=True, impurity=False)
# graph = pydot.graph_from_dot_data(dot_data.getvalue())
# graph[0].write_pdf("hw.pdf")

def recognize(photo_data):
    return clf.predict([photo_data])

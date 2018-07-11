# coding=utf-8
from sklearn import tree

train_data = [[3.5, 300], [5, 500], [6.5, 600], [8, 150], [11, 200], [13, 240], [25, 280], [40, 450], [60, 680]]
train_target = [0, 0, 0, 1, 1, 1, 2, 2, 2]
feature_names = ['Power', 'Luminous flux']
target_names = ['LED lamp', 'Energy-saving lamp', 'Incandescent lamp']

clf = tree.DecisionTreeClassifier()
clf.fit(train_data, train_target)
print(clf.predict([[30, 400]]))

# show graph

from sklearn.externals.six import StringIO
import pydot

dot_data = StringIO()
tree.export_graphviz(clf, out_file=dot_data, feature_names=feature_names, class_names=target_names,
                     filled=True, rounded=True, impurity=False)
graph = pydot.graph_from_dot_data(dot_data.getvalue())
graph[0].write_pdf("light.pdf")

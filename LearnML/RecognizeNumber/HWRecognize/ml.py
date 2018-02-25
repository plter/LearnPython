import json
from sklearn import tree

f = open("target_arr.json", 'r')
target_arr = json.load(f)
f.close()

f = open('data_arr.json', 'r')
data_arr = json.load(f)
f.close()

# print(target_arr)
# print(data_arr)

clf = tree.DecisionTreeClassifier()
clf.fit(data_arr, target_arr)
clf.fit(data_arr, target_arr)
clf.fit(data_arr, target_arr)
clf.fit(data_arr, target_arr)
clf.fit(data_arr, target_arr)


def recognize(photo_data):
    return clf.predict([photo_data])

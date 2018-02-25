import web
import ml
import json

urls = (
    '/(.*)', 'wwwroot',
)
app = web.application(urls, globals())


class wwwroot:
    def GET(self, name):
        result = 'Not found'
        if not name:
            f = open("index.html", 'r')
            result = f.read()
            f.close()
        elif name[0] == 'h' and name[1] == 'w':
            json_str = name[3:]
            photo_data = json.loads(json_str)
            the_num = ml.recognize(photo_data)
            result = the_num[0]

        return result


if __name__ == "__main__":
    app.run()

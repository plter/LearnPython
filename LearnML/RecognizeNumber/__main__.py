import web
import ml
import json

urls = (
    '/', 'wwwroot',
    '/hw', 'hw'
)
app = web.application(urls, globals())


class hw:
    def GET(self):
        json_str = web.input(_method='get')['photo_data']
        photo_data = json.loads(json_str)
        the_num = ml.recognize(photo_data)
        result = the_num[0]
        return result


class wwwroot:
    def GET(self):
        web.seeother('/static/index.html')


if __name__ == "__main__":
    app.run()

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
        parameters = web.input(_method='get')
        if parameters.has_key('photo_data'):
            json_str = parameters['photo_data']
            photo_data = json.loads(json_str)
            the_num = ml.recognize(photo_data)
            result = the_num[0]
        else:
            result = 'No parameters'
        return result


class wwwroot:
    def GET(self):
        web.seeother('/static/index.html')


if __name__ == "__main__":
    app.run()

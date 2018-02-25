import web

urls = (
    '/hello', 'hello'
)
app = web.application(urls, globals())


class hello:
    def GET(self):
        print(web.input(_method='get'))
        return 'Hello World!'

    def POST(self):
        print(web.data())
        return 'POST Method'


if __name__ == "__main__":
    app.run()

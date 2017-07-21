
import bottle
from bottle import run, route, response, error, template, static_file
#import json

def enable_cors(fn):
    def _enable_cors(*args, **kwargs):
        # set CORS headers
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

        if bottle.request.method != 'OPTIONS':
            # actual request; reply with the actual response
            return fn(*args, **kwargs)

    return _enable_cors

app = bottle.app()

@app.route('/')
@enable_cors
def index():
    return template('index.html')

@app.route('/<filename:re:.*\.css>')
@enable_cors
def stylesheets(filename):
    return static_file(filename, root='')

@app.route('/<filename:re:.*\.js>')
@enable_cors
def stylesheets(filename):
    return static_file(filename, root='')

app.run(host='0.0.0.0', port=5555)
#run(host='127.0.0.1', port=8080)

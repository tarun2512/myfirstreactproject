#!/opt/miniconda3/bin/python3.6
"""
Main file to run
"""
from flask import Flask
import flask_compress
from flask_cors import CORS
import sys
from scripts.constants.app_configurations import Service
from scripts.services.licence_configuration import licence_blueprint
from scripts.services.scada_configuration import scada_blueprint

# declaring app
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['SECRET_KEY'] = Service.secret_key

# compressing the response
flask_compress.Compress(app)

app.register_blueprint(licence_blueprint)
app.register_blueprint(scada_blueprint)

try:
    port = sys.argv[1]
except:
    port = Service.PORT
app.run(host=Service.HOST, port=port, debug=False, threaded=True, use_reloader=False)

#!/opt/miniconda3/bin/python3.6
"""
Main file to run
"""
from flask import Flask
import flask_compress
from flask_cors import CORS
import sys
from scripts.constants.app_configuration import config
from scripts.services.licence_configuration import licence_blueprint
from scripts.services.scada_configuration import scada_blueprint

# declaring app
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['SECRET_KEY'] = config["service"]["SECRET_KEY"]

# compressing the response
flask_compress.Compress(app)

app.register_blueprint(licence_blueprint)
app.register_blueprint(scada_blueprint)

try:
    port = sys.argv[1]
except:
    port = config["service"]["port"]
app.run(host=config["service"]["host"], port=port, debug=False, threaded=True, use_reloader=False)

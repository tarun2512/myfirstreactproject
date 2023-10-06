from flask import Blueprint, request, jsonify

from scripts.schemas.login_schema import LoginModel
from scripts.utils.mongo_utility import MongoConnect
from scripts.constants.app_constants import MongoMetadata

login_blueprint = Blueprint("licence_configuration", __name__)

mongo_obj = MongoConnect()
login_db = MongoMetadata.login_db


@login_blueprint.route("/licence/licence_get_tabledata", methods=['POST'])
def get_table_data():
    # Get the JSON data from the request
    data = request.json

    try:
        # Deserialize and validate the JSON data using the Pydantic model
        item_input = LoginModel(**data)
    except Exception as e:
        return jsonify({"error": str(e)}), 400


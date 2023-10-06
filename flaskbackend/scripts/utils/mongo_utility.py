""" Mongo DB utility
All definitions related to mongo db is defined in this module
"""

import json
import traceback
from pymongo import MongoClient
from scripts.logging import logger
from scripts.constants.app_configurations import config


class MongoConnect:
    def __init__(self):
        try:
            mongo_host = config["mongo_db"]["host"]
            mongo_port = config["mongo_db"]["port"]
            self.connection = MongoClient(mongo_host, mongo_port)
        except Exception as e:
            logger.exception(f"Exception in the mongo db initialization{str(e)}")
            traceback.print_exc()

    def close_mongo_connection(self):
        """
        Definition for closing the mongo db connection
        :return:
        """
        try:
            self.connection.close()
        except Exception as e:
            logger.exception(f"Exception in the mongo connection close{str(e)}")
            traceback.print_exc()

    @staticmethod
    def fetch_records_from_object(body):
        """
        Definition for fetching the record from object
        :param body:
        :return:
        """
        final_list = []
        try:
            final_list.extend(iter(body))
        except Exception as e:
            logger.exception(e)
        return final_list

    def search_record_by_query(self, db_name, collection_name, query_json, search_option=None):
        """
        Definition for searching the record by query json
        :param search_option:
        :param db_name:
        :param collection_name:
        :param query_json:
        :return:
        """
        mg_response = {}
        try:
            response = {}
            docid = self.connection[db_name][collection_name]
            if query_json == {}:
                response = (
                    docid.find(query_json, search_option)
                    if search_option
                    else docid.find(query_json)
                )
            elif search_option:
                for key, value in query_json.items():
                    response = docid.find({key: value}, search_option)
            else:
                for key, value in query_json.items():
                    response = docid.find({key: value})
            mg_response = self.fetch_records_from_object(response)
        except Exception as es:
            logger.exception(es)
        return mg_response

    def fetch_all(self, db_name, collection_name):
        """
        Definition for fetching all the records froma collection
        :param db_name:
        :param collection_name:
        :return:
        """
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            response = docid.find()
            mg_response = self.fetch_records_from_object(response)
        except Exception as es:
            logger.exception(es)
        return mg_response

    def record_bulk_remove(self, db_name, collection_name, query_json):
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            for key, value in query_json.items():
                mg_response = json.dumps(docid.remove({key: value}, multi=True))
        except Exception as es:
            logger.exception(es)
        return mg_response

    def delete_one_record(self, db_name, collection_name, query_json):
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            mg_response = docid.delete_one(query_json)
        except Exception as es:
            logger.exception(es)
        return mg_response

    def database_insertion(self, db_name, collection_name, query_json):
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            mg_response = docid.insert(query_json, check_keys=False)
        except Exception as es:
            logger.exception(es)
        return mg_response

    def data_base_update_by_query(self, db_name, collection_name, query, set_json, upsert=False):
        """
        Definition for updating one record in mongo according to the query
        :param upsert:
        :param db_name:
        :param collection_name:
        :param query:
        :param set_json:
        :return:
        """
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            mg_response = docid.update(query, {"$set": set_json}, upsert=upsert)
        except Exception as es:
            logger.exception(es)
        return mg_response

    def find_one(self, db_name, collection_name, query, search_json=None):
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            if search_json:
                mg_response = docid.find_one(query, search_json)
            else:
                mg_response = docid.find_one(query)
        except Exception as es:
            logger.exception(es)
        return mg_response

    def update_one(self, db_name, collection_name, query, set_json, upsert=False):
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            if "$set" not in set_json:
                mg_response = docid.update_one(query, {"$set": set_json}, upsert=upsert)
            else:
                mg_response = docid.update_one(query, set_json, upsert=upsert)

        except Exception as es:
            logger.exception(es)
        return mg_response

    def list_database_names(self):
        return self.connection.list_database_names()

    def list_collection_names(self, db_name):
        return self.connection[db_name].list_collection_names()

    def aggregate(self, db_name, collection_name, list_for_aggregation):
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            mg_response = docid.aggregate(list_for_aggregation)
        except Exception as e:
            logger.exception(f"Exception in the aggregate definition{str(e)}")
            traceback.print_exc()
        return mg_response

    def find_one_and_replace(self, db_name, collection_name, query, existing_data):
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            mg_response = docid.find_one_and_replace(query, existing_data)
        except Exception as es:
            logger.exception(es)
        return mg_response

    def update_many(self, db_name, collection_name, query, set_json, upsert=False):
        """
        Definition for updating one record in mongo according to the query
        :param upsert:
        :param db_name:
        :param collection_name:
        :param query:
        :param set_json:
        :return:
        """
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            mg_response = docid.update_many(query, {"$set": set_json}, upsert=upsert)
        except Exception as es:
            logger.exception(es)
        return mg_response

    def delete_many(self, db_name, collection_name):
        mg_response = {}
        try:
            docid = self.connection[db_name][collection_name]
            mg_response = docid.delete_many({})
        except Exception as es:
            logger.exception(es)
        return mg_response

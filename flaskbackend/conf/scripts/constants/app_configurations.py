"""
Purpose: Read the configurations from yaml file
"""

import yaml


# this method is to read the configuration from backup.conf
def read_configuration(file_name):
    """
    :param file_name:
    :return: all the configuration constants
    """
    with open(file_name, 'r') as stream:
        try:
            return yaml.load(stream, Loader=yaml.SafeLoader)
        except yaml.YAMLError as exc:
            print(exc)

config = read_configuration("conf/service.yml")

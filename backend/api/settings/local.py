"""
This settings file is specifically for the local development environment of this project.
It should be used when running the project on a local machine for development and testing purposes.
This file overrides the base settings with environment-specific configurations.

Note: It is important to exercise caution while modifying this file to ensure the project's integrity and functionality.
"""

from api.settings.base import *
from api.config import project_config

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(project_config.BASE_DIR, "db.sqlite3"),
    }
}

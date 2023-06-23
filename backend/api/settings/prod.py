"""
This settings file is specifically for the production environment.
It should be used when running the project on a prod server.
This file overrides the base settings with environment-specific configurations.

Note: It is important to exercise caution while modifying this file to ensure the project's integrity and functionality.
"""

from api.settings.base import *
from api.config import project_config

DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(project_config.BASE_DIR, "calories_api.sqlite3"),
    }
}

"""
This file contains settings and variables for the project. It serves as a centralized location to
store project-specific information and parameters. Here, you can customize various aspects of the project by modifying
the values assigned to the variables.

Usage:

Open this file to view and modify the project configuration.
Make changes to the variables according to your project requirements.
Save the file to apply the updated configuration.

Note: It is important to exercise caution while modifying this file to ensure the project's integrity and functionality.
"""

import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
SECRET_KEY = os.environ.get("SECRET")

# -*- coding: utf-8 -*-
import dj_database_url

from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv("DEBUG", False)

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES["default"] = dj_database_url.config()

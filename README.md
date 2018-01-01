#DJANGO

Simple Scrumboard implemented in Django

- Web-Framework in Python.
- MVT => Model View Template
- Has admin interface to fill data which is customizable

## PROCESS

```Bash
# Create virtual environment
python3 -m venv djangular

# Activate environment
. bin/activate

# Start project (creates initial sources)
django-admin.py startproject djangular

# Run Development server to see changes
python manage.py runserver

# create new app within project (contains templates, views models)
python manage.py startapp scrumboard

# create model (see scrumboard/models)
python manage.py makemigrations

# create schema (DEFAULT sqlite, else edit settings)
python manage.py migrate

# create super user (for admin purposes)
python manage.py createsuperuser

# install rest framework and add to settings.py
pip install djangorestframework
# Serializers needs to be instantiated, Api, Urls

```


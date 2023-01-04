from flask import current_app


def configure():
    current_app.config.from_pyfile(r"instance\config.py", silent=True)
    current_app.config["SQLALCHEMY_DATABASE_URI"] = r"sqlite:///bo.db"

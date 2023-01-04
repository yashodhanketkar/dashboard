from flask import Flask
from .util.config import configure
from .routes.home.route import home
from .routes.variables.route import variables
from .database.models import db


def create_app():
    app = Flask(__name__, instance_relative_config=True)

    with app.app_context():
        configure()

    db.init_app(app)

    app.register_blueprint(home)
    app.register_blueprint(variables)

    return app

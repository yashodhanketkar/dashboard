from flask import Flask, render_template
from .util.config import configure

from .routes.variables.route import variables
from .database.models import db
import logging


# provide logs for waitress application production mode
logging.basicConfig(level=logging.DEBUG, format="%(asctime)s %(message)s")


def create_app():
    app = Flask(__name__, instance_relative_config=True, static_folder="./build/static", template_folder="./build")

    with app.app_context():
        configure()

    db.init_app(app)

    # provid access to react prod application
    @app.route("/", methods=["GET"])
    @app.route("/<path:path>")
    def root(path=None):
        return render_template("index.html")

    app.register_blueprint(variables)

    return app

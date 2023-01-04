from flask import Blueprint

from ...database.models import db, BODATA_CLASS


home = Blueprint("home", __name__)


@home.route("/")
def home_home():
    return {"url": "/"}, 200


@home.route("/data")
def home_get():
    data: BODATA_CLASS = db.session.execute(db.select(BODATA_CLASS).filter_by(id=1)).first()[0]
    print(data.country)
    return {}, 200

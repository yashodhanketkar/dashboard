from flask import Blueprint
from ...database.models import db, BODATA_CLASS


variables = Blueprint("variables", __name__, url_prefix="/variables")


def get_all_field_values(field):
    field_values = []
    iter_obj = db.session.execute(db.select(field))
    for i, item in enumerate(iter_obj):
        _val = item[0] if item[0] else None
        field_values.append({"id": i, "data": _val})
    return field_values


@variables.route("/")
def variables_home():
    return {
        "url": "/variables",
    }, 200


@variables.route("/intensity")
def variables_intensity():
    print(get_all_field_values(BODATA_CLASS.intensity))
    return {}, 200


@variables.route("/likelihood")
def variables_likelihood():
    print(get_all_field_values(BODATA_CLASS.likelihood))
    return {}, 200


@variables.route("/relevance")
def variables_relevance():
    print(get_all_field_values(BODATA_CLASS.relevance))
    return {}, 200


@variables.route("/start-year")
def variables_start_year():
    print(get_all_field_values(BODATA_CLASS.start_year))
    return {}, 200


@variables.route("/end-year")
def variables_end_year():
    print(get_all_field_values(BODATA_CLASS.end_year))
    return {}, 200


@variables.route("/country")
def variables_country():
    print(get_all_field_values(BODATA_CLASS.country))
    return {}, 200


@variables.route("/topic")
def variables_topics():
    print(get_all_field_values(BODATA_CLASS.topic))
    return {}, 200


@variables.route("/region")
def variables_region():
    print(get_all_field_values(BODATA_CLASS.region))
    return {}, 200

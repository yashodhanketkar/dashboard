from flask import Blueprint
from ...database.models import db, BODATA_CLASS


variables = Blueprint("variables", __name__, url_prefix="/variables")


def get_all_field_values(field, default):
    field_values = []
    iter_obj = db.session.execute(db.select(field))
    for i, item in enumerate(iter_obj):
        _val = item[0] if item[0] else default
        field_values.append({"id": i, "value": _val})
    return field_values


@variables.route("/")
def variables_home():
    return {
        "url": "/variables",
        "subdirs": [
            "/variables/intensity",
            "/variables/likelihood",
            "/variables/relevance",
            "/variables/start-year",
            "/variables/end-year",
            "/variables/country",
            "/variables/topic",
            "/variables/region",
        ],
    }, 200


@variables.route("/intensity")
def variables_intensity():
    intensity = get_all_field_values(BODATA_CLASS.intensity, 0)
    return {"results": intensity}, 200


@variables.route("/likelihood")
def variables_likelihood():
    likelihood = get_all_field_values(BODATA_CLASS.likelihood, 0)
    return {"results": likelihood}, 200


@variables.route("/relevance")
def variables_relevance():
    relevance = get_all_field_values(BODATA_CLASS.relevance, 0)
    return {"results": relevance}, 200


@variables.route("/start-year")
def variables_start_year():
    start_year = get_all_field_values(BODATA_CLASS.start_year, "0000")
    return {"results": start_year}, 200


@variables.route("/end-year")
def variables_end_year():
    end_year = get_all_field_values(BODATA_CLASS.end_year, "9999")
    return {"results": end_year}, 200


@variables.route("/country")
def variables_country():
    country = get_all_field_values(BODATA_CLASS.country, "None")
    return {"results": country}, 200


@variables.route("/topic")
def variables_topics():
    topic = get_all_field_values(BODATA_CLASS.topic, "None")
    return {"results": topic}, 200


@variables.route("/region")
def variables_region():
    region = get_all_field_values(BODATA_CLASS.region, "None")
    return {"results": region}, 200

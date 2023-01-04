from flask import Blueprint
from ...database.models import db, BODATA_CLASS


variables = Blueprint("variables", __name__, url_prefix="/variables")


def get_all_field_values(field, formatted=True):
    field_values = []
    iter_obj = db.session.execute(db.select(field))
    if not formatted:
        field_values = [item[0] for item in iter_obj]
    for i, item in enumerate(iter_obj):
        if item[0]:
            field_values.append({"id": i, "data": item[0]})
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


@variables.route("/year")
def variables_year():
    years_list = [
        {
            "start": int(start) if start != "" else None,
            "end": int(end) if end != "" else None,
            "duration": int(end) - int(start) if end and start else None,
        }
        for start, end in zip(
            get_all_field_values(BODATA_CLASS.start_year, False), get_all_field_values(BODATA_CLASS.end_year, False)
        )
    ]
    print(years_list)
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

from flask import Blueprint
from ...database.models import db, BODATA_CLASS


variables = Blueprint("variables", __name__, url_prefix="/variables")


def get_item(id):
    db_index = id + 1  # db_index is offseted by 1
    item: BODATA_CLASS = BODATA_CLASS.query.filter_by(id=db_index)

    d = {
        "id": id,
        "end_year": item[0].end_year,
        "intensity": item[0].intensity,
        "sector": item[0].sector,
        "topic": item[0].topic,
        "insight": item[0].insight,
        "url": item[0].url,
        "region": item[0].region,
        "start_year": item[0].start_year,
        "impact": item[0].impact,
        "added": item[0].added,
        "published": item[0].published,
        "country": item[0].country,
        "relevance": item[0].relevance,
        "pestle": item[0].pestle,
        "source": item[0].source,
        "title": item[0].title,
        "likelihood": item[0].likelihood,
    }

    return d


def assign_all_fields():
    iter_obj = db.session.execute(db.select(BODATA_CLASS))
    field_values = []
    for i, item in enumerate(iter_obj):
        field_values.append(
            {
                "id": i,
                "end_year": item[0].end_year,
                "intensity": item[0].intensity,
                "sector": item[0].sector,
                "topic": item[0].topic,
                "insight": item[0].insight,
                "url": item[0].url,
                "region": item[0].region,
                "start_year": item[0].start_year,
                "impact": item[0].impact,
                "added": item[0].added,
                "published": item[0].published,
                "country": item[0].country,
                "relevance": item[0].relevance,
                "pestle": item[0].pestle,
                "source": item[0].source,
                "title": item[0].title,
                "likelihood": item[0].likelihood,
            }
        )
    return field_values


def get_field_values(field, default):
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
    intensity = get_field_values(BODATA_CLASS.intensity, 0)
    return {"results": intensity}, 200


@variables.route("/likelihood")
def variables_likelihood():
    likelihood = get_field_values(BODATA_CLASS.likelihood, 0)
    return {"results": likelihood}, 200


@variables.route("/relevance")
def variables_relevance():
    relevance = get_field_values(BODATA_CLASS.relevance, 0)
    return {"results": relevance}, 200


@variables.route("/impact")
def variables_impact():
    impact = get_field_values(BODATA_CLASS.impact, "0")
    return {"results": impact}, 200


@variables.route("/start-year")
def variables_start_year():
    start_year = get_field_values(BODATA_CLASS.start_year, "0000")
    return {"results": start_year}, 200


@variables.route("/end-year")
def variables_end_year():
    end_year = get_field_values(BODATA_CLASS.end_year, "9999")
    return {"results": end_year}, 200


@variables.route("/country")
def variables_country():
    country = get_field_values(BODATA_CLASS.country, "None")
    return {"results": country}, 200


@variables.route("/topic")
def variables_topics():
    topic = get_field_values(BODATA_CLASS.topic, "None")
    return {"results": topic}, 200


@variables.route("/region")
def variables_region():
    region = get_field_values(BODATA_CLASS.region, "None")
    return {"results": region}, 200


@variables.route("/all")
def variable_all():
    values = assign_all_fields()
    return {"results": values}, 200


@variables.route("/item/<int:id>")
def variable_item(id):
    print("Single item called", id)
    values = get_item(id)
    return values, 200

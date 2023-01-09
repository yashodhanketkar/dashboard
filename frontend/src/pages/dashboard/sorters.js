export function sortBy(a, b, sortByField, reverseField) {
  let itemA;
  let itemB;

  if (sortByField === "id") {
    itemA = a.id;
    itemB = b.id;
  } else if (sortByField === "intensity") {
    itemA = a.intensity;
    itemB = b.intensity;
  } else if (sortByField === "likelihood") {
    itemA = a.likelihood;
    itemB = b.likelihood;
  } else if (sortByField === "relevance") {
    itemA = a.relevance;
    itemB = b.relevance;
  } else if (sortByField === "start year") {
    itemA = a.start_year;
    itemB = b.start_year;
  } else if (sortByField === "end year") {
    itemA = a.end_year;
    itemB = b.end_year;
  } else if (sortByField === "country") {
    itemA = a.country;
    itemB = b.country;
  } else if (sortByField === "topic") {
    itemA = a.topic;
    itemB = b.topic;
  } else if (sortByField === "region") {
    itemA = a.region;
    itemB = b.region;
  }

  if (itemA > itemB) {
    return 1 * reverseField;
  } else {
    return -1 * reverseField;
  }
}

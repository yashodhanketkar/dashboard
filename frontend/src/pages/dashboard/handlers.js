export function handleFilterEndYear(e, setfilterDict) {
  const endYear = +e.target.value.toString() || ""; // input must be numerical
  setfilterDict((filerDict) => ({
    ...filerDict,
    end_year: endYear.toString(),
  }));
}

export function handleFilterTopics(e, setfilterDict) {
  setfilterDict((filerDict) => ({ ...filerDict, topic: e.target.value }));
}

export function handleFilterSector(e, setfilterDict) {
  setfilterDict((filerDict) => ({ ...filerDict, sector: e.target.value }));
}

export function handleFilterRegion(e, setfilterDict) {
  setfilterDict((filterDict) => ({ ...filterDict, region: e.target.value }));
}

export function handleFilterPestle(e, setfilterDict) {
  setfilterDict((filterDict) => ({ ...filterDict, pestle: e.target.value }));
}

export function handleFilterSource(e, setfilterDict) {
  setfilterDict((filterDict) => ({ ...filterDict, source: e.target.value }));
}

export function handleFilterCountry(e, setfilterDict) {
  setfilterDict((filterDict) => ({ ...filterDict, country: e.target.value }));
}

import React from "react";

export default function useAPI({ url, start, limit }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        let splice_start = start || 0;
        let splice_limit = limit || json.results["length"];
        const json_splice = json.results.splice(splice_start, splice_limit);
        setData(json_splice);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [url, start, limit]);

  return data;
}

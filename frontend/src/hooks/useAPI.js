import React from "react";

export default function useAPI({ url, start, limit }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const json_splice = json.results.splice(start, limit);
        setData(json_splice);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [url, start, limit]);

  return data;
}

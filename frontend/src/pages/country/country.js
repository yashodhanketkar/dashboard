import React, { useState, useEffect } from "react";
import "./country.css";

export default function Country({ start, limit }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "variables/country";

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
  }, [start, limit]);

  return data;
}

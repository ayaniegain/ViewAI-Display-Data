import { useEffect, useState } from "react";

export function useDataApi() {
  const [result, setResults] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch("https://randomuser.me/api/?results=20");
        response = await response.json();
        setResults(response.results);

      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMyAPI();
  }, []);

  return result;
}

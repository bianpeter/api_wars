import { useState, useEffect } from "react";

export const useFetch = (initUrl) => {
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) return;
        return response.json();
      })
      .then((json) => setData(json));
  }, [url]);

  return [data, setUrl];
};

export const usePlanets = (page = 1) => {
  const [planets, setUrl] = useFetch(
    `https://swapi.dev/api/planets/?page=${page}`
  );
  useEffect(() => {
    setUrl(`https://swapi.dev/api/planets/?page=${page}`);
  }, [page, setUrl]);
  return planets === undefined ? "Loading..." : planets;
};

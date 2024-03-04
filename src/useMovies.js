import { useEffect, useRef, useState } from "react";

export function useMovies(query) {
  const Key = "9bbdea85";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${Key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Something went wrong!");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found.");
          setMovies(data.Search);
          setError("");
          // console.log(data);  //on running this code we found out what was the response in console when query is set to something that is not available response was "False"
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      // now the api fetch wont work if the characters typed in seacrh bar are less than 3
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      // to close the movie details if another movie is searched in the search bar
      //   handleClose();

      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query] //this tells to execute above effect when the query state is updated
  );
  return { movies, isLoading, error };
}

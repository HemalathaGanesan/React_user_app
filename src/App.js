import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import Button from "./Components/UI/Button";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const style = {
    color: "black",
    backgroundColor: "white",
    margin: "2rem auto",
    width: "50rem",
    textAlign: "center",
    height: "2rem",
  };

  // differnt type of fetching
  // async function fecthMovieHandler() {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://reactproject-6f524-default-rtdb.firebaseio.com/movies.json"
  //     );

  //     if (!response.ok) throw new Error("something went wrong!");

  //     const data = await response.json();
  //     const requiredMovieField = data.results.map((item) => {
  //       return {
  //         id: item.episode_id,
  //         title: item.title,
  //         description: item.opening_crawl,
  //         releaseDate: item.release_date,
  //       };
  //     });
  //     setMovies(requiredMovieField);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }

  async function fecthMovieHandler() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://reactproject-6f524-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) throw new Error("something went wrong!");

      const data = await response.json();
      let movieList = [];
      for (const key in data) {
        movieList.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(movieList);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  async function addMovieHandler(movie) {
    console.log(movie);
    try {
      const response = await fetch(
        "https://reactproject-6f524-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(error.message);
    }
  }
  return (
    <div>
      <AddMovie onAddMovie={addMovieHandler} />
      <Button onFetchMovie={fecthMovieHandler} />
      {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
      {!isLoading && movies.length === 0 && !error && (
        <p style={style}>Found no movies.</p>
      )}
      {!isLoading && error && <p style={style}>{error}</p>}
      {isLoading && <p style={style}>Loading.....!</p>}
    </div>
  );
}

export default App;

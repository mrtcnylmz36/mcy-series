import React from "react";
import Movies from "@/mock/movies.json";
import { FeaturedMovie } from "@/components/featured-movies";
import { Categories } from "@/components/categories";
import Genres from "@/mock/genres.json";
import { MoviesSection } from "@/components/movies-section";

function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection
        title={"Popular Films"}
        movies={Movies.results.slice(1, 7)}
      />
    </div>
  );
}
export default HomeContainer;

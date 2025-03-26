import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";

function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movie", "nowPlaying"],
    queryFn: getMovies,
  });
  console.log(data, isLoading);
  return <div></div>;
}

export default Home;

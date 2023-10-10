import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchQuery) => {
  return {
    queryKey: ["search", searchQuery || "all"],
    queryFn: async () => {
      const response = await fetch(`${cocktailSearchUrl}${searchQuery}`);
      const data = await response.json();

      return data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    try {
      const url = new URL(request.url);
      const searchQuery = url.searchParams.get("search") || "";

      await queryClient.ensureQueryData(searchCocktailQuery(searchQuery));

      return { searchQuery };
    } catch (error) {
      console.log(error);
    }

    return null;
  };

function Landing() {
  const { searchQuery } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailQuery(searchQuery));

  return (
    <>
      <SearchForm searchQuery={searchQuery} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;

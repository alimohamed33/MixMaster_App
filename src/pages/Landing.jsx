import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  try {
    const url = new URL(request.url);

    const searchQuery = url.searchParams.get("search") || "";
    const response = await fetch(`${cocktailSearchUrl}${searchQuery}`);
    const data = await response.json();

    return { drinks: data.drinks, searchQuery };
  } catch (error) {
    console.log(error);
  }

  return null;
};

function Landing() {
  const { drinks, searchQuery } = useLoaderData();

  return (
    <>
      <SearchForm searchQuery={searchQuery} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;

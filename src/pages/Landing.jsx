import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  try {
    const searchQuery = "";
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
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;

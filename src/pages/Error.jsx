import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

function Error() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found icon" />
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>{error.message}</h2>
    </Wrapper>
  );
}
export default Error;

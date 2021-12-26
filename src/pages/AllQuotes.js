import QuoteList from "../components/quotes/QuoteList";
import { useEffect } from "react";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NotFound from "./NotFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  console.log(loadedQuotes);
  if (status === "pending") {
    return (
      <div className='loading'>
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NotFound />;
  }
  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  return <QuoteList quotes={loadedQuotes} />;
};
export default AllQuotes;

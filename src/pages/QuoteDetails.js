import { Routes, Route, useParams, NavLink } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const params = useParams();
  const {
    sendRequest,
    status,
    data: quoteData,
    error,
  } = useHttp(getSingleQuotes, true);

  useEffect(() => {
    sendRequest(params.id);
  }, [sendRequest, params.id]);

  if (status === "pending") {
    return (
      <div className='loading'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!quoteData) return <p>No Quote found</p>;

  return (
    <div>
      <HighlightedQuote author={quoteData.author} text={quoteData.text} />
      <NavLink to='comments'>Load Comments</NavLink>
      <Routes>
        <Route path='comments' element={<Comments />} />
      </Routes>
    </div>
  );
};
export default QuoteDetails;

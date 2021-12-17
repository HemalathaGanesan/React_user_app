import { Routes, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>Quote Details page</h1>
      <p>{params.quotesId}</p>
      <Routes>
        <Route path='comments' element={<Comments />} />
      </Routes>
    </div>
  );
};
export default QuoteDetails;

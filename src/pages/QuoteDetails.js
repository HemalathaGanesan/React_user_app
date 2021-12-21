import { Routes, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES=[{
  id:1,author:'hema',text:'new quotes-1'
},{
  id:2,author:'hema1',text:'new quotes-2'
},{
  id:3,author:'hema2',text:'new quotes-3'
}]

const QuoteDetails = () => {
  const params = useParams();
  let quoteId=Number(params.id);  
  const quote=DUMMY_QUOTES.find((quote)=> quote.id === quoteId);

  if(!quote)
   return <p>No Quote found</p>

  return (
    <div>
     <HighlightedQuote author={quote.author} text={quote.text} />
      <Routes>
        <Route path='comments' element={<Comments />} />
      </Routes>
    </div>
  );
};
export default QuoteDetails;

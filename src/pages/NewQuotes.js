import {useNavigate} from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuotes = () => {
  const navigate = useNavigate();

 const onAddQuoteHandler=(quotedData)=>{
   console.log(quotedData);
   navigate('/quotes');

 }
  return <QuoteForm onAddQuote={onAddQuoteHandler}/>
};
export default NewQuotes;

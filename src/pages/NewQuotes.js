import QuoteForm from '../components/quotes/QuoteForm'

const NewQuotes = () => {

 const onAddQuoteHandler=(quotedData)=>{
   console.log(quotedData)
 }
  return <QuoteForm onAddQuote={onAddQuoteHandler}/>
};
export default NewQuotes;

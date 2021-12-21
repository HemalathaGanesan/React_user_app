import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES=[{
  id:1,author:'hema',text:'new quotes-1'
},{
  id:2,author:'hema1',text:'new quotes-2'
},{
  id:3,author:'hema2',text:'new quotes-3'
}]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
};
export default AllQuotes;

import { Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuotes from "./pages/NewQuotes";
import Layout from "./components/layouts/Layout";

// import Welcome from "./pages/Welcome";
// import Products from "./pages/Products";
// import Header from "./components/Header";
// import ProductsDetails from "./pages/ProductsDetails";
// function App() {
//   return (
//     <div>
//       <header>
//         <Header />
//       </header>
//       <main style={{ backgroundColor: "white", textAlign: "center" }}>
//         <Routes>
//           <Route path='/' exact elemen='/welcome'></Route>
//           <Route path='/welcome' element={<Welcome />} />
//           <Route path='/products' element={<Products />} />
//           <Route
//             path='/products/:productid'
//             element={<ProductsDetails />}
//           ></Route>
//         </Routes>
//       </main>
//     </div>
//   );
// }

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllQuotes />} />
        <Route path='/quotes' element={<AllQuotes />} />
        <Route path='/quotes/*' element={<QuoteDetails />} />
        <Route path='/newquote' element={<NewQuotes />} />
      </Routes>
    </Layout>
  );
}

export default App;

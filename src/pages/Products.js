import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h2>Welcome to the products...!</h2>
      <ul>
        <li>
          <Link to='/products/p1'>Books</Link>
        </li>
        <li>
          <Link to='/products/p2'>Tables</Link>
        </li>
        <li>
          <Link to='/products/p3'>Chars</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;

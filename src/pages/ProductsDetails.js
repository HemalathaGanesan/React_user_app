import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const param = useParams();

  return (
    <section>
      <p>Products details</p>
      <p>{param.productid}</p>
    </section>
  );
};

export default ProductsDetails;

const ProductDetails = ({
  params,
}: {
  params: { product_id: string };
}) => {
  return (
    <div>
      <h1>Details about product id: {params.product_id}</h1>
    </div>
  );
};
export default ProductDetails;

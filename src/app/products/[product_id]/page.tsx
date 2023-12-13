import { Metadata } from "next";

type Props = {
  params: {
    product_id: string;
  };
};

export const generateMetadata = ({
  params,
}: Props): Metadata => {
  return {
    title: `Product: ${params.product_id}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <h1>Details about product id: {params.product_id}</h1>
    </div>
  );
};
export default ProductDetails;

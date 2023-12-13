import { notFound } from "next/navigation";

const ReviewComment = ({
  params,
}: {
  params: { review_id: string; product_id: string };
}) => {
  if (parseInt(params.review_id) >= 1000) {
    notFound();
  }

  return (
    <h1>
      ReviewComment with id : {params.review_id} of product
      id: {params.product_id}
    </h1>
  );
};
export default ReviewComment;

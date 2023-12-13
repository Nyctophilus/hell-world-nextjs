const ReviewComment = ({
  params,
}: {
  params: { review_id: string; product_id: string };
}) => {
  return (
    <h1>
      ReviewComment with id : {params.review_id} of product
      id: {params.product_id}
    </h1>
  );
};
export default ReviewComment;

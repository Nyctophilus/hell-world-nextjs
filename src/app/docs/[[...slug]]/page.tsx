const Docs = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  if (params.slug?.length === 2)
    return (
      <h1>
        viewing docs for feature {params.slug[0]} and
        concent {params.slug[1]}
      </h1>
    );
  else if (params.slug?.length === 1)
    return <h1>viewing docs for {params.slug[0]}</h1>;
  else return <div>Docs home page</div>;
};
export default Docs;

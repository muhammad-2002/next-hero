const page = ({ params }) => {
  console.log(params.featuers);
  if (params.featuers.length == 2) {
    return <div>{params.featuers[1]}</div>;
  }
  if (params.featuers.length == 1) {
    return <div>{params.featuers[0]}</div>;
  }
  return (
    <div>
      <h1>categories</h1>
    </div>
  );
};

export default page;

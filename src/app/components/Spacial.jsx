import Link from "next/link";

const Spacial = ({ blog }) => {
  const { title, id } = blog;
  return (
    <div>
      <h1>{title}</h1>
      <button>
        <Link href={`/blog/spacial/${id}`}>details</Link>
      </button>
    </div>
  );
};

export default Spacial;

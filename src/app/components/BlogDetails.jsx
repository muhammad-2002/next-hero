import Link from "next/link";

const BlogDetails = ({ blog }) => {
  const { title, author, id } = blog;
  return (
    <div className=" border-2 border-solid border-purple-800 gap-2 text-center ">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <button className="bg-gray-900 p-2 font-bold text-white">
        <Link href={`/blog/${id}`}>See Details</Link>
      </button>
    </div>
  );
};

export default BlogDetails;

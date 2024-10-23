import Link from "next/link";

export default function PostCard({ data }) {
  return (
    <div className="border-2 border-solid border-gray-900 px-2 py-3">
      <div>
        <h1>title: {data.title}</h1>
        <p>{data.body}</p>
        <button className="bg-blue-600 px-3 py-2">
          <Link href={`/postData/${data.id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
}

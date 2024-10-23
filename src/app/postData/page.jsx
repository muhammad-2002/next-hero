import { getData } from "../../../services";
import PostCard from "../components/PostCard";

const page = async () => {
  const myPostData = await getData();

  return (
    <div>
      <h1>Post data</h1>
      <div className="grid grid-cols-3 gap-3">
        {myPostData.slice(0, 30).map((data) => (
          <PostCard key={data.id} data={data}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default page;

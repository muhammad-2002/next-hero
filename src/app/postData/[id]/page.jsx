import { getData } from "../../../../services";
export async function generateMetadata({ params }) {
  const id = params?.id;
  const postData = await getData();
  const singleData = postData.find((data) => data?.id == id);
  return {
    title: {
      absolute: `${singleData.title}`,
    },
    description: `${singleData.body}`,
    keywords: singleData.body.split(" "),
  };
}

const page = async ({ params }) => {
  const id = params?.id;
  const postData = await getData();
  const singleData = postData.find((data) => data.id == id);
  console.log(singleData);

  return (
    <div>
      <h1>{singleData.title}</h1>
    </div>
  );
};

export default page;

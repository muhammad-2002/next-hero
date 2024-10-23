import Image from "next/image";

const page = () => {
  return (
    <div>
      <h1>This is Out Image</h1>
      <Image src={"file.svg"} alt="image" height={800} width={1440}></Image>
    </div>
  );
};

export default page;

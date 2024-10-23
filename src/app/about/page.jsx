import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200"],
});
export const metadata = {
  title: "About",
  description: "About page",
};

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data;
};
const page = async () => {
  const time = await getTime();
  console.log(time);
  return (
    <div className={`${poppins.className}`}>
      <div>This is about Page</div>
      <h1>Time : {time.currentTime}</h1>
    </div>
  );
};

export default page;

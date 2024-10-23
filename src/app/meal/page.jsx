import Meal from "../components/Meal";
export const metadata = {
  title: {
    absolute: "Meal",
  },
  description: "meal page",
};

const page = () => {
  return (
    <div>
      <p className="text-2xl text-purple-700">
        Welcome to out Meal Page .........
      </p>
      <h1>set out your meal</h1>
      <Meal></Meal>
    </div>
  );
};

export default page;

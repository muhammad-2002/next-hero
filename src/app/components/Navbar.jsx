"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const links = [
    {
      title: "/",
      path: "Home",
    },
    {
      title: "/about",
      path: "About",
    },
    {
      title: "/portfolio",
      path: "Portfolio",
    },
    {
      title: "/blog",
      path: "Blog",
    },
    {
      title: "/contract",
      path: "Contract",
    },
    {
      title: "/dashboard",
      path: "Dashboard",
    },
    {
      title: "/meal",
      path: "meal",
    },
    {
      title: "/gelary",
      path: "gelary",
    },
  ];
  if (pathName.includes("dashboard"))
    return (
      <div className="bg-cyan-600 w-[300px] h-screen">
        <h1>Dashboard Layout</h1>
        <button className="bg-orange-500 text-white px-4 py-2 ">
          <Link href={"/"}>back</Link>
        </button>
      </div>
    );
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <div className="flex justify-between bg-purple-900 text-white p-3">
      <h>logo</h>
      <ul className="flex gap-2 items-center">
        {links.map((link) => (
          <li key={Math.random()}>
            <Link
              className={`${
                pathName == link.title && "font-bold text-cyan-700"
              }`}
              href={link.title}
            >
              {link.path}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleLogin} className="bg-blue-700 px-3 py-1 ">
        Login
      </button>
    </div>
  );
};

export default Navbar;

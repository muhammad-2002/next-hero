"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes("dashboard")) return <div></div>;
  return (
    <div className="bg-black px-3 py-4 text-white">all right@next hero</div>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
  { name: "register", href: "/register" },
];

const layout = () => {
  const pathName = usePathname();
  return (
    <div>
      {navLinks.map(({ name, href }) => {
        const isActive = pathName.startsWith(href);

        return (
          <Link
            href={href}
            className={isActive ? "active" : ""}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};
export default layout;

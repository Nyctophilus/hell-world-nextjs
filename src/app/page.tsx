import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Home page</h1>

      <Link href={"/blog"} style={{ display: "block" }}>
        Blog
      </Link>

      <Link href={"/products"}>Prodcuts</Link>
    </div>
  );
};
export default page;

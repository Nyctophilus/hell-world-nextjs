import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1>Blog Page</h1>

      <hr />
      <Link
        style={{
          textTransform: "capitalize",
          display: "block",
        }}
        href="./first"
      >
        read first blog
      </Link>
      <Link
        style={{ textTransform: "capitalize" }}
        href="/second"
      >
        read second blog
      </Link>
    </div>
  );
};
export default Blog;

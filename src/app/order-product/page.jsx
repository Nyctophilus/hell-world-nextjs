"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    alert("You ordered the product!");
    router.replace("/");
  };

  return (
    <>
      <h1>Order the product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};
export default page;

import { useRouter } from "next/router";
export default function New() {
  const router = useRouter();
  return (
    <>
      My name is manaheel
      <br />
      <button
        type="button"
        onClick={() => {
          console.log("hello");
          router.push("./navbar");
        }}
      ></button>
    </>
  );
}

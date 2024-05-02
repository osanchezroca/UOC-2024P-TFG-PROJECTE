import { useRouter } from "next/router";

export default function Home() {
  //redirect to home page
  const router = useRouter();
  router.push("/home");
  return (
    <div>
      Loading
    </div>
  );
}

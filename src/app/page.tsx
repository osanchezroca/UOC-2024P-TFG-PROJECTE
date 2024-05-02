import { useRouter } from "next/navigation";

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

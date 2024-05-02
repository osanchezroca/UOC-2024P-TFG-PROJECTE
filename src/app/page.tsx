'use client'
import Spinner from "@src/components/Spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  //redirect to home page
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  
  return (
    <div className="space-x-3">
      <Spinner />Loading
    </div>
  );
}

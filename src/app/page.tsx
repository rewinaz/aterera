"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router) router.push("/dashboard");
    return () => {
      //
    };
  }, []);
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}

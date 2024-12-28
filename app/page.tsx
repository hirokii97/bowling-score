"use client";

import { useSession } from "next-auth/react";
import Dashboard from "./dashboard/page";
import { Login } from "./login/page";
import { Data } from "@/types/data";

const data: Data[] = [
  { game: 1, score: 150 },
  { game: 2, score: 180 },
  { game: 3, score: 165 },
  { game: 4, score: 190 },
  { game: 5, score: 200 },
];

export default function Home() {
  const { status } = useSession();
  return (
    <div>
      {status !== "authenticated" ? <Dashboard data={data} /> : <Login />}
    </div>
  );
}

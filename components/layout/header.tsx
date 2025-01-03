import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-wrap justify-between content-center pb-8">
      <h1 className="text-2xl font-bold flex content-center flex-wrap">
        ボウリングスコアダッシュボード
      </h1>
      <div className="flex content-center flex-wrap gap-4">
        <p className="flex content-center flex-wrap">ようこそ、{session?.user?.name ?? "ゲスト"}さん</p>
        <Button onClick={() => signOut()}>ログアウト</Button>
        <img src={session?.user?.image ?? undefined} alt="アイコン" className="rounded-full"  height={50} width={50}/>
      </div>
    </div>
  );
}

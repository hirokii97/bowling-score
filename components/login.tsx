"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { signIn } from "next-auth/react";

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>ボウリングスコアトラッカー</CardTitle>
          <CardDescription>アカウントにログインしてください</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="メールアドレス" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="password" type="password" placeholder="パスワード" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">新規登録</Button>
          <Button
            className=""
            onClick={() => signIn("google", {}, { prompt: "login" })}
          >
            Googleでログイン
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

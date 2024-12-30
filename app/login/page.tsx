"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>ボウリングスコアトラッカー</CardTitle>
          <CardDescription>アカウントにログインしてください</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="outline">新規登録</Button>
          <Button className="" onClick={() => signIn("email", {})}>
            サインイン
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

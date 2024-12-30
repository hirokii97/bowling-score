"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ScoreInputPage() {
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 300)) {
      setScore(value);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでスコアを保存する処理を実装します
    console.log("保存されたスコア:", score, "日付:", date);
    // 保存後、ダッシュボードにリダイレクトするなどの処理を追加できます
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>スコア入力</CardTitle>
          <CardDescription>
            ゲームの最終スコアと日付を入力してください
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="score"
                className="block text-sm font-medium text-gray-700"
              >
                最終スコア
              </label>
              <Input
                id="score"
                type="number"
                min="0"
                max="300"
                value={score}
                onChange={handleScoreChange}
                placeholder="0-300"
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                ゲーム日付
              </label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={handleDateChange}
                className="mt-1"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/">
            <Button variant="outline">キャンセル</Button>
          </Link>
          <Button type="submit" onClick={handleSubmit}>
            スコアを保存
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

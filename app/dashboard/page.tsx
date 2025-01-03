import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Data } from "@/types/data";
import Header from "@/app/components/Header";

export const Dashboard = (props: { data: Data[] }) => {
  const { data } = props;
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>最高スコア</CardTitle>
            <CardDescription>あなたの最高記録</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">200</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>スコア推移</CardTitle>
            <CardDescription>最近5ゲームのスコア</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="game" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Link href="/score-input">
          <Button>新しいスコアを入力</Button>
        </Link>
      </div>
    </div>
  );
};

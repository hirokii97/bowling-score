import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
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
          <Link href="/dashboard">
            <Button>ログイン</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}


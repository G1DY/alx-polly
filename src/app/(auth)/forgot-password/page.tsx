"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6">
      <Card className="w-full max-w-md shadow-xl border border-slate-200 dark:border-slate-800">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl">Forgot password</CardTitle>
          <CardDescription>
            We’ll send a reset link to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6" noValidate>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <Button type="submit" className="w-full">
              Send reset link
            </Button>
            <div className="text-xs text-muted-foreground text-center">
              Remembered it?{" "}
              <a
                href="/login"
                className="hover:text-primary underline underline-offset-4"
              >
                Back to login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

"use client";
import { useState } from "react";
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

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6">
      <Card className="w-full max-w-md shadow-xl border border-slate-200 dark:border-slate-800">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>Start creating and voting on polls</CardDescription>
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
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="text-xs text-muted-foreground hover:text-primary underline underline-offset-4"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" className="w-full">
              Create account
            </Button>
            <div className="text-xs text-muted-foreground text-center">
              Already have an account?{" "}
              <a
                href="/login"
                className="hover:text-primary underline underline-offset-4"
              >
                Log in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

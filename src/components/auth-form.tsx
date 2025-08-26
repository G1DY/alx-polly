"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthForm({ type }: { type: "login" | "register" }) {
  return (
    <form className="space-y-4 max-w-sm mx-auto">
      {type === "register" && (
        <>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </>
      )}

      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />

      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />

      <Button type="submit" className="w-full">
        {type === "login" ? "Login" : "Register"}
      </Button>
    </form>
  );
}

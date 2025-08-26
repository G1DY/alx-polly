"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PollCard({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1">
          {options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

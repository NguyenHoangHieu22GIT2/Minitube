import Layout from "@/components/layouts/Layout";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function logout() {
  return (
    <div className="bg-zinc-800 w-[100vw] h-[100vh]">
      <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3">
        <CardHeader>
          <CardTitle className="text-3xl">Logging out!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl">We are logging you out, hang tight kids!</p>
        </CardContent>
      </Card>
    </div>
  );
}

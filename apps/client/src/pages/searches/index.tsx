import { VideoCards } from "@/components/custom-ui/VideoCards";
import Layout from "@/components/layouts/Layout";
import { Label } from "@/components/ui/label";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function index() {
  const searchParams = useSearchParams();
  const queryName = searchParams.get("queryName");
  return (
    <Layout>
      <Label className="font-bold text-3xl text-white mb-5">
        Search: {queryName}
      </Label>
      <VideoCards></VideoCards>
    </Layout>
  );
}

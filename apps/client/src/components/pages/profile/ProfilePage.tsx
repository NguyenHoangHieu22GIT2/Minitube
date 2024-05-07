import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layouts/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { VideoCards } from "@/components/custom-ui/VideoCards";

export default function ProfilePage() {
  const router = useRouter();
  const { query } = router;
  return (
    <Layout hasNavBar={true}>
      <section className="w-full  mb-5">
        <section className="text-white w-full mb-5 flex gap-5 items-center">
          <Avatar className="w-64 h-64">
            <AvatarImage src="/images.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-5xl font-bold">Pewdiepie</h1>
            <p>2 videos - 10k Subscribers</p>
            <Button className="mr-4 mt-2">Customize Channel</Button>
            <Button>Manage Videos</Button>
          </div>
        </section>
        <hr></hr>
      </section>
      <VideoCards />
    </Layout>
  );
}

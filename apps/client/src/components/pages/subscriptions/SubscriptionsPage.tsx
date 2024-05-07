import Layout from "@/components/layouts/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import React from "react";
export default function SubscriptionsPage() {
  return (
    <Layout>
      <section className="w-full text-center mt-32 text-white">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Minitube Premium
        </h1>
        <p className="text-3xl text-zinc-400 mb-5">
          Get access to videos without any bother,
          <br /> and with AI to help you learn more without wasting time!
        </p>
        <Button>Try for 1 month, at no charge</Button>
        <i className="block">Right now currently support for Vietnam only.</i>
      </section>
      <section>
        <div className="flex justify-around gap-10 mx-96 mt-24 h-fit">
          <Card className="bg-zinc-700 text-white w-full h-fit">
            <CardHeader>
              <h1 className="text-6xl">Free</h1>
            </CardHeader>
            <CardContent>
              <p className="text-5xl">0$/month</p>
              <ul className="flex flex-col gap-5 [&>*]:text-3xl [&>*]:flex [&>*]:items-center [&>*]:gap-5 mt-10">
                <li>
                  <CircleCheck />
                  <span>You can watch videos for free.</span>
                </li>
                <li>
                  <CircleCheck />
                  <span>Save playlists, upload videos.</span>
                </li>
                <li>
                  <CircleCheck />
                  <span>Go wild and make money.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card
            style={{
              backgroundImage:
                "-webkit-linear-gradient(70.66deg,rgba(82,133,236,0) -6.86%,rgba(82,133,236,.1) 7.01%,rgba(149,118,196,.1) 53.66%,rgba(202,108,114,.1) 100.32%,rgba(202,108,114,0) 114.19%)",
            }}
            className="bg-zinc-700 text-white w-full h-fit"
          >
            <CardHeader>
              <h1 className="text-6xl">Advanced</h1>
            </CardHeader>
            <CardContent>
              <p className="text-5xl">20$/month</p>
              <ul className="flex flex-col gap-5 [&>*]:text-3xl [&>*]:flex [&>*]:items-center [&>*]:gap-5 mt-10">
                <li>
                  <CircleCheck />
                  <span>No ads, hooray.</span>
                </li>
                <li>
                  <CircleCheck />
                  <span>Watch videos in a higher buffer rate.</span>
                </li>
                <li>
                  <CircleCheck />
                  <span>
                    Be able to donate money cheaper but still has all benefits
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}

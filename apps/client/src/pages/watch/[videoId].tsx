import Layout from "@/components/layouts/Layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSetting } from "@/lib/zustand/settings";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useRouter } from "next/router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { VideoCards } from "@/components/custom-ui/VideoCards";

export default function page() {
  const openNav = useSetting((state) => state.openNav);
  const router = useRouter();

  const videoId = router.query.videoId as string;
  return (
    <Layout>
      <section className={`text-white flex gap-5 ${!openNav && "p-5"} w-[70%]`}>
        <div>
          <video
            src="/video.mp4"
            autoPlay={true}
            controls
            width={"100%"}
            height={"100%"}
          />
          <div className="mt-5">
            <h1 className="text-3xl font-bold">
              d4vd - Here With Me [Official Music Video]{" "}
            </h1>
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <Avatar>
                  <AvatarImage src="/images.jpeg" width={128} height={128} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h6 className="text-2xl">Pewdiepie</h6>
                <div>32k Subscribes</div>
              </div>
              <div>
                <p className="text-right">32k Views</p>
                <Button>
                  <ThumbsUp />
                  <span>Like</span>
                </Button>
                <Button className="ml-2">
                  <ThumbsDown />
                  <span>Dislike</span>
                </Button>
              </div>
            </div>
          </div>
          <section className="bg-zinc-600 p-5 rounded-lg mt-5">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Description?</AccordionTrigger>
                <AccordionContent>
                  Hello Everyone, Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Eligendi veritatis ea fugit mollitia vitae
                  rem eos provident magnam vero ex earum sunt placeat, doloribus
                  maiores, quibusdam quam? Dolor, tempora. Repudiandae eos
                  provident sapiente, magni soluta consequuntur? Perferendis,
                  doloremque dolores quis quaerat atque, accusantium laboriosam
                  ullam, temporibus ab est et? Fuga sunt quae autem dignissimos
                  explicabo deleniti deserunt doloremque, eligendi repellat
                  mollitia quaerat voluptatibus quidem voluptates dolor
                  laudantium suscipit possimus reiciendis, soluta facere maiores
                  aperiam necessitatibus expedita sequi ex. Aliquid, odit,
                  maxime consequuntur iusto quos earum unde blanditiis in
                  architecto debitis consectetur, saepe facilis corporis sit
                  sunt ab deleniti porro libero.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          <section></section>
        </div>
        <div></div>
      </section>
    </Layout>
  );
}

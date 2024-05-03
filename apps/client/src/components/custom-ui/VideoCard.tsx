import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { UserAvatar } from "./UserAvatar";
import Link from "next/link";
export default function VideoCard() {
  return (
    <Card className="bg-zinc-700 border-0 text-white cursor-pointer shadow-none">
      <Link href={"/watch/1"}>
        <CardHeader>
          <AspectRatio ratio={16 / 9}>
            <Image
              alt="A video"
              src={"/thumbnail.jpg"}
              width={1920}
              height={1080}
            />
          </AspectRatio>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <div>
              <UserAvatar />
            </div>
            <div>
              <h6 className="text-xl">
                This girl is so beautiful in whiteeeee!!!
              </h6>
              <i>Pewdiepie</i>
              <div>
                <span>135k Views</span>
                <span>{" - "}</span>
                <span>1 day ago</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

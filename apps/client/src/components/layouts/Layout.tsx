import React, { ReactNode } from "react";
import { Header } from "./Header";
import Image from "next/image";
type props = {
  children: ReactNode;
  hasNavBar?: boolean;
};

import {
  History,
  HomeIcon,
  ThumbsUp,
  User,
  User2,
  Video,
  Videotape,
} from "lucide-react";
import { NavLinks } from "../pages/home/components/NavLinks";
import { useSetting } from "@/lib/zustand/settings";
export default function Layout(props: props) {
  const openNav = useSetting((state) => state.openNav);
  let finalElement = (
    <>
      <Header />
      {props.children}
    </>
  );
  if (openNav) {
    finalElement = (
      <>
        <Header />
        <section className="flex h-full min-h-[100vh] w-full  bg-zinc-800">
          {/* Navigation bar */}
          <div className="basis-1/6 bg-zinc-700 p-6 sticky top-16 overflow-y-scroll  h-[100vh]">
            <NavLinks headerString="Fast Travel">
              <ul className="flex flex-col gap-2">
                <li>
                  <button className="text-white w-full text-left rounded-lg bg-zinc-600 flex gap-5 p-5">
                    <HomeIcon />
                    Home
                  </button>
                </li>
                <li>
                  <button className="text-white w-full text-left rounded-lg transition hover:bg-zinc-600 flex gap-5 p-5">
                    <User />
                    Profile
                  </button>
                </li>
                <li>
                  <button className="text-white w-full text-left rounded-lg transition hover:bg-zinc-600 flex gap-5 p-5">
                    <Video />
                    Subscription
                  </button>
                </li>
              </ul>
            </NavLinks>
            <hr className="py-2"></hr>
            <NavLinks headerString="You">
              <ul className="flex flex-col gap-2">
                <li>
                  <button className="text-white w-full text-left rounded-lg bg-zinc-600 flex gap-5 p-5">
                    <User2 />
                    Your channel
                  </button>
                </li>
                <li>
                  <button className="text-white w-full text-left rounded-lg transition hover:bg-zinc-600 flex gap-5 p-5">
                    <History />
                    History
                  </button>
                </li>
                <li>
                  <button className="text-white w-full text-left rounded-lg transition hover:bg-zinc-600 flex gap-5 p-5">
                    <Videotape />
                    Playlists
                  </button>
                </li>
                <li>
                  <button className="text-white w-full text-left rounded-lg transition hover:bg-zinc-600 flex gap-5 p-5">
                    <ThumbsUp />
                    Liked videos
                  </button>
                </li>
              </ul>
            </NavLinks>
            <hr className="py-2"></hr>
            <NavLinks headerString="Subscriptions">
              <ul className="flex flex-col gap-2">
                <li>
                  <button className="text-white w-full text-left rounded-lg transition hover:bg-zinc-600 flex gap-5 p-5">
                    <Image
                      src={"/images.jpeg"}
                      alt="PEWDIEPIE"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    Pewdiepie
                  </button>
                </li>
                <li>
                  <button className="text-white w-full text-left rounded-lg transition hover:bg-zinc-600 flex gap-5 p-5">
                    <Image
                      src={"/images.jpeg"}
                      alt="PEWDIEPIE"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    Pewdiepie
                  </button>
                </li>
              </ul>
            </NavLinks>
          </div>
          <div className="basis-5/6 p-5">{props.children}</div>
        </section>
      </>
    );
  }
  return finalElement;
}

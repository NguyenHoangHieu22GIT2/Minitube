import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src={"/images.jpeg"} className="rounded-full" />
      <AvatarFallback>FB</AvatarFallback>
    </Avatar>
  );
}

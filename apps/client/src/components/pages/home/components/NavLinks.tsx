import React, { ReactNode } from "react";

type props = {
  headerString?: string;
  children: ReactNode;
};

export function NavLinks(props: props) {
  return (
    <div>
      <header className="text-white font-bold pl-5 mb-2 text-lg">
        {props.headerString}
      </header>
      <ul className="flex flex-col gap-2">{props.children}</ul>
    </div>
  );
}

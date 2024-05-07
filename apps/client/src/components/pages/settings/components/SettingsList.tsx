import React from "react";
import { NavLinks } from "../../home/components/NavLinks";

type props = {
  chosenSetting: "profile" | "account" | "appearance" | "bans-people";
};

export default function SettingsList(props: props) {
  return (
    <>
      <NavLinks>
        <ul className="flex flex-col gap-2">
          <li>
            <button
              className={`text-white w-full text-left rounded-lg ${props.chosenSetting == "profile" && "bg-zinc-600"} hover:bg-zinc-600 flex gap-5 p-5`}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              className={`text-white w-full text-left rounded-lg ${props.chosenSetting == "account" && "bg-zinc-600"} hover:bg-zinc-600 flex gap-5 p-5`}
            >
              Account
            </button>
          </li>
          <li>
            <button
              className={`text-white w-full text-left rounded-lg ${props.chosenSetting == "appearance" && "bg-zinc-600"} hover:bg-zinc-600 flex gap-5 p-5`}
            >
              Appearance
            </button>
          </li>
          <li>
            <button
              className={`text-white w-full text-left rounded-lg ${props.chosenSetting == "bans-people" && "bg-zinc-600"} hover:bg-zinc-600 flex gap-5 p-5`}
            >
              Bans people
            </button>
          </li>
        </ul>
      </NavLinks>
    </>
  );
}

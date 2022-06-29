import React from "react";
import { BottomMenu } from "./BottomMenu";
import { LeftMenu } from "./LeftMenu";

export function MenuBar() {
  return (
    <>
      <LeftMenu />
      <BottomMenu />
    </>
  );
}

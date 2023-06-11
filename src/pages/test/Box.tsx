import { styled } from "@nextui-org/react";

export default function Box() {
  return (styled("div", {
    boxSizing: "border-box",
    maxWidth: "100%"
  }))
};

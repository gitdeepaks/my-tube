"use client";

import { trpc } from "@/trpc/client";

import React from "react";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Deepak",
  });
  return <div>PageClient client says: {data.greeting}</div>;
};

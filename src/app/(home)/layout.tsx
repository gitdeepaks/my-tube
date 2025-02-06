import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: HomeLayoutProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default layout;

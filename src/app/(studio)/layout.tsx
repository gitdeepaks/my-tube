import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: HomeLayoutProps) => {
  return <StudioLayout>{children}</StudioLayout>;
};

export default layout;

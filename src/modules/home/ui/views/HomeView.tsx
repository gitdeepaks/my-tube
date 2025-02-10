import React from "react";
import { CategoryiesSection } from "../sections/CategoryiesSection";

interface HomeViewProps {
  categoryId?: string;
}

export const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <CategoryiesSection categoryId={categoryId} />
    </div>
  );
};

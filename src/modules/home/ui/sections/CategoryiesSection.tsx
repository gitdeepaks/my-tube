"use client";

import React from "react";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { FilterCarousel } from "@/components/FilterCarousel";
import { useRouter } from "next/navigation";

interface CategoryiesSectionProps {
  categoryId?: string;
}

export const CategoryiesSection = ({ categoryId }: CategoryiesSectionProps) => {
  return (
    <React.Suspense fallback={<CategorySkeleton />}>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <CategoryiesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </React.Suspense>
  );
};

const CategorySkeleton = () => {
  return <FilterCarousel isLoading data={[]} onSelect={() => {}} />;
};

const CategoryiesSectionSuspense = ({
  categoryId,
}: CategoryiesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const router = useRouter();

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }
    router.push(url.toString());
  };

  const data = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return <FilterCarousel onSelect={onSelect} data={data} value={categoryId} />;
};

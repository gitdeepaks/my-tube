import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "h-10 w-10",
      sm: "h-6 w-6",
      lg: "h-10 w-10",
      xs: "h-4 w-4",
      xl: "h-[160px] w-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  imageUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

export const UserAvatar = ({
  imageUrl,
  name,
  onClick,
  size,
  className,
}: UserAvatarProps) => {
  return (
    <Avatar className={cn(avatarVariants({ size }))} onClick={onClick}>
      <AvatarImage src={imageUrl} alt={name} />
    </Avatar>
  );
};

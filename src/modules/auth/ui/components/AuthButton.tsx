"use client";

import React from "react";
import { UserCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

export const AuthButton = () => {
  // TODO: Add different Auth states
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add Menu Item for studio and profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

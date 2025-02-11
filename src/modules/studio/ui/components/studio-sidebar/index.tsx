"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarMenu,
} from "@/components/ui/sidebar";
import React from "react";

import Link from "next/link";
import { LogOutIcon, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { StudioSideBarHeader } from "./StudioSideBarHeader";

export const StudioSideBar = () => {
  const pathname = usePathname();
  return (
    <Sidebar className="pt-16 z-40" collapsible="icon">
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarMenu>
            <StudioSideBarHeader />
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={pathname === "/studio"}
                asChild
                tooltip="Exit studio"
              >
                <Link href={"/studio"}>
                  <VideoIcon className="size-5" />
                  <span className="text-sm">Content</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Separator />
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Exit studio">
                <Link href={"/"}>
                  <LogOutIcon className="size-5" />
                  <span className="text-sm">Exit Studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

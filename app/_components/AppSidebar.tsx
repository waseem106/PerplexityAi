"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Compass, Library, LogIn, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.png"

 
const menuOptions = [
  {
    title: "Home",
    icon: Search,
    path: "/",
  },
  {
    title: "Discover",
    icon: Compass,
    path: "/discover",
  },
  {
    title: "Library",
    icon: Library,
    path: "/library",
  },
  {
    title: "Sign In",
    icon: LogIn,
    path: "#",
  },
];

function AppSidebar() {
  const path = usePathname();
  return (
    <>
      <Sidebar>
        <SidebarHeader className="bg-[#eff0eb] flex p-5 ">
          <Image src={logo} alt="logo" width={150} height={170} />
        </SidebarHeader>
        <SidebarContent className="bg-[#eff0eb]">
          <SidebarGroup>
            <SidebarContent>
              <SidebarMenu>
                {menuOptions.map((menuItem, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      asChild
                      className={`p-5 hover:font-bold hover:bg-transparent 
            ${path === menuItem.path && "font-bold"}
            `}
                    >
                      <a href={menuItem?.path}>
                        <menuItem.icon className="w-8 h-8" />
                        <span className="text-lg">{menuItem.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem className="p-5 mt-4">
                  <Button className="w-full rounded-3xl">Sign Up</Button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </SidebarGroup>

          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter className="bg-[#eff0eb] p-5">
            <div className="mb-10">
                <h2 className="text-gray-500">Try Now</h2>
                <p className="text-gray-400">Upgrade for image upload, smarter AI & more copilot</p>
                <Button className="w-full text-gray-600 bg-accent hover:bg-accent">Learn More</Button>
            </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}

export default AppSidebar;

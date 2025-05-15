"use client";
import React, { useEffect } from "react";
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
import logo from "@/public/logo.png";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

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
    path: "/sign-in",
  },
];

function AppSidebar() {

  const path = usePathname();
  // const {isSignedIn } = useUser();
  const {user,isSignedIn,isLoaded}=useUser();
 
  useEffect(() => {
    if (isLoaded) {
      console.log(" User Details from the useUser hook:", user);
    }
  }, [user]);

  return (
    <>
      
      <Sidebar>
        <SidebarHeader className="bg-[#eff0eb] flex p-5 ">
          <Image src={logo} alt="logo" width={150} height={170} />
          {/* <Button onClick={myUser}>Cick me</Button> */}
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
                         ${path === menuItem.path && "font-bold"} `} >
                      <a href={menuItem?.path}>
                        <menuItem.icon className="w-8 h-8" />
                        <span className="text-lg">{menuItem.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem className=" mt-4">
                  {!isSignedIn  ? (
                    <SignUpButton mode="modal">
                      <Button className="w-full rounded-3xl">Sign Up</Button>
                    </SignUpButton>
                  ) : (
                    <SignOutButton>
                      <Button className="w-full rounded-3xl">Log Out</Button>
                    </SignOutButton>
                  )}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </SidebarGroup>

          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter className="bg-[#eff0eb] p-5">
          <div className="mb-10">
            <h2 className="text-gray-500">Try Now</h2>
            <p className="text-gray-400">
              Upgrade for image upload, smarter AI & more copilot
            </p>
            <Button className="w-full text-gray-600 bg-accent hover:bg-accent">
              Learn More
            </Button>
            <div className="py-2 ">
              <UserButton />
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}

export default AppSidebar;

"use client";

import { UserContext } from "@/context/UserContext";
import { useUser } from "@clerk/nextjs";
import { AArrowUp } from "lucide-react";
import React, { ReactNode, useEffect, useState } from "react";


type ProviderProps = {
  children: ReactNode;
};

function Provider({ children }: ProviderProps) {
  const { user, isLoaded, isSignedIn } = useUser();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user ) return;

    const saveUser = async () => {
      const email = user?.emailAddresses[0]?.emailAddress;
      const name = user?.fullName;
      try {
        console.log("email send to found user",email)
        const findRes = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify({
            email,
            action: "find",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (findRes.ok) {
          const foundUser = await findRes.json();
          setUserDetails(foundUser);
          console.log("User found ", foundUser);
          return;
        }
        else if (findRes.status !== 404) {
          throw new Error("Failed to find user");
        }
        
        const createRes = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify({
            action: "create",
            email,
            name,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!createRes.ok) throw new Error("Failed to create User");
        const createdUser = await createRes.json();
        setUserDetails(createdUser);
      } catch (error) {
        console.log("Error", error);
      }
    };

    saveUser();
  }, [isLoaded, isSignedIn, user]);

  

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <div className="flex items-center justify-center w-full">{children}</div>
    </UserContext.Provider>
  );
}

export default Provider;

import { SidebarTrigger } from "@/components/ui/sidebar";
import ChatInputBox from "./_components/ChatInputBox";
import { dbConnect } from "@/lib/dbConnect";
import { User } from "@/model/User";
import { currentUser } from "@clerk/nextjs/server";
import { createUser } from "@/lib/createUser";

export default async function Home() {
  // const user= await currentUser()
  // await createUser(user)

  return (
    <>
      <SidebarTrigger />
      <main className="flex items-center justify-center w-full">
        <ChatInputBox />
      </main>
    </>
  );
}

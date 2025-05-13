import { SidebarTrigger } from "@/components/ui/sidebar";
import ChatInputBox from "./_components/ChatInputBox";

export default function Home() {
  return (
    <>
      <SidebarTrigger />
      <main className="flex items-center justify-center w-full">
        <ChatInputBox />
      </main>
    </>
  );
}

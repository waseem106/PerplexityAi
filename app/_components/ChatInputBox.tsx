import Image from "next/image";
import logo from "@/public/logo.png";
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Atom,
  AudioLinesIcon,
  Cpu,
  Ghost,
  Globe,
  Mic,
  Paperclip,
  Search,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AIModelsOption } from "@/services/shared";

function ChatInputBox() {
  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <header className="relative w-[180px] h-[62px] md:w-[260px] md:h-[62px]">
        {/* <header> */}
        <Image src={logo} alt="log" fill />
      </header>
      <main className="w-full max-w-2xl p-3 md:p-5  border-3 rounded-3xl my-3">
        <div
          className="mt-4 flex  justify-between items-center   flex-row md:flex-row md:items-end 
        flex-wrap "
        >
          <div className="w-auto">
            <Tabs defaultValue="Search" className="w-full md:w-[400px]">
              <TabsContent value="Search">
                <input
                  type="text"
                  placeholder="Ask Anything"
                  className="w-full  border-none  focus:outline-none mb-3"
                />
              </TabsContent>
              <TabsContent value="Research">
                <input
                  type="text"
                  placeholder="Research"
                  className="w-full  border-none focus:outline-none mb-3"
                />
              </TabsContent>
              <TabsList>
                <TabsTrigger value="Search" className="text-primary">
                  <Search /> Search
                </TabsTrigger>
                <TabsTrigger value="Research" className="text-primary">
                  <Atom /> Research
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex gap-2 md:gap-4  items-center ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Cpu className="text-gray-400 w-4 h-4  " />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select the model</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {AIModelsOption.map((model, index) => (
                  <DropdownMenuItem key={index}>
                    <div>
                      <h2>{model.name}</h2>
                      <p className="text-xs">{model.desc}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Globe className="text-gray-400 w-4 h-4" />
            <Paperclip className="text-gray-400 w-4 h-4" />
            <Mic className="text-gray-400 w-4 h-4" />
            <Button>
              <AudioLinesIcon className="text-white w-4 h-4 " />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChatInputBox;

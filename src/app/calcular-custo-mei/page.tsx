import { Button } from "@/components/ui/button";
import { Github, Wallet } from "lucide-react";
import CalculatorMeiContainer from "./components/calculator-mei-container";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between gap-4 bg-[rgb(237,239,235)] p-10 pb-20 max-lg:gap-0 max-lg:p-0">
      <div className="flex w-full items-center justify-between max-lg:bg-[rgb(22,51,0)] max-lg:px-8 max-lg:py-4">
        <span className="text-bg-[rgb(22,51,0)] flex items-center gap-2 text-xl font-bold max-lg:text-white">
          <Wallet />
          FreeCalc
        </span>
        <a href="https://github.com/euvitordev" className="" target="_blank">
          <Button
            variant={"secondary"}
            size={"icon"}
            className="rounded-full bg-emerald-500/10 hover:text-black max-lg:text-white"
          >
            <Github />
          </Button>
        </a>
      </div>
      <div className="flex h-full w-full">
        <CalculatorMeiContainer />
      </div>
    </main>
  );
}

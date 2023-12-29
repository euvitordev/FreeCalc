import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { AlertCircle, Filter } from "lucide-react";

export default function ButtonFilter() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant={"secondary"}
              size={"icon"}
              className="cursor-not-allowed rounded-full bg-emerald-500/5"
            >
              <Filter size={20} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-4 text-red-500">
            <AlertCircle size={18} className="" />
            <p>Esta opção estará disponível em breve!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

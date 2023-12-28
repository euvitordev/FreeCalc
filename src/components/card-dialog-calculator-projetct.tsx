import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";

export default function CardDialogCalculatorProject({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent className="flex items-center gap-4 text-red-500">
            <AlertCircle size={18} className="" />
            <p>Esta opção estará disponível em breve!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

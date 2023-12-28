import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { AlertCircle, Filter } from "lucide-react";

import {
  Building2,
  Calculator,
  DivideSquare,
  DollarSign,
  LineChart,
  PanelsTopLeft,
  PlusSquare,
  SmilePlus,
  TrendingUp,
} from "lucide-react";

export default function BadgeOptions() {
  const temasFreeCalc = [
    {
      name: "Finanças Pessoais",
      icon: <DivideSquare size={18} />,
    },
    {
      name: "Negócios",
      icon: <Building2 size={18} />,
    },
    {
      name: "Empreendedorismo",
      icon: <LineChart size={18} />,
    },
    {
      name: "Cálculos do MEI",
      icon: <Calculator size={18} />,
    },
    {
      name: "Impostos",
      icon: <DollarSign size={18} />,
    },
    {
      name: "Matemática Financeira",
      icon: <PlusSquare size={18} />,
    },
    {
      name: "Projetos",
      icon: <PanelsTopLeft size={18} />,
    },
    {
      name: "Investimentos",
      icon: <TrendingUp size={18} />,
    },
    {
      name: "E muito mais em breve...",
      icon: <SmilePlus size={18} />,
    },
  ];
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="overflow-container mb-60 flex w-full items-center justify-between gap-4 overflow-x-auto p-4">
              {temasFreeCalc.map((item, index) => (
                <Button
                  key={index}
                  className="flex cursor-not-allowed items-center gap-2 rounded-full bg-zinc-100/25 font-bold text-white hover:text-black"
                  variant={"secondary"}
                  size={"sm"}
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
            </div>
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

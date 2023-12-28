"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BadgePercent,
  Building2,
  Calculator,
  ChevronDown,
  DivideSquare,
  DollarSign,
  History,
  LineChart,
  PanelsTopLeft,
  PlusSquare,
  SmilePlus,
  TrendingUp,
} from "lucide-react";

import CardDialogCalculatorMei from "./card-dialog-calculator-mei";
import ButtonFilter from "./page-components/button-filter";
import CardDialogCalculatorProject from "./card-dialog-calculator-projetct";

const HistoryCalc = [
  {
    name: "Em breve, os cálculos estarão disponíveis aqui",
    icon: <DollarSign />,
  },
  {
    name: "Em breve, os cálculos estarão disponíveis aqui",
    icon: <DollarSign />,
  },
  {
    name: "Em breve, os cálculos estarão disponíveis aqui",
    icon: <DollarSign />,
  },
  {
    name: "Em breve, os cálculos estarão disponíveis aqui",
    icon: <DollarSign />,
  },
  {
    name: "Em breve, os cálculos estarão disponíveis aqui",
    icon: <DollarSign />,
  },
  {
    name: "Em breve, os cálculos estarão disponíveis aqui",
    icon: <DollarSign />,
  },
  {
    name: "Em breve, os cálculos estarão disponíveis aqui",
    icon: <DollarSign />,
  },
  {
    name: "Em breve, os cálculos estarão disponíveis aqui",
    icon: <DollarSign />,
  },
];

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
export default function CalculatorContainer() {
  return (
    <>
      <div className="flex h-full w-full gap-4 max-xl:flex-col max-lg:mx-auto max-lg:gap-0">
        <div className="h-full w-full items-center justify-center rounded-md bg-emerald-700 max-lg:h-screen max-lg:rounded-none">
          <div className="flex h-full max-w-2xl flex-col items-start justify-between gap-8 p-8">
            <div className="flex h-full w-full flex-col gap-8">
              <h1 className="text-2xl font-bold text-white">
                Desvende a chave para o sucesso financeiro!
              </h1>

              <div className="overflow-container mb-60 flex w-full items-center justify-between gap-4 overflow-x-auto p-1">
                {temasFreeCalc.map((index) => (
                  <Button
                    key={index}
                    className="flex cursor-not-allowed items-center gap-2 rounded-full bg-zinc-100/25 p-6 font-bold text-white hover:text-black"
                    variant={"secondary"}
                    size={"sm"}
                  >
                    {index.icon}
                    {index.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-bold text-white">Opções Disponiveis</span>
              {/*  */}

              <div className="flex items-center gap-4">
                <CardDialogCalculatorMei>
                  <>
                    <Button
                      variant={"secondary"}
                      className="flex h-36 flex-col items-start justify-between gap-4 p-8"
                    >
                      <span className="rounded-full bg-emerald-100 p-2">
                        <Calculator />
                      </span>
                      <div className="flex flex-col items-start">
                        <p className="">Calcular Custos</p>
                        <span>Do Mei</span>
                      </div>
                    </Button>
                  </>
                </CardDialogCalculatorMei>
                <CardDialogCalculatorProject>
                  <>
                    <Button
                      variant={"secondary"}
                      className="flex h-36 cursor-not-allowed flex-col items-start justify-between gap-4 p-8"
                    >
                      <span className="rounded-full bg-emerald-100 p-2">
                        <BadgePercent />
                      </span>
                      <div className="flex flex-col items-start">
                        <p className="">Calcular Custos</p>
                        <span>Do Projeto</span>
                      </div>
                    </Button>
                  </>
                </CardDialogCalculatorProject>
              </div>
            </div>
          </div>
        </div>

        {/* SecoundCard */}
        <div className="flex h-full w-full flex-col items-start gap-4 rounded-md bg-zinc-100 p-8 max-lg:flex max-lg:rounded-none">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <History />
              <h2 className=" text-xl font-bold">Histórico</h2>
              <ChevronDown className="" />
            </div>
            <ButtonFilter />
          </div>

          <div className="overflow-container mt-8 flex h-full w-full flex-col gap-4 overflow-auto">
            {HistoryCalc.map((index) => (
              <div
                key={index}
                className=" flex w-full cursor-pointer gap-8 rounded-xl bg-white p-4 transition-all delay-150 duration-300 ease-in-out hover:bg-zinc-200"
              >
                <div className="flex items-center">
                  <span className="hover: rounded-full bg-emerald-100 p-2 text-emerald-500">
                    {index.icon}
                  </span>
                </div>
                <div className="flex items-center">
                  <p className="text-xl font-bold text-emerald-500">
                    Em breve, os cálculos estarão disponíveis aqui
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

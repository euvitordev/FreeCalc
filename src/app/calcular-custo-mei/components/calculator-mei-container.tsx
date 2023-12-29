"use client";
import { InputField, SalaryDatailsType, formDataType } from "@/types/types";
import { calcIncome, formatCurrency } from "@/helpers/calclncom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BadgePercent,
  Calculator,
  ChevronLeft,
  Copy,
  DollarSign,
  FileLineChart,
  MoveLeft,
} from "lucide-react";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, History } from "lucide-react";
import Link from "next/link";

const inputFields: InputField[] = [
  {
    id: "monthlyNetSalary",
    type: "number",
    label: "Quanto você quer ganhar por mês (líquido)?",
    placeholder: "Insira o valor aqui - Ex: 3000",
  },
  {
    id: "workHoursPerDay",
    label: "Quantas horas você quer trabalhar por dia?",
    type: "number",
    placeholder: "Insira o valor aqui - Ex: 8",
  },
  {
    id: "workDaysPerWeek",
    label: "Quantos dias você quer trabalhar por semana?",
    type: "number",
    placeholder: "Insira o valor aqui - Ex: 5",
  },
  {
    id: "vacationWeeksPerYear",
    label: "Quantas semanas por ano você gostaria de tirar férias?",
    type: "number",
    placeholder: "Insira o valor aqui - Ex: 4",
  },
  {
    id: "monthlyExpenses",
    label: "Qual os seus custos mensais relacionados ao trabalho?",
    type: "number",
    placeholder: "Insira o valor aqui - Ex: 1500",
    // Exemplo: Custo de sistemas, internet, luz e etc...
  },
];

export default function CalculatorMeiContainer() {
  const [formData, setFormData] = useState({} as formDataType);
  const [salaryDetails, setSalaryDetails] = useState({} as SalaryDatailsType);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Envio dos dados do formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formResult = calcIncome(formData);
    setSalaryDetails({
      hourlyRate: formatCurrency.format(formResult.hourlyRate),
      monthlyGrossIncome: formatCurrency.format(formResult.monthlyGrossIncome),
    });
  };

  return (
    <>
      <div className="flex h-full w-full gap-4 rounded-xl bg-white max-xl:flex-col max-lg:mx-auto max-lg:gap-0">
        <div className="h-full w-full items-center justify-center max-lg:h-screen max-lg:rounded-none">
          <div className="flex h-full max-w-4xl flex-col items-start justify-start gap-8 p-8">
            <div className="flex w-full items-center gap-4">
              <Link href={"/"}>
                <Button
                  className="rounded-lg bg-zinc-50/25 text-[rgb(22,51,0)] hover:text-black"
                  variant={"secondary"}
                  size={"icon"}
                >
                  <MoveLeft />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-[rgb(22,51,0)] max-lg:text-xl">
                Vamos calcular seus custos como MEI!
              </h1>
            </div>

            <div className="overflow-container flex h-screen w-full flex-col items-center gap-4 overflow-x-auto">
              <form
                className="flex h-full w-full flex-col gap-4 overflow-y-auto max-lg:text-start"
                onSubmit={handleSubmit}
              >
                {inputFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex w-full flex-col items-start p-2 text-[rgb(22,51,0)]"
                  >
                    <div className="flex h-full w-full flex-col justify-between gap-2">
                      <Label
                        htmlFor={field.id}
                        className="text-2xl font-semibold max-lg:text-base"
                      >
                        {field.label}
                      </Label>
                      <Input
                        className="h-12 text-xl text-[rgb(22,51,0)] max-lg:text-base"
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        placeholder={field.placeholder}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex w-full p-2">
                  <Button
                    type="submit"
                    className="w-full bg-[rgb(159,232,112)] p-8 text-xl font-bold text-[rgb(22,51,0)] hover:bg-[rgb(139,205,99)]"
                  >
                    Calcular
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-start gap-4 border-l-2 p-8 max-xl:flex max-lg:rounded-none max-lg:border-t-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <FileLineChart />
              <h2 className=" text-xl font-bold">Resultado</h2>
            </div>
            <Button className="" size={"icon"} variant={"ghost"}>
              <Copy size={18} />
            </Button>
          </div>

          <div className="overflow-container flex h-full w-full flex-col gap-4 overflow-auto">
            <div className="">
              <h2 className="text-2xl font-bold text-[rgb(22,51,0)] max-lg:text-xl">
                Como Microempreendedor Individual (MEI), o cálculo do seu custo
                é determinado da seguinte forma:
              </h2>
            </div>
            {/*  */}
            <div className="flex w-full flex-col justify-between gap-4 max-lg:text-start">
              <div className="flex h-full w-full gap-8 rounded-xl p-4">
                <div className="flex items-center">
                  <span className="rounded-full bg-[rgb(220,224,217)] p-2 text-[rgb(22,51,0)]">
                    <DollarSign />
                  </span>
                </div>
                <div className="">
                  <p className="text-xl">
                    O valor mínimo para sua hora de trabalho é de
                  </p>
                  <p className="text-4xl font-black text-[rgb(159,232,112)] max-lg:w-full">
                    {salaryDetails.hourlyRate
                      ? salaryDetails.hourlyRate
                      : "R$ 0,00"}
                    <span className="text-2xl">/hora</span>
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-8 rounded-xl p-4 ">
                <div className="flex items-center">
                  <span className="rounded-full bg-[rgb(220,224,217)] p-2 text-[rgb(22,51,0)]">
                    <DollarSign />
                  </span>
                </div>
                <div className="">
                  <p className="text-xl">
                    O valor médio bruto que você precisa faturar é:
                  </p>
                  <p className="text-4xl font-black text-[rgb(159,232,112)]">
                    {salaryDetails.monthlyGrossIncome
                      ? salaryDetails.monthlyGrossIncome
                      : "R$ 0,00"}
                    <span className="text-2xl">/mês</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

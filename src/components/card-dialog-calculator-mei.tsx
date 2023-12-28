"use client";

import React, { useState } from "react";
import { InputField, SalaryDatailsType, formDataType } from "@/types/types";
import { calcIncome, formatCurrency } from "@/helpers/calclncom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BadgePercent, Calculator, DollarSign } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export default function CardDialogCalculatorMei({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className=" flex w-full gap-0 overflow-auto bg-[rgb(240,248,255)] p-0 max-2xl:h-screen max-2xl:flex-col max-xl:h-screen max-xl:flex-col max-lg:h-screen">
          <DialogHeader className="h-full w-full p-8">
            <DialogTitle className="mb-4 text-xl font-bold max-lg:text-start">
              Vamos calcular seus custos como MEI
            </DialogTitle>
            <DialogDescription>
              <form
                className="flex h-full w-full flex-col overflow-y-auto max-lg:text-start"
                onSubmit={handleSubmit}
              >
                {inputFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex w-full flex-col items-start"
                  >
                    <div className="flex h-full w-full flex-col justify-between p-2">
                      <Label
                        htmlFor={field.id}
                        className="text-xl max-lg:text-base"
                      >
                        {field.label}
                      </Label>
                      <Input
                        className="h-12 text-xl max-lg:text-base"
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
                  <Button type="submit" size={"lg"} className="mt-4 w-full">
                    Calcular
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
          {/*  */}
          <DialogHeader className="h-screen w-full bg-[rgb(242,242,242)] p-8">
            <DialogTitle className="mb-4 text-xl font-bold max-lg:text-start">
              Como Microempreendedor Individual (MEI), o cálculo do seu custo é
              determinado da seguinte forma:
            </DialogTitle>

            <DialogDescription>
              <div className="flex h-full w-full flex-col justify-between gap-4 max-lg:text-start">
                <div className="flex h-full w-full gap-8 rounded-xl bg-white p-4">
                  <div className="flex items-center">
                    <span className="rounded-full bg-emerald-100 p-2 text-emerald-500">
                      <DollarSign />
                    </span>
                  </div>
                  <div className="">
                    <p className="text-xl">
                      O valor mínimo para sua hora de trabalho é de
                    </p>
                    <p className="text-4xl font-bold text-emerald-500 max-lg:w-full">
                      {salaryDetails.hourlyRate
                        ? salaryDetails.hourlyRate
                        : "R$ 0,00"}
                      <span className="text-2xl">/hora</span>
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-8 rounded-xl bg-white p-4 ">
                  <div className="flex items-center">
                    <span className="rounded-full bg-emerald-100 p-2 text-emerald-500">
                      <DollarSign />
                    </span>
                  </div>
                  <div className="">
                    <p className="text-xl">
                      O valor médio bruto que você precisa faturar é:
                    </p>
                    <p className="text-4xl font-bold text-emerald-500">
                      {salaryDetails.monthlyGrossIncome
                        ? salaryDetails.monthlyGrossIncome
                        : "R$ 0,00"}
                      <span className="text-2xl">/mês</span>
                    </p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

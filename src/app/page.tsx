import Image from 'next/image'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

import { CalendarDays } from 'lucide-react';
import { Users2 } from 'lucide-react';
import { Car } from 'lucide-react';

import { DatePicker } from "@tremor/react";

export default function Home() {
  return (
    <>
      <main className="md:flex flex-col min-h-screen bg-defaultBackground justify-center">
        <Image className="mx-auto" src="/hero.png" alt="logo" width={400} height={270} />
        <div className="md:flex flex-col md:w-[1024px] shadow-xl bg-white p-4 rounded-2xl box-shadow mx-auto gap-6">
          <div className="md:flex flex-row items-center justify-between  mx-auto gap-4">
            <Input type="text" variant="bordered" label="Origem" placeholder="De onde está saindo?" color="primary" />
            <Input type="text" variant="bordered" label="Destino" placeholder="Pra onde está indo?" color="primary" />
            <Input type="text" variant="bordered" label="Quando?" placeholder="Hoje" color="primary" endContent={<CalendarDays className="text-primary" />}  />
            <DatePicker className="max-w-sm mx-auto" />
            <Input type="text" variant="bordered" label="Quantas pessoas?" placeholder="Só eu..." color="primary" endContent={<Users2 className="text-primary" />} />
          </div>
          <div className="md:flex flex-row items-center mx-auto gap-6">
            <Button color="primary" startContent={<Car />}>Procurar Carona</Button>
            <Button color="primary" startContent={<Car />}>Oferecer Carona</Button>
          </div>
        </div>
      </main>
    </>
  )
}

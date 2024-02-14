'use client';
import React, { useState } from 'react'

import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

import { CalendarDays } from 'lucide-react';
import { Users2 } from 'lucide-react';
import { Car } from 'lucide-react';

import { DateRangePicker } from "@tremor/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function Search(){
    const [showCalendary, SetShowCalendary] = useState(false)
    const [drop, setDro] = useState(false)

    const toggleCalendary = () => {
        SetShowCalendary(!showCalendary)
    }

    const toggleDrop = () => {
        setDro(!drop)
    }

    return(
        <div className="md:flex flex-col md:w-[1024px] shadow-xl bg-white p-4 rounded-2xl box-shadow mx-auto gap-6">
          <div className="md:flex flex-row items-center justify-between  mx-auto gap-4">
            <Input type="text" variant="bordered" label="Origem" placeholder="De onde está saindo?" color="primary" />
            <Input type="text" variant="bordered" label="Destino" placeholder="Pra onde está indo?" color="primary" />
            <Input type="text" variant="bordered" label="Quando?" placeholder="Hoje" color="primary" onFocus={toggleCalendary} 
            endContent={<CalendarDays/>}/> {showCalendary && (<DateRangePicker
              className="max-w-sm mx-auto"
              enableSelect={false}
              
            />)}

            <Input type="text" variant="bordered" label="Quantas pessoas?" placeholder="Só eu..." color="primary" 
            onFocus={toggleDrop} endContent={<Users2 className="text-primary" />} /> {drop &&
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  Open Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            }
          </div>
          <div className="md:flex flex-row items-center mx-auto gap-6">
            <Button color="primary" startContent={<Car />}>Procurar Carona</Button>
            <Button color="primary" startContent={<Car />}>Oferecer Carona</Button>
          </div>
        </div>
    )
}
"use client"
import { useState,useContext,useEffect,useCallback } from 'react'
import React from "react";
import {Navbar, NavbarBrand, NavbarItem, Progress, Image} from "@nextui-org/react";
import { AcmeLogo } from './components/AcmeLogo';
import ButtonComponent from './components/ButtonComponent';
import InputEmailComponent from './components/InputEmailComponent';
import InputPasswordComponent from './components/InputPasswordComponent';
//import imapsync from './execute'

export default function Home() {
  return (
    <main className="items-center bg-zinc-700	h-full justify-between">
      <div className="">
        <div className='h-full'>
      <Navbar className='bg-gray-500'>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ImapSync UMCC</p>
        </NavbarBrand>
        <NavbarItem>
          <Image
            width={50}
            alt="Email"
            src="https://www.idc-latinamerica.com/sites/default/files/2021-07/UMCC%20Logo.png"
          />    
        </NavbarItem>
      </Navbar>
        <div className='flex flex-auto self-auto justify-center space-x-40 p-8 mb-2'>
          <Image
            width={200}
            alt="Email"
            src="https://previews.123rf.com/images/rclassenlayouts/rclassenlayouts1208/rclassenlayouts120800129/14757898-email-3d-e-mail-senden-mensaje-en-buz%C3%B3n-de-contacto-de-soporte-mensaje-s%C3%ADmbolo-pictograma-signo.jpg"
          />
          <Image
            width={200}
            alt="Arrow"
            src="https://cdn.pixabay.com/photo/2014/03/25/16/59/right-297788_640.png"
          />
          <Image
            width={200}
            alt="Email"
            src="https://previews.123rf.com/images/rclassenlayouts/rclassenlayouts1208/rclassenlayouts120800129/14757898-email-3d-e-mail-senden-mensaje-en-buz%C3%B3n-de-contacto-de-soporte-mensaje-s%C3%ADmbolo-pictograma-signo.jpg"
          />
        </div>
        <InputEmailComponent/>
          <div className='flex flex-auto self-auto justify-center p-10'>
            <Progress
              size="lg"
              radius='lg'
              isIndeterminate
              aria-label="Loading..."
              className="max-w-md"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

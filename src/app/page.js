"use client"
import { useState,useContext,useEffect,useCallback } from 'react'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, Progress, Image} from "@nextui-org/react";
import { AcmeLogo } from './components/AcmeLogo';
//import imapsync from './execute'

export default function Home() {
  return (
    <main className="items-center justify-between">
      <div className="">
        <div className='h-full'>
      <Navbar className='bg-gray-400'>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ImapSync UMCC</p>
        </NavbarBrand>
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
          <div className='flex flex-auto self-auto justify-center space-x-60 p-10 mb-3'>
            <Input
              isRequired
              type="email"
              label="Email"
              defaultValue="usuario@umcc.cu"
              className="max-w-[350px]"
            />
            <Input
              isRequired
              type="password"
              label="password"
              defaultValue="password"
              className="max-w-[350px]"
            />
          </div>
          <div className='flex flex-auto self-auto justify-center'>
            <Button size='md'>Empezar</Button>
          </div>
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

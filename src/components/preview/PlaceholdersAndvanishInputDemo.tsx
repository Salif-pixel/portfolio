"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import React, {useState} from "react";
import emailjs from 'emailjs-com';




export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
  "Pour plus d'information, veuillez me contacter.",
  "Vous avez une question? Envoyez-moi un message!",
  "Besoin de plus de détails? Contactez-moi!",
  "Écrivez votre message ici...",
  "Comment puis-je vous aider? Laissez un message!",
];

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      to_name: email,
      message: message,
    };


        emailjs.send('service_nnut18f', 'template_e1h8rsy', templateParams, 'acUDvL6X31X77SrFI')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
        }, (error) => {
          console.log('Error sending email:', error.text);
        });

    console.log("submitted");
  };
  return (
      <div className="h-[40rem] relative flex flex-col justify-center mt-10 items-center px-4">
         
          <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
              Contactez moi
          </h2>
          <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  outline-none p-2 mb-4 border border-gray-300 rounded-full"
              required
          />
          <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={(e) => setMessage(e.target.value)}
              onSubmit={onSubmit}
          />

      </div>
  );
}

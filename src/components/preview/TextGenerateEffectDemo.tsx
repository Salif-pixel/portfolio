"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect.tsx";

const words = `Je suis Salif Biaye, un passionné de développement web/mobile. Mon objectif est de transformer des idées en expériences numériques captivantes. Avec une attention particulière aux détails et une approche centrée sur l'utilisateur.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}

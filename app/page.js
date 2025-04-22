"use client"

import Image from "next/image";
import { FaSearch } from 'react-icons/fa';
import { CiCirclePlus } from "react-icons/ci";
import Hero from "@/components/Hero";
import HarmonySection from "@/components/HarmonySection";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <>
    <Hero/>
    <HarmonySection/>
    <Third/>
    <Fourth/>
    <ProjectsSection/>
    </>
  );
}

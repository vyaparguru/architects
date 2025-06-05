"use client"
import Hero from "@/components/Hero";
import HarmonySection from "@/components/HarmonySection";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";
import HomeProjectsSection from "@/components/HomeProjects";


export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10">
        <Hero />
      </div>
      <div className="sticky top-0 z-20">
        <HarmonySection />
      </div>
      <div className="sticky top-0 z-30">
        <Third />
      </div>
      <div className="sticky top-0 z-40">
        <Fourth />
      </div>
      <div className="sticky top-0 z-50">
        <HomeProjectsSection />
      </div>
    </div>
  );
}
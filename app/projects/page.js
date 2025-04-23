"use client"

import ProjectsSection from '@/components/Projects'
import React from 'react'

export const Projects = () => {
    return (
        <>
            <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wide text-center">
                        Projects
                    </h1>
                </div>
            </div>
            <ProjectsSection />
        </>

    )
}

export default Projects;
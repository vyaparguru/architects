"use client"

import ProjectsSection from '@/components/Projects'
import Project1 from '@/components/Projects/Project1'
import Project10 from '@/components/Projects/Project10'
import Project11 from '@/components/Projects/Project11'
import Project2 from '@/components/Projects/Project2'
import Project3 from '@/components/Projects/Project3'
import Project4 from '@/components/Projects/Project4'
import Project5 from '@/components/Projects/Project5'
import Project6 from '@/components/Projects/Project6'
import Project7 from '@/components/Projects/Project7'
import Project8 from '@/components/Projects/Project8'
import Project9 from '@/components/Projects/Project9'
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
            <Project1/>
            <Project2/>
            <Project3/>
            <Project4/>
            <Project5/>
            <Project6/>
            <Project7/>
            <Project8/>
            <Project9/>
            <Project10/>
            <Project11/>
        </>

    )
}

export default Projects;
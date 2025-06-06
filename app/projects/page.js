"use client"

// import ProjectsSection from '@/components/HomeProjects'
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
            <div className="relative bg-cover bg-center h-[50vh] md:h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        Projects
                    </h1>
                </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold bg-amber-50 text-gray-900 md:text-center px-6 md:px-0 pt-16">
                Projects Completed
            </h2>
            <Project1 />
            <Project2 />
            <Project5 />
            <Project6 />
            <h2 className="text-4xl md:text-6xl font-semibold bg-amber-50 text-gray-900 md:text-center px-6 md:px-0 pt-10 ">
                Ongoing Projects
            </h2>
            <Project3 />
            <Project4 />
            <Project7 />
            <Project8 />
            <Project9 />
            <Project10 />
            <Project11 />
        </>

    )
}

export default Projects;
"use client"

import Project1 from '@/components/Projects/Project1'
import Project10 from '@/components/Projects/Project10'
import Project11 from '@/components/Projects/Project11'
import Project12 from '@/components/Projects/Project12'
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
        <div className="relative">
            <div className="sticky top-0 z-10"><Project1 /></div>
            <div className="sticky top-0 z-10"><Project2 /></div>
            <div className="sticky top-0 z-10"><Project5 /></div>
            <div className="sticky top-0 z-10"><Project6 /></div>
            <div className="sticky top-0 z-10"><Project3 /></div>
            <div className="sticky top-0 z-10"><Project4 /></div>
            <div className="sticky top-0 z-10"><Project7 /></div>
            <div className="sticky top-0 z-10"><Project8 /></div>
            <div className="sticky top-0 z-10"><Project9 /></div>
            <div className="sticky top-0 z-10"><Project10 /></div>
            <div className="sticky top-0 z-10"><Project11 /></div>
            <div className="sticky top-0 z-10"><Project12 /></div>
        </div>
    )
}

export default Projects;
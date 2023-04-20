import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <ul>
                <Link href="/"><li>Accueil</li></Link>
                <Link href="/skills"><li>Skills</li></Link>
                <Link href="/experience"><li>Experience</li></Link>
                <Link href="/projects"><li>Projects</li></Link>
                <Link href="/contact"><li>contact</li></Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
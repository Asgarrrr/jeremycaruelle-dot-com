"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"

import useSetTheme from "@/hooks/useSetTheme"

const ROUTES = {
  "/"           : "Home",
  "/writings"   : "Writings",
  "/projects"   : "Projects",
  "/crafts"     : "Crafts",
}

export default function Navbar() {

    const pathname = usePathname()
    const [ activeItem, setActiveItem ] = useState( 0 )

    const switchThemeRef = useRef<HTMLButtonElement>( null )
    const clickSoundRef = useRef<HTMLAudioElement | null>( null )

    const { handleViewTransition, isTransitioning } = useSetTheme()

    useEffect(() => {
        clickSoundRef.current = new Audio( "/click.mp3" )
    }, [])

    useEffect(() => {

        const basePath = `/${ pathname.split( "/" )[1] || "" }`
        setActiveItem( Object.keys( ROUTES ).indexOf( basePath ) )
    
    }, [ pathname ])

    const handleThemeSwitch = useCallback(() => {

        if ( isTransitioning || !clickSoundRef.current ) return
       
        clickSoundRef.current.currentTime = 0
        clickSoundRef.current.play()
       
        handleViewTransition({ ref: switchThemeRef })
    
    }, [ handleViewTransition, isTransitioning ])

    return (
        <motion.nav
            transition={{ type: "spring", bounce: .2, duration: .7, delay: .2 }}
            initial={{ y: 65, scale: .9 }}
            animate={{ y: 0, scale: 1 }}
            className="pointer-events-none fixed inset-x-0 bottom-0 mx-auto mb-4 flex h-11 z-50"
        >
            <ol className="overflow-y-hidden overflow-x-auto pointer-events-auto dark:bg-[rgba(33,33,33,.5)] bg-white relative p-2 flex justify-center items-center backdrop-blur-[24px] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.02),0_4px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_hsla(0,0%,100%,0.06)] rounded-lg mx-auto max-w-[calc(100vw-2rem)]">
                
                <AnimatePresence>
                    { Object.entries( ROUTES ).map( ( [ path, name ], i ) => (
                        <NavItem key={ path } path={ path } name={ name } isActive={ i === activeItem } />
                    ))}
                </AnimatePresence>
                
                <div className="w-[1px] mx-3 h-5 flex items-center bg-gray-4" />
        
                <button
                    ref={ switchThemeRef }
                    className="size-4 flex items-center justify-center bg-gray-10 rounded-md mr-2 hover:bg-gray-11 hover:scale-110 transition-all duration-500"
                    onClick={ handleThemeSwitch }
                    aria-label="Switch theme"
                />
            </ol>
        </motion.nav>
    )
}

interface NavItemProps {
    path: string
    name: string
    isActive: boolean
}

function NavItem({ path, name, isActive }: NavItemProps) {
    
    return (
        <li>
            <Link
                href={ path }
                className="block px-4 py-1.5 font-base text-sm relative data-[active]:text-gray-12 transition-colors"
                data-active={ isActive }
            >
                { isActive && (
                    <motion.div
                        className="absolute inset-0 bg-gray-4 rounded-md -z-10"
                        layoutId="activeNavItem"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        initial={ false }
                    />
                )}
                { name }
            </Link>
        </li>
    )

}
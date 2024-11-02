"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import useSetTheme from '@/hooks/useSetTheme'


const items = {
  '/': 'Home',
  '/writings': 'Writings',
  '/crafts': 'Crafts',
  '/projects': 'Projects',
}

export default function Navbar() {

    const pathname = usePathname()
    const [ activeItem, setActiveItem ] = useState( 0 )

    const switchTheme   = useRef( null )
        , clickSound    = useRef( new Audio( "/click.mp3" ) )


    useEffect(() => {
        const basePath = pathname.split('/')[1] ? `/${pathname.split('/')[1]}` : '/'
        setActiveItem(Object.keys(items).indexOf(basePath))
    }, [pathname])

    const { handleViewTransition } = useSetTheme( )

    return (
        <nav className="pointer-events-none fixed inset-x-0 bottom-0 mx-auto mb-4 flex h-12 z-50">
            <ol className="overflow-y-hidden overflow-x-auto pointer-events-auto dark:bg-[rgba(33,33,33,.5)] bg-white relative p-2 flex justify-center items-center backdrop-blur-[24px] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.02),0_4px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_hsla(0,0%,100%,0.06)] rounded-lg mx-auto max-w-[calc(100vw-2rem)]">
                <AnimatePresence>
                    { Object.entries(items).map( ( [ path, name ], i ) => {
                        const isActive = i === activeItem
                        return (
                            <motion.li
                                key={path}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}    
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                            >
                                <Link
                                    href={ path }
                                    className={ `block px-4 py-2 rounded-full text-sm font-medium relative data-[active]:text-gray-12` }
                                    data-active={ isActive }
                                >
                                { isActive && (
                                    <motion.div
                                        className="absolute inset-0 bg-gray-3 rounded-md -z-10"
                                        layoutId="activeNavItem"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        initial={ false }
                                    />
                                )}
                                    { name }
                                </Link>
                            </motion.li>
                        )
                    })}
                </AnimatePresence>
                <div className="w-[1px] mx-3 h-5 flex items-center bg-gray-6" />
                <button className="size-4 flex items-center justify-center bg-gray-6 rounded-md mr-2"
                    ref={ switchTheme }
                    // cursor-pointer select-none p-2 m-3 ml-[16px] mr-[8px] mb-[14px] mt-[13px] relative hover:border-3 size-4 rounded-md dark:bg-neutral-400 bg-neutral-700
                    onClick={ () => {
                        clickSound.current.play()
                        handleViewTransition({ ref: switchTheme })
                    } }
                />
            </ol>
        </nav>
    )
}
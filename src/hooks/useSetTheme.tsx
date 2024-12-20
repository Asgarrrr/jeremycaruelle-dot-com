"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom";
import { useViewTransition } from "@/components/view-transitions";

export default function useSetTheme( ) {

    const { theme, setTheme } = useTheme();
	const [ isThumbnail, setIsThumbnail ] = useState( false );
	const { setIsTransitioning } = useViewTransition();
	
    async function handleViewTransition({ ref }: { ref: React.RefObject<HTMLElement> }) {

        if (
            !ref.current ||
			!document.startViewTransition ||
			window.matchMedia( "(prefers-reduced-motion: reduce)" ).matches
		)
			return setTheme( theme === "light" ? "dark" : "light" );
		
		setIsTransitioning( true );
        
		await document.startViewTransition(() => {
			flushSync(() => {
				setIsThumbnail( !isThumbnail );
				setTheme( theme === "light" ? "dark" : "light" );
			});
		}).ready
		
        const { top, left, width, height } = ref.current.getBoundingClientRect();
		
        const x         = left + width / 2
		    , y         = top + height / 2
		    , right     = window.innerWidth - left
		    , bottom    = window.innerHeight - top;

		const maxRadius = Math.hypot( Math.max( left, right ), Math.max( top, bottom ) );

        document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${ x }px ${ y }px)`,
					`circle(${ maxRadius }px at ${ x }px ${ y }px)`,
				],
			},
			{
				duration: 500,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
				composite: "replace",
			}
		);

		setTimeout(() => {
			setIsTransitioning( false );
		}, 500 );
    }

    return { theme, setTheme, isThumbnail, handleViewTransition };

}
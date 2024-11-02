"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom";

export default function useSetTheme( ) {

    const { theme, setTheme } = useTheme();
	const [ isThumbnail, setIsThumbnail ] = useState( false );
    const [ transition, setTransition ] = useState( false );

    async function handleViewTransition({ ref }: { ref: React.RefObject<HTMLElement> }) {

        if (
            !ref.current ||
            // @ts-expect-error - startViewTransition is not yet in the types for document
			!document.startViewTransition ||
			window.matchMedia( "(prefers-reduced-motion: reduce)" ).matches
		) {
			return;
		} else 

        // @ts-expect-error - startViewTransition is not yet in the types for document
        if ( !transition ) await document.startViewTransition(() => {
			flushSync(() => {
                setTransition( true );
				setIsThumbnail( !isThumbnail );
				setTheme(theme === "light" ? "dark" : "light");
			});
		}).ready;

        setTransition( false );

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

    }

    return { theme, setTheme, isThumbnail, transition, handleViewTransition };

}
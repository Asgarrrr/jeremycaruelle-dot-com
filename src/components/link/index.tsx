"use client";

import { Link as NextLink, useTransitionRouter } from "next-view-transitions";
import { cn } from "@/lib/cn";

export interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    prefetch?: boolean;
    showExternalIcon?: boolean;
}

export default function Link( {
    href             = "#",
    prefetch         = true,
    showExternalIcon = true,
    className,
    children,
    ...props
}: CustomLinkProps ) {

    const router     = useTransitionRouter()
        , isExternal = href.startsWith( "http" );

    const handleClick = ( e: React.MouseEvent<HTMLAnchorElement> ) => {

        if ( isExternal ) 
            return;

        e.preventDefault()
        router.push( href )

    }
    
    return (
        <span className="link">
            <NextLink
                href={ href }
                onClick={ handleClick }
                prefetch={ !isExternal && prefetch }
                target={ isExternal ? "_blank" : undefined }
                rel={ isExternal ? "noopener noreferrer" : undefined }
                className={ cn( className ) }
                { ...props }
            >
                { children }
            </NextLink>
            { isExternal && showExternalIcon && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block size-4"
                    aria-hidden="true"
                >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            )}
        </span>
    )
}
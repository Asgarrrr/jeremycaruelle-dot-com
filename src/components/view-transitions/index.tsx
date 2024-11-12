"use client"

import { cn } from "@/lib/cn";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export const ViewTransitionContext = createContext({
    isTransitioning: false,
    setIsTransitioning: (isTransitioning: boolean) => {},
});

export const useViewTransition = () => {
    return useContext(ViewTransitionContext);
};

export const ViewTransitionProvider = ({ children }: { children: ReactNode }) => {
    
    const [ isTransitioning, setIsTransitioning ] = useState(false);

    return (
        <ViewTransitionContext.Provider value={{
            isTransitioning, 
            setIsTransitioning 
        }}>
            <div className={ isTransitioning ? "" : "page-transition" }>
                { children }
            </div>
        </ViewTransitionContext.Provider>
    );
}
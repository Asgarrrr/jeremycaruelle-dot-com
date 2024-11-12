import { AppThemeProvider } from "@/components/theme";
import { ViewTransitions as GlobalViewTransitions } from "next-view-transitions";
import { ViewTransitionProvider } from "@/components/view-transitions"

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <GlobalViewTransitions>
            <AppThemeProvider>
                { children }
            </AppThemeProvider>
        </GlobalViewTransitions>
    );
};
import type { Metadata } from "next";

import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
    title: "Worklist",
    description: "This is simple worklist on nextjs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}

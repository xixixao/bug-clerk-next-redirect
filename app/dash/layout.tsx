import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <ClerkProvider>{children}</ClerkProvider>
    </Suspense>
  );
}

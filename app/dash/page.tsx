"use client";

import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Dash() {
  return (
    <ClerkProvider>
      <UserButton afterSignOutUrl="/" />
    </ClerkProvider>
  );
}

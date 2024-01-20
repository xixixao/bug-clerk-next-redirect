"use client";

import { UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Private() {
  return (
    <Suspense>
      <UserButton afterSignOutUrl="/" />
    </Suspense>
  );
}

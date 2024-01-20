"use client";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <ClerkProvider>
        <SignedIn>
          <Link href="/dash">dashboard</Link>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" redirectUrl="/foobar/dash" />
          <SignUpButton mode="modal" redirectUrl="/foobar/dash" />
        </SignedOut>
      </ClerkProvider>
    </Suspense>
  );
}

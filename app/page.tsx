"use client";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <ClerkProvider>
      <SignedIn>
        <Link href="/dash">dashboard</Link>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" redirectUrl="/foobar/dash" />
        <SignUpButton mode="modal" redirectUrl="/foobar/dash" />
      </SignedOut>
    </ClerkProvider>
  );
}

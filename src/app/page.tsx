import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
            <SignInButton mode="modal">
              <Button>
                Sign in
              </Button>
            </SignInButton>
      </SignedOut>
      <SignedIn>
              <UserButton />
      </SignedIn>
    </div>
  );
}

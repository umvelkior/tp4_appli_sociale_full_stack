import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";

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
      <ModeToggle/>
      <SignedIn>
              <UserButton />
      </SignedIn>
    </div>
  );
}

import { Sheet, SheetContent, SheetTrigger } from "@/global/shadcn/ui/sheet";
import NavbarLinks from "./NavbarLinks";
import { Button } from "@/global/shadcn/ui/button";
import { FaGripLines } from "react-icons/fa";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button role="button" variant={"ghost"} className="lg:hidden">
          <FaGripLines />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-auto px-1">
        <NavbarLinks open={open} />
      </SheetContent>
    </Sheet>
  );
}

"use client";

import React, { useState } from "react";
import { Dialog, DialogContent } from "@/global/shadcn/ui/dialog";
import { OTPFrame } from "../otpFrame/OtpFrame";
import { SignInFrame } from "../signInFrame/SignInFrame";

export function AuthDialog({
  dialogOpen,
  setDialogOpen,
}: {
  dialogOpen: boolean;
  setDialogOpen: (value: boolean) => any;
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent>
        {phoneNumber ? (
          <OTPFrame
            phoneNumber={phoneNumber}
            onSuccess={() => {
              location.reload();
            }}
          />
        ) : (
          <SignInFrame
            onSuccess={(_phoneNumber) => {
              setPhoneNumber(_phoneNumber);
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useState } from "react";
import { useAgeVerificationStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export function AgeVerification() {
  const { setAgeVerified, checkVerification } = useAgeVerificationStore();
  const [showWarning, setShowWarning] = useState(false);

  // Check if verification is still valid
  const isVerified = checkVerification();

  if (isVerified) {
    return null;
  }

  const handleYes = () => {
    setAgeVerified(true);
  };

  const handleNo = () => {
    setShowWarning(true);
  };

  return (
    <Dialog open={!isVerified} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Age Verification Required</DialogTitle>
        </DialogHeader>
        {showWarning ? (
          <div className="text-red-500 font-semibold text-sm">
            You must be over the age of 21 to view this site.
          </div>
        ) : (
          <DialogDescription>Are you over the age of 21?</DialogDescription>
        )}
        <DialogFooter className="flex justify-center gap-4 sm:justify-center">
          <Button
            variant="default"
            onClick={handleYes}
            className="min-w-[100px]"
          >
            Yes
          </Button>
          <Button
            variant="outline"
            onClick={handleNo}
            className="min-w-[100px]"
          >
            No
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AgeVerificationState {
  isAgeVerified: boolean;
  verificationTimestamp: number | null;
  setAgeVerified: (verified: boolean) => void;
  checkVerification: () => boolean;
}

const VERIFICATION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export const useAgeVerificationStore = create<AgeVerificationState>()(
  persist(
    (set, get) => ({
      isAgeVerified: false,
      verificationTimestamp: null,
      setAgeVerified: (verified) =>
        set({
          isAgeVerified: verified,
          verificationTimestamp: verified ? Date.now() : null,
        }),
      checkVerification: () => {
        const state = get();
        if (!state.isAgeVerified || !state.verificationTimestamp) {
          return false;
        }

        const now = Date.now();
        const isExpired =
          now - state.verificationTimestamp > VERIFICATION_DURATION;

        if (isExpired) {
          set({ isAgeVerified: false, verificationTimestamp: null });
          return false;
        }

        return true;
      },
    }),
    {
      name: "age-verification-storage",
    }
  )
);

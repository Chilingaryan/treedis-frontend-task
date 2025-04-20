import { create } from "zustand";

interface IRegisterData {
  email: string;
  password: string;
}

export type Step = 1 | 2;

interface RegistrationStore {
  step: Step;
  data: IRegisterData;
  setStep: (step: Step) => void;
  setData: (data: IRegisterData) => void;
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  step: 1,
  data: { email: "", password: "" },
  setStep: (step) => set({ step }),
  setData: (data) => set({ data }),
}));

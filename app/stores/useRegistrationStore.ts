import { FullRegisterForm } from "@/admin/register/schema";
import { create } from "zustand";

export type Step = 1 | 2;

interface RegistrationStore {
  step: Step;
  data: FullRegisterForm;
  setStep: (step: Step) => void;
  setData: (data: Partial<FullRegisterForm>) => void;
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  step: 1,
  data: {
    company: "",
    confirmPassword: "",
    country: "",
    email: "",
    employees: "",
    firstName: "",
    heardFrom: "",
    isProvider: "",
    jobDescription: "",
    lastName: "",
    password: "",
    phone: "",
    website: "",
    industry: "",
    spaces: "",
    subscribe: false,
    terms: false,
  },
  setStep: (step) => set({ step }),
  setData: (partialData) =>
    set((state) => ({
      data: {
        ...state.data,
        ...partialData,
      },
    })),
}));

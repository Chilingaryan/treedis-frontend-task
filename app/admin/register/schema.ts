import * as yup from "yup";
import { TFunction } from "i18next";
import { passwordSchema } from "@/utils/common-schemes";

export const getRegisterSchema = (t: TFunction, step: 1 | 2) => {
  switch (step) {
    case 1: {
      return yup.object({
        firstName: yup.string().max(30).required(),
        lastName: yup.string().max(30).required(),
        email: yup
          .string()
          .email("Invalid email")
          .required("Email is required"),
        password: passwordSchema(t),
        confirmPassword: yup
          .string()
          .required("Confirm your password")
          .oneOf([yup.ref("password")], "Passwords must match"),
      });
    }
    case 2: {
      return yup.object({
        email: yup.string().email("Invalid email").required("Required"),
        company: yup.string().required("Required"),
        phone: yup.string().required("Required"),
        country: yup.string().required("Required"),
        heardFrom: yup.string().required("Required"),
        isProvider: yup.string().required("Select Yes or No"),

        spaces: yup.string().when("isProvider", {
          is: "true",
          then: (schema) => schema.required("Required when provider is true"),
          otherwise: (schema) => schema.notRequired(),
        }),

        industry: yup.string().when("isProvider", {
          is: (val: string) => val !== "true",
          then: (schema) => schema.required("Required when provider is false"),
          otherwise: (schema) => schema.notRequired(),
        }),

        employees: yup.string().required("Required"),
        jobDescription: yup.string().required("Required"),
        website: yup.string().required("Required"),
        subscribe: yup.boolean(),
        terms: yup.boolean().oneOf([true], "You must agree to the terms"),
      });
    }
    default: {
      return yup.object({});
    }
  }
};

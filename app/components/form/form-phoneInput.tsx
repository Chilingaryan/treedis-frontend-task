import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Box, TextFieldProps } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type FormPhoneInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
} & Omit<TextFieldProps, "name" | "control" | "defaultValue">;

export function FormPhoneInput<T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  ...props
}: FormPhoneInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "Phone number is required" }}
      render={({ field, fieldState }) => (
        <Box className="phone-wrapper">
          <PhoneInput
            inputStyle={{
              height: 45,
              width: "100%",
              color: "var(--foreground)",
              background: "transparent",
            }}
            country="us"
          />
        </Box>
      )}
    />
  );
}

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Box, FormHelperText, TextFieldProps } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type FormPhoneInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
} & Omit<TextFieldProps, "name" | "control" | "defaultValue">;

export function FormPhoneInput<T extends FieldValues>({
  name,
  control,
  label,
  ...props
}: FormPhoneInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "Phone number is required" }}
      render={({ field, fieldState }) => (
        <Box>
          <label>{label}</label>

          <PhoneInput
            {...props}
            country="us"
            value={field.value}
            onChange={(phone) => field.onChange(phone)}
            inputStyle={{
              height: 45,
              width: "100%",
              color: "var(--foreground)",
              background: "transparent",
              borderColor: fieldState.error ? "#d32f2f" : "#ccc",
            }}
            inputProps={{
              name: field.name,
              onBlur: field.onBlur,
            }}
          />

          {fieldState.error && (
            <FormHelperText error>{fieldState.error.message}</FormHelperText>
          )}
        </Box>
      )}
    />
  );
}

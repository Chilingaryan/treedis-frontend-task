import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import i18n from "@/translations/i18n";
import { isRtl } from "@/utils/language";

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
} & Omit<TextFieldProps, "name" | "control" | "defaultValue">;

export function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  ...props
}: FormInputProps<T>) {
  const [showPassword, setShowPassword] = useState(type !== "password");

  const is = isRtl(i18n.language);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          defaultValue=""
          fullWidth
          margin="normal"
          label={label}
          type={showPassword ? "text" : "password"}
          variant="outlined"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          slotProps={
            type === "password"
              ? {
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }
              : {}
          }
          {...props}
        />
      )}
    />
  );
}

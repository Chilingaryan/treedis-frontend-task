import { JSX } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextFieldProps,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type FormCheckboxProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: JSX.Element | string;
  type?: string;
} & Omit<TextFieldProps, "name" | "control" | "defaultValue">;

export function FormCheckbox<T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  ...props
}: FormCheckboxProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error}>
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label={label}
          />
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

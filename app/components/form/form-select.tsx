import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextFieldProps,
} from "@mui/material";

type FormSelectProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: string[];
  type?: string;
} & Omit<TextFieldProps, "name" | "control" | "defaultValue">;

export function FormSelect<T extends FieldValues>({
  name,
  control,
  label,
  options,
  type = "text",
}: FormSelectProps<T>) {
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field, fieldState }) => (
        <FormControl fullWidth margin="normal" error={!!fieldState.error}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label}>
            {options.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

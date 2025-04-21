import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
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
}: FormSelectProps<T>) {
  return (
    <Controller
      name={name}
      defaultValue={"" as PathValue<T, Path<T>>}
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

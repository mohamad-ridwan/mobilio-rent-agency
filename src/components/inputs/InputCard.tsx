import { Input } from "@/components/ui/input";
import { ChangeEventHandler } from "react";

interface Props {
  label?: string;
  id?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  type?: string;
}

import {
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function InputCard({
  label,
  id,
  placeholder,
  onChange,
  value,
  type,
}: Props) {
  return (
    <FormItem>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormControl id={id}>
        <Input
          id={id}
          name={id}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

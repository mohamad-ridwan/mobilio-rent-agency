import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectOptions } from "@/types/forms";
import {
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface SelectCardProps {
  label: string;
  id: string;
  placeholder?: string;
  options: SelectOptions[];
  onValueChange?: (value: string) => void;
  value?: string;
}

export function SelectCard({
  label,
  id,
  placeholder,
  options,
  onValueChange,
  value,
}: SelectCardProps) {
  return (
    <FormItem>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select onValueChange={onValueChange} defaultValue={value}>
        <FormControl id={id}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}

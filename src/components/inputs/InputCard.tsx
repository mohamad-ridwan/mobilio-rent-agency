import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  label?: string;
  id?: string;
  placeholder?: string;
}

export default function InputCard({ label, id, placeholder }: Props) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} />
    </div>
  );
}

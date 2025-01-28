import { Rating } from "@smastrom/react-rating";
import { Controller } from "react-hook-form";
import "@smastrom/react-rating/style.css";

type Props = {
  form: any;
  name: string;
  [key: string]: any;
};

export default function TStareRate({ form, name, ...props }: Props) {
  return (
    <Controller
      name={name}
      control={form?.control}
      defaultValue={3}
      render={({ field }) => {
        const { onChange, value, ...fieldProps } = field;
        return (
          <Rating
            style={{ maxWidth: 180 }}
            value={value}
            onChange={(selectedValue: any) => onChange(selectedValue)}
            transition="zoom"
            {...props}
            {...fieldProps}
          />
        );
      }}
    />
  );
}

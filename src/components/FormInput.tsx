import InputMask from "react-input-mask";

type FormInputProps = {
  id?: string;
  mask?: string | (string | RegExp)[];
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
};

export default function FormInput(
  {
    id,
    mask,
    label,
    placeholder,
    value,
    setValue,
    className,
  }: FormInputProps = {
    id: String(Math.random()),
    mask: "",
    label: "",
    placeholder: "",
    value: "",
    setValue: (value: string) => {},
    className: "",
  }
) {
  return (
    <div className={className}>
      <div className="form-input-label">{label}</div>
      <InputMask
        id={id}
        mask={mask ?? ""}
        maskChar={null}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        className="form-input"
      />
    </div>
  );
}

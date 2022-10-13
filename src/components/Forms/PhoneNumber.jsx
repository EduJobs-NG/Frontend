import PhoneInput from "react-phone-number-input";
import { useField } from "formik";
const input_phone = "border   border-solid border-[#808080] rounded-lg outline-none"

export const PhoneNumber = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div  label={label} meta={meta} {...props}>
      <PhoneInput
        {...props}
        {...field}
        value={field.value}
        defaultCountry="NG"
        onChange={(value) => {
          helpers.setValue(value);
        }}
        className={input_phone}
      />
    </div>
  );
};


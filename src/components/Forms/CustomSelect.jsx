
import { useField } from "formik";

const CustomSelect = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={className}
      />
      {meta.touched && meta.error && <div className="text-red-600">{meta.error}</div>}

    </>
  );
};
export default CustomSelect;
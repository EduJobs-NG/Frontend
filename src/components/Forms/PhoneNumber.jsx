import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
export const PhoneNumber = ({ label, ...props }) => {

  return (
    <div>
    <label htmlFor="phone_number">Phone Number</label>
    <PhoneInput
      inputProps={{
        name: "phone_number",
        // required: true,
        // autoFocus: true,
      }}
      // containerClass="phone_number_style"
      country={"ng"}
      value={formik.values.phone_number}
      onChange={(event) => {
        formik.setFieldValue("phone_number", event);
      }}
    />
    {formik.touched.phone_number && formik.errors.phone_number ? (
      <small className="text-red-600">
        {formik.errors.phone_number}
      </small>
    ) : null}
  </div>
  );
};


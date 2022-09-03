import * as Yup from "yup";
export const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(8, "Enter your password").required("Required"),
  });

  export const RegistrationSchema = Yup.object({
    first_name: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
    last_name: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
    email: Yup.string().email("Invalid email address").required('Required'),
    password: Yup.string().min(8).required('Required').matches(
        /^(?=.*[a-z])(?=.*[0-9])/,
        "Must Contain 8 Characters of letters & numbers"
    ),
    re_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    acceptedTos: Yup.boolean().oneOf([true], "Please accept the terms and conditions")
})

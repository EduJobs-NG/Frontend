// import * as $ from 'yup';

// export const login = $.object({
//     email: $.string().email("Invalid email address").required("Required"),
//     password: $.string().password("Enter your password").required("Required"),
// });

// export const register = $.object({
//     email: $.string().email("Invalid email address").required("Required"),
//     acceptedTos: $.boolean().oneOf([true], "Please accept the terms and conditions"),
//     first_name: $.string().max(15, 'Must be 15 characters or less').required('Required'),
//     lasst_name: $.string().max(15, 'Must be 15 characters or less').required('Required'),
//     re_password: $.string().oneOf([$.ref('password'), null], 'Passwords must match').required('Required'),
//     password: $.string().min(8).required("Required").matches(/^(?=.*[a-z])(?=.*[0-9])/, "Must Contain 8 Characters of letters & numbers"),
// });

import * as yup from 'yup';

const contactSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
        .string()
        .matches(
            /^(\+?[0-9]{1,3})?[-. (]*[0-9]{3,4}[-. )]*[0-9]{3,4}[-. ]*[0-9]{3,4}$/,
            "Enter a valid phone number"
        )
        .min(4, "Phone must be at least 4 digits")
        .max(20, "Phone must not exceed 20 characters")
        .required("Phone is required"),
    message: yup.string(),
});

export default contactSchema;

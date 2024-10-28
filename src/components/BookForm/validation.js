import * as yup from "yup";

export const getValidation = (t) => {
  return yup.object().shape({
    name: yup.string().min(3, t("tooShort")).required(t("required")),
    email: yup
      .string()
      .min(3, t("tooShort"))
      .email(t("invalidEmail"))
      .required(t("required")),
    date: yup
      .string()
      .matches(
        /^\d{2}\/\d{2}\/\d{4}$/g,
        "Invalid date format (example: DD/MM/YYYY)",
      )
      .required(t("required")),
    comment: yup.string().min(3, t("tooShort")),
  });
};

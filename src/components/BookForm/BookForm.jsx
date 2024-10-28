import styles from "./bookForm.module.scss";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { Button, Input, DateInput } from "components";
import { useTranslation } from "react-i18next";
import { getValidation } from "./validation.js";

const BookForm = () => {
  const { t } = useTranslation();

  const handleSubmit = (values, actions) => {
    toast.success("Thanks for your request! We will contact you soon.");
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", date: "", comment: "" }}
      onSubmit={handleSubmit}
      validationSchema={getValidation(t)}
    >
      {() => {
        return (
          <Form className={styles.form}>
            <h3 className={styles.title}>{t("bookNow")}</h3>
            <p className={styles.subtitle}>{t("stayConnected")}</p>

            <div className={styles.fields}>
              <Input name="name" placeholder={t("name")} />
              <Input name="email" placeholder={t("email")} />
              <DateInput name="date" placeholder={t("bookingDate")} />
              <Input
                name="comment"
                placeholder={t("comment")}
                type="textarea"
              />
            </div>

            <Button type="submit" className={styles.submit}>
              {t("send")}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export { BookForm };

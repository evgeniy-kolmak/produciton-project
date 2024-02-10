import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return <div>{t("Информация о нас")}</div>;
}

export default About;

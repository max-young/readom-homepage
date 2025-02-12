import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
// import { Button } from "@headlessui/react";
import { FcAndroidOs } from "react-icons/fc";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container max-w-xl space-y-4">
      <div className="my-8 flex items-end">
        <h1>Readom</h1>
        <button
          className="btn btn-xs mx-4"
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
          }}
        >
          {i18n.language === "en" ? "中文" : "English"}
        </button>
      </div>
      <div className="text-left space-y-2">
        <p>{t("about 1")}</p>
        <p>{t("about 2")}</p>
        <p>{t("about 3")}</p>
        <p>{t("about 4")}</p>
        <p>{t("about 5")}: alvysurvey@gmail.com</p>
      </div>
      <div className="text-left space-y-2">
        <p className="font-bold">{t("download")}:</p>
        <a href="https://github.com/max-young/readom-homepage/releases/download/v1.0.0/readom-latest.apk">
          <FcAndroidOs size={32} />
        </a>
      </div>
    </div>
  );
}

export default App;

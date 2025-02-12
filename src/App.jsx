import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
// import { Button } from "@headlessui/react";
import { FcAndroidOs } from "react-icons/fc";
import readomIcon from "/readom.jpg";
import readom1 from "/readom1.jpg";
import readom2 from "/readom2.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container grid lg:grid-cols-2 gap-8">
      <div>
        <div className="my-8 flex items-end">
          <img src={readomIcon} alt="readom1" className="w-10 rounded-full mr-4" />
          <p className="text-4xl">Readom</p>
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
          <p>{t("description")}</p>
          <div className="divider"></div>
          <p>{t("about 1")}</p>
          <p>{t("about 2")}</p>
          <p>{t("about 3")}</p>
          <p>{t("about 4")}</p>
          <p>{t("about 5")}</p>
        </div>
        <div className="text-left space-y-2 mt-4">
          <p className="font-bold">{t("download")}:</p>
          <a href="https://github.com/max-young/readom-homepage/releases/download/v1.0.0/readom-latest.apk">
            <FcAndroidOs size={32} />
          </a>
        </div>
      </div>
      <div className="flex space-x-2 p-4">
        <img src={readom1} alt="readom1" className="max-w-1/2" />
        <img src={readom2} alt="readom2" className="max-w-1/2" />
      </div>
    </div>
  );
}

export default App;

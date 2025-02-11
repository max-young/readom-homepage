import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Button } from "@headlessui/react";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <h1>{t("welcome")}</h1>
      </div>
      <div>
        <img src={viteLogo} alt="Vite logo" />
      </div>
      <div className="card">
        <Button
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
          }}
        >
          {i18n.language === "en" ? "中文" : "English"}
        </Button>
      </div>
    </div>
  );
}

export default App;

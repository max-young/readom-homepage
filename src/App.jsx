import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("welcome")}</h1>
      <div className="card">
        <button
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
          }}
        >
          {i18n.language === "en" ? "中文" : "English"}
        </button>
        <p className="text-cs">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

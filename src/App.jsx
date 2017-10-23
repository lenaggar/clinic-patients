import React from "react";
import { Provider } from "react-redux";
// import { IntlProvider, addLocaleData } from "react-intl";
// import en from "react-intl/locale-data/en";
// import fr from "react-intl/locale-data/fr";
import configureStore from "./store";
import routes from "./routes";
// import localeData from "./../dist/locals/data.json";

// addLocaleData([...en, ...fr]);

// const language =
//   (navigator.languages && navigator.languages[0]) ||
//   navigator.language ||
//   navigator.userLanguage;

// const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// const messages =
//   localeData[languageWithoutRegionCode] ||
//   localeData[language] ||
//   localeData.en;

const store = configureStore();

const App = () => <Provider store={store}>{routes}</Provider>;

/* <IntlProvider locale={language} messages={messages}>
</IntlProvider> */

export default App;

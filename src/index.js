import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const language = window.navigator.language || navigator.browserLanguage;

const selectMessages = () => {
    if (language === "en") {
        return localeEnMessages;
    } else {
        return localeEsMessages;
    }
}

ReactDOM.render(
    <IntlProvider locale={language} messages={selectMessages()}>
        <JobsList />
    </IntlProvider>, 
    document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "./components/app/AppContainer";
import { scoreDocumentWords } from './tatch/tatch';
import hamletAct1 from './tatch/hamlet-act-1.txt';

const App = AppContainer;
scoreDocumentWords(hamletAct1, false, true);


ReactDOM.render(<App />, document.getElementById("app"));

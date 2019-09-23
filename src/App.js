import React from "react";
import { Admin, Resource } from "react-admin";
import userResource from "./resources/user";
import leadResource from "./resources/lead";
import leadtypeResource from "./resources/leadtype";
import roleResource from "./resources/role";
import backgroundResource from "./resources/background";
import photographResource from "./resources/photograph";
import eventResource from "./resources/event";
import languageResource from "./resources/language";
import {ParseAuth, ParseClient} from 'ra-data-parse';
import Layout from './layout.js';
import Routes from "./pages/routes.js";

const parseConfig = {
    URL: process.env.REACT_APP_PARSE_URL,
    JAVASCRIPT_KEY: process.env.REACT_APP_JAVASCRIPT_KEY,
    APP_ID: process.env.REACT_APP_APP_ID
}

export function initializeParse(Parse){
  Parse.initialize(process.env.REACT_APP_APP_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
  Parse.serverURL = process.env.REACT_APP_PARSE_URL;

};

export const dataProvider = ParseClient(parseConfig);
const authProvider = ParseAuth(parseConfig);
function App() {
return (
  <Admin dataProvider={dataProvider} authProvider={authProvider} appLayout={Layout} customRoutes={Routes}>
    <Resource {...userResource}  />
    <Resource {...leadtypeResource}  />
    <Resource {...roleResource}  />
    <Resource {...leadResource}  />
    <Resource {...backgroundResource}  />
    <Resource {...eventResource}  />
    <Resource {...languageResource}  />
    <Resource {...photographResource}  />
  </Admin>
);
}

export default App;
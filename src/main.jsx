import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { CookiesProvider } from "react-cookie";
import React from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
          </Provider>
        </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
);

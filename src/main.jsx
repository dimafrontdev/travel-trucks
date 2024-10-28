import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";

import "./i18n";
import "./index.css";
import "modern-normalize";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <Toaster position="top-right" />
    </PersistGate>
  </Provider>,
);

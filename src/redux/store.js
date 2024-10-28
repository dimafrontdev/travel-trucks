import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./catalog/index.js";
import { filtersReducer } from "src/redux/filters/index.js";
import { favoritesReducer } from "src/redux/favorites/slice.js";

const persistFavoritesConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(persistFavoritesConfig, favoritesReducer),
    catalog: catalogReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

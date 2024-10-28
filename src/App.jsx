import { Route, BrowserRouter, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { BaseLayout, Loader } from "components";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const TruckDetails = lazy(() => import("./pages/TruckDetails/TruckDetails"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<TruckDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

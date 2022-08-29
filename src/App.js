import { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./data/routesData";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.to} path={route.to} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

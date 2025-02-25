import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateDishAPIForm from "./pages/CreateDishAPIForm";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./HomePage";
import DishAPIList from "./pages/DishApiList";
import "./assets/style.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/create-api" element={<CreateDishAPIForm />} />
        <Route path="/edit-api/:id" element={<CreateDishAPIForm />} />{" "}
        <Route path="/dish-api-list" element={<DishAPIList />} />
      </Routes>
    </Router>
  );
};

export default App;

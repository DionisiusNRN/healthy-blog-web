import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Workout from "./components/Workout/Workout";
import Meal from "./components/Meal/Meal";
import Count from "./components/Count/Count";
import Education from "./components/Education/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                </>
              }
            />
            <Route path="/workout" element={<Workout />} />
            <Route path="/meal" element={<Meal />} />
            <Route path="/count" element={<Count />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;

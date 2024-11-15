import { Route, Routes, useLocation } from "react-router-dom";
import AllPost from "./pages/AllPost";
import Layout from "./components/layout/Layout";
import CreatePost from "./pages/CreatePost";
import History from "./pages/History";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AllPost />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/history" element={<History />} />
      </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;


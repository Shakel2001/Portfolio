import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "./components/ToastContainer"; // ✅ Add this

function App() {
  return (
    <>
      <BrowserRouter>
        {/* ✅ Place ToastContainer outside <Routes> so it works globally */}
        <ToastContainer />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { Home } from "./pages/Home";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import { NotFound } from "./pages/NotFound";
// import { ToastContainer } from "./components/ToastContainer";

// function App() {

//   return <>
//   <BrowserRouter>
//   <Routes>
//     <Route index element={<Home/>}/>
//     <Route path="*" element={<NotFound/>}/>
//   </Routes>
//   </BrowserRouter>
//   </>;
  
// }

// export default App

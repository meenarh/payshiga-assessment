import {
  Routes,
  BrowserRouter,
} from "react-router-dom";
import GetAdminRoutes from "./routes/admin-routes";


function App() {
  return <BrowserRouter>
    <Routes>
      {GetAdminRoutes()}
    </Routes>
  </BrowserRouter>;
}

export default App;

import { Route } from "react-router-dom";
import Layout from "@/layout";
import Home from "@/pages/Home";

export default function GetAdminRoutes() {
  return (
    <>
      <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
      </Route>
    </>
  );
}

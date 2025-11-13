import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./src/pages/home";
import NavHeader from "./src/components/NavHeader";
import ProjectSobre from "./src/pages/produtos";
import { LoginPage } from "./src/components/Login";
import { AdminPage } from "./src/pages/admin";
import { AdministrativoPage } from "./src/pages/administrativo";
import PaymentsPage from "./src/pages/payments";
import DeliveryPage from "./src/pages/delivery";

function Layout({ children }: any) {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" || location.pathname === "/administrativopage";

  return (
    <>
      {!hideNavbar && <NavHeader />}
      {children}
    </>
  );
}

export function RouterReact() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/projectsobre" element={<ProjectSobre />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/administrativopage" element={<AdministrativoPage />} />
          <Route path="/paymentspage" element={<PaymentsPage />} />
          <Route path="/deliverypage" element={<DeliveryPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

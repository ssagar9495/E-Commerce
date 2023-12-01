import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Login, Register, Dashboard, Page404, PaymentForm } from "../pages";

export default function Router() {
  return (
    <Routes>
      {/* <Route element={<DashboardLayout />}> */}
      {/* </Route> */}
      {/* <Route element={<LogoOnlyLayout />}> */}
      <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.PAYMENT_FORM} element={<PaymentForm />} />
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
      {/* </Route> */}
      <Route path={ROUTES.NOT_FOUND} element={<Page404 />} />
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
    </Routes>
  );
}

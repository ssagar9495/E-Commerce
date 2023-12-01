import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { toast, ToastContainer, Slide } from "react-toastify";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        {/* <ToastContainer
          transition={Slide}
          hideProgressBar
          position={toast.POSITION.BOTTOM_RIGHT}
          autoClose={3000}
        /> */}
      </PersistGate>
    </Provider>
  );
}

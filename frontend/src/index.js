import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./components/PrivateRoute.jsx";
import HomeView from "./views/HomeView.jsx";
import ProductView from "./views/ProductView.jsx";
import CartView from "./views/CartView.jsx";
import LoginView from "./views/LoginView.jsx";
import RegisterView from "./views/RegisterView.jsx";
import ShippingView from "./views/ShippingView.jsx";
import PaymentView from "./views/PaymentView.jsx";
import PlaceOrderView from './views/PlaceOrderView.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeView />} />
      <Route path="/product/:id" element={<ProductView />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingView />} />
        <Route path="/payment" element={<PaymentView />} />
        <Route path="/orders" element={<PlaceOrderView />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

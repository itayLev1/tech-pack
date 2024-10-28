import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import store from "./store.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import HomeView from "./views/HomeView.jsx";
import ProductView from "./views/ProductView.jsx";
import CartView from "./views/CartView.jsx";
import LoginView from "./views/LoginView.jsx";
import RegisterView from "./views/RegisterView.jsx";
import ShippingView from "./views/ShippingView.jsx";
import PaymentView from "./views/PaymentView.jsx";
import PlaceOrderView from "./views/PlaceOrderView.jsx";
import OrderView from "./views/OrderView.jsx";
import ProfileView from "./views/ProfileView.jsx";
import OrderListView from "./views/admin/OrderListView.jsx";
import ProductListView from "./views/admin/ProductListView.jsx";
import ProductEditView from "./views/admin/ProductEditView.jsx";

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
        <Route path="/order/:id" element={<OrderView />} />
        <Route path="/profile" element={<ProfileView />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderListView />} />
        <Route path="/admin/productlist" element={<ProductListView />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditView />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

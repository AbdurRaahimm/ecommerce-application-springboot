import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Layout from "../Components/Layout";
import DashboardLayout from "../Components/DashboardLayout";
import AddCompaany from "../pages/AddCompany";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";

export const Routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="carts" element={<Cart />} />
                <Route path="dashboard" element={<DashboardLayout />} >
                    <Route index element={<AddCompaany />} />
                    <Route path="product" element={<AddProduct />} />
                </Route>

            </Route>
        </>
    )
)
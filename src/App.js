import * as React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login'
import Register from './pages/Register'
import NoPage from './pages/NoPage'
import './App.css';
import ForgotPass from "./pages/ForgotPass";
import EditAccount from "./pages/EditAccount";
import NewPost from "./pages/NewPost"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgotpass" element={<ForgotPass />} />
                    <Route path="editaccount" element={<EditAccount />} />
                    <Route path="newpost" element={<NewPost />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

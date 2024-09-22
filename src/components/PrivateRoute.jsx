import { Navigate, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsloggedIn } from '../redux/auth/selectors';
// import { Component } from "react";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isloggedIn = useSelector(selectIsloggedIn);
    return isloggedIn ? Component : <Navigate to={redirectTo} />
};
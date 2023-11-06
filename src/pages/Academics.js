import { GoogleButton } from "react-google-button"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Academics() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <>
            <h1>Academics</h1>
            <table>
                <tr>
                    <th>Module Code</th>
                    <th>Module Title</th>
                </tr>
                <tr>
                    <td>BT1101</td>
                    <td>Introduction to Business Analytics</td>
                </tr>
                <tr>
                    <td>BT2101</td>
                    <td>Econometrics Modelling for Business Analytics</td>
                </tr>
                <tr>
                    <td>BT2102</td>
                    <td>Data Management and Visualisation</td>
                </tr>
                <tr>
                    <td>BT2103</td>
                    <td>Optimization Methods in Business Analytics</td>
                </tr>
            </table>

            <div className="google-button">
                <GoogleButton onClick={signInWithGoogle}/>
            </div>
        </>
    )
}
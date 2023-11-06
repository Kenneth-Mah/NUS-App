import { GoogleButton } from "react-google-button"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Admission() {
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
            <h1>Admission</h1>
            <div className="list">
                <ol>
                    <li>Understanding Admission requirements</li>
                    <li>Submit application online</li>
                    <li>Upload supporting documents</li>
                    <li>Make application fee payment</li>
                    <li>Check application status </li>
                </ol>
            </div>

            <div className="google-button">
                <GoogleButton onClick={signInWithGoogle}/>
            </div>
        </>
    )
}
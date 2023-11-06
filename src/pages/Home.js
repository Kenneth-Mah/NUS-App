import nus_logo from "../nus_logo_full-vertical.jpg"
import { GoogleButton } from "react-google-button"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
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
            <h1>Home</h1>
            <img src={nus_logo} width={250} height={330}/>
            <p>NUS is a leading research university in Asia</p>

            <div className="google-button">
                <GoogleButton onClick={signInWithGoogle}/>
            </div>
        </>
    )
}
"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import "./page.css"

export default function SignupPage() {
    const [user, setUser] = React.useState ({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = async () => {

    }
    return (
        <div className = "div"> 
            <h1 className="header"> Sign Up </h1>
            <hr/>
            <label className="username_label" htmlFor="username"> Username </label>
            <input className ="signup_username"
                id="username"
                type = "text"
                value = {user.username}
                onChange = {(e) => setUser ({...user, username: e.target.value})}
                placeholder = "username"/>

            <label className="email_label" htmlFor="email"> Email </label>
            <input className ="signup_email"
                id="email"
                type = "text"
                value = {user.email}
                onChange = {(e) => setUser ({...user, email: e.target.value})}
                placeholder = "email"/>

            <label className="password_label" htmlFor="password"> Password </label>
            <input className ="signup_password"
                id="password"
                type = "text"
                value = {user.password}
                onChange = {(e) => setUser ({...user, password: e.target.value})}
                placeholder = "password"/>

            <button onClick= {onSignup} className="signup_button"> Sign Up </button>
            <Link  className="link" href = "/login"> Existing Users Login Here</Link>
        </div>
    )
}
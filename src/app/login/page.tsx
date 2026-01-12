"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import "./page.css"

export default function LoginPage() {
    const [user, setUser] = React.useState ({
        email: "",
        password: ""
    })

    const onLogin = async () => {

    }
    return (
        <div className = "div"> 
            <h1 className="header"> Login </h1>
              <hr/>

            <label className="email_label" htmlFor="email"> Email </label>
            <input className ="login_email"
                id="email"
                type = "text"
                value = {user.email}
                onChange = {(e) => setUser ({...user, email: e.target.value})}
                placeholder = "email"/>

            <label className="password_label" htmlFor="password"> Password </label>
            <input className ="login_password"
                id="password"
                type = "text"
                value = {user.password}
                onChange = {(e) => setUser ({...user, password: e.target.value})}
                placeholder = "password"/>

            <button onClick= {onLogin} className="login_button"> Login </button>
            <Link className="link" href = "/signup"> New Users Signup Here</Link>
        </div>
    )
}
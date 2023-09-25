"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const username = e.target[].value;
    const email = e.target[0].value;
    const password = e.target[1].value;

    const data = signIn("credentials", { email, password });

    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Login</h1>
        {/* <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className={styles.username}
        /> */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className={styles.password}
        />
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>

      <button className={styles.googleBtn} onClick={() => signIn("google")}>
        Login with Google
      </button>
      <br />
      <br />
      <Link href="/dashboard/register">SignUp Here</Link>
    </div>
  );
};

export default Login;

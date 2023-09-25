"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const username = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      });

      if (res && res.headers) {
        console.log("headers found!");
        console.log(res);
      }

      if (res.status === 201) {
        setErr(null);
        router.push(`/dashboard/login`);
      }
    } catch (error) {
      setErr(error);
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Register</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={styles.name}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className={styles.username}
        />
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
          Register
        </button>
      </form>
      {err && <h2>{err.message}</h2>}
      <Link href="/dashboard/login">Login Here</Link>
    </div>
  );
};

export default Register;

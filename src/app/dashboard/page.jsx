"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //       console.log("Error while fetching data.");
  //     }

  //     const d = await res.json();
  //     setData(d);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  console.log(session);
  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
    return;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch(`/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {}
  };

  if (session.status === "authenticated") {
    return (
      <main className={styles.container}>
        <section className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      width={250}
                      height={150}
                      src={post.image}
                      alt="Food"
                      className={styles.img}
                      priority
                    />
                  </div>
                  <article className={styles.postData}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p>{post.description}</p>
                  </article>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </section>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1 className={styles.newPostHeading}>Add New Post</h1>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className={styles.newPostTitle}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className={styles.newPostDesc}
          />
          <input
            type="text"
            name="image"
            placeholder="Image"
            className={styles.newPostImg}
          />
          <textarea
            cols="30"
            rows="10"
            name="content"
            placeholder="Content"
            className={styles.newPostContent}
          ></textarea>
          <button type="submit" className={styles.formSubmit}>
            Create Post
          </button>
        </form>
      </main>
    );
  }
};

export default Dashboard;

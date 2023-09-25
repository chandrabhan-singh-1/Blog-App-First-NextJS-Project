import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:8080/api/posts", {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    console.error("Error");
    throw new Error(`Error while fetching data`);
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          key={item._id}
          className={styles.linkContainer}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt={"Blog Image"}
              width={480}
              height={280}
              className={styles.img}
              priority={true}
            />
          </div>
          <div className={styles.content}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import me from "public/me.jpg";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:8080/api/posts/${id}`, {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    // console.error("Error");
    // throw new Error(`Error while fetching data`);
    // or
    return notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <section className={styles.topContainer}>
        <article className={styles.infoContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
          <div className={styles.author}>
            <Image
              src={me}
              width={60}
              height={60}
              className={styles.authorImg}
              alt={"Author's Profile Picture"}
            />
            <h3 className={styles.authorName}>{data.username}</h3>
          </div>
        </article>
        <aside className={styles.imgContainer}>
          <Image
            fill={true}
            src={data.image}
            className={styles.img}
            alt={`Image of ${params.id}`}
          />
        </aside>
      </section>
      <section className={styles.bottomContainer}>
        <article className={styles.article}>{data.content}</article>
      </section>
    </div>
  );
};

export default BlogPost;

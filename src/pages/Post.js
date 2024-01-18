import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../service/PostsService";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // koristimo useEffect u kome pozivamo postService metodu getPost kojoj prosledjujemo id koji smo sa useParams uzeli iz URL-a.
  // Servis nam vraca response, objekat single post koji setujemo u state post i prikazujemo u nasem html-u.
  // u dependency array useEffect-a upisujemo id jer zelimo da se useEffect okine svaki put kada se id promeni kako bi se komponenta re-renderovala
  // u slucaju da ne ubacimo id u ovaj array, na klik na bilo koji post, ne bi nam se re-render pokrenuo i videli bismo stalno isti post
  useEffect(() => {
    const fetch = async () => {
      const data = await postService.getPost(id);
      setPost(data);
      setIsLoading(false);
    };
    fetch();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
}

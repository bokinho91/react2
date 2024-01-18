import React from "react";
import { Link } from "react-router-dom";
import "../style/SinglePost.css";

function SinglePost({ data, buttonClicked }) {
  const { id, title, email, body } = data;

  return (
    <div className="single-post-card">
      <h2>
        {/* unutar ovog h2 smo stavili Link tag oko imena post-a, na ovaj nacin smo od imena napravili link koji ce nas na klik odvesti
         na route npr. "/posts/2" ukoliko smo kliknuli na post sa id-jem 2 */}
        <Link to={`/posts/${id}`}>{title}</Link>
      </h2>
      <p>{email}</p>
      <p>{body}</p>

      {/* button koji smo napravili u redu ispod sluzi za komunikaciju na nivou Child->Parent */}
      <button onClick={() => buttonClicked({ id, title })}>Click</button>
    </div>
  );
}

export default SinglePost;

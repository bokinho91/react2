import React, { useState } from "react";
import { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SinglePost from "../components/SinglePost";
import postService from "../service/PostsService";
import Post from "./Post";

export default function Posts() {
  /* useRouteMatch koristimo kako bismo dobavili trenutni path stranice na kojoj smo, taj path koristimo u kodu ispod kada imamo nested Route, koja
  treba da nam se renderuje ispod liste Post-ova koje smo prikazali na stranici "/posts   . Na ovaj nacin izbegavamo harcode-ovanje stranice,
  u slucaju da nekada u buducnosti odlucimo da promenimo path za ovu komponentu, menjacemo ga samo u Nav i App.js komponenti a ovde ce se sam 
  promeniti zbog upotrebe useRouteMatch*/

  const { path } = useRouteMatch();

  // pravimo novi state pod imenom posts u koji cemo setovati niz post-ova koje dobavimo sa back-a
  const [posts, setPosts] = useState([]);

  /* koristimo useEffect hook koji se poziva nakon render-a komponente. Unutar ovog pozivamo servis koji smo napravili i koji sluzi da 
   sa backend-a dobavi listu post-ova. Kada smo dobili response, set-ujemo ga u nas posts state*/
  useEffect(() => {
    const fetch = async () => {
      const data = await postService.getAll();
      setPosts(data);
    };
    fetch();
  }, []);

  // ova funkcija je napisana u cilju pokazivanja komunikacije na
  const handleClicked = (data) => {
    alert(
      `You have clicked on child component with ID: ${data.id}. \n Title of this post is:\n ${data.title}`
    );
  };

  return (
    <div style={{ display: "flex" }}>
      {/* listu post-ova koje smo dobili preko postService-a mapiramo i podatke svakog single post-a prosledjujemo kroz
        props (properties) */}
      <div>
        {posts.map((post) => (
          <SinglePost data={post} key={post.id} buttonClicked={handleClicked} />
        ))}
      </div>

      {/* UKOLIKO ZELIMO DA UNUTAR OVE POSTS KOMPONENTE RENDERUJEMO NEKU DRUGU (npr. Post komponentu kao u primeru ispod, moramo u App.js 
          skloniti (zakomentarisati) Route koja ima isti path kao ova, tj. "/posts/:id".
          Ako na oba mesta budemo imali isti path doci ce do greske.)
          Trenutno je kod ispod zakomentarisan zato sto koristimo Route koji se nalazi u App.js*/}
      <div>
        <Switch>
          <Route path={`${path}/:id`}>
            <Post />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

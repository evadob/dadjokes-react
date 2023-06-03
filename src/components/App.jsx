import React from "react";
import { Joke } from "./Joke/Joke";
import "./Joke/Joke.css";
import { jokes } from "../jokes.js";

export const App = () => (
  <div className="container">
    {jokes.map((joke) => (
      <Joke
        key={joke.id}
        userAvatar={joke.avatar}
        userName={joke.name}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    ))}
  </div>
);

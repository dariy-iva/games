import React from "react";
import "./UserGameConfigSection.css";

export default function UserGameConfigSection({children, isGamesChoice}) {

  return (
    <>
      <main className={`user-game-config ${isGamesChoice ? 'user-game-config_slim' : ''}`}>
        <h1
          className="user-game-config__title">{!isGamesChoice ? 'Where do you play?' : 'What gamePosters do you play?'}</h1>
        <p
          className="user-game-config__description user-game-config__text">
          {!isGamesChoice ? 'You can select multiply choices' : 'You can select multiply choices'}</p>
        {children}
      </main>
    </>
  );
}
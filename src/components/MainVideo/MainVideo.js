import React from "react";
import "./MainVideo.css";

export default function MainVideo() {
  const videoList = [
    {id: 'Axmg1E4HrVE', name: 'avatar'},
    {id: 'IIH9GdW7oSQ', name: 'sims-5'},
    {id: 'FOvHOXcxw40', name: 'first-descendant'},
    {id: 'anZtoPo2Fpw', name: 'dune'},
    {id: '83nIxxcwlU8', name: 'diablo-4'},
    {id: 'BsC-Rl9GYy0', name: 'hogwarts'},
    {id: 't9yyRvAiXvc', name: 'baldurs-gate-3'},
    {id: 'dIQGI36BxDE', name: 'god-of-war-ragnarok'},
    {id: 'QgbMAdtp7aE', name: 'star-wars-republic'},
    {id: '4cJpiOPKH14', name: 'star-wars-eclipse'},
    {id: 'R2Ebc_OFeug', name: 'the-last-of-us'},
    {id: '2WtMjZkwdCE', name: 'resident-evil-8'},
    {id: 'UxDWGW7Z67I', name: 'horizon-forbidden'},
    {id: 'K_03kFqWfqs', name: 'elden-ring'},
  ];

  return (
    <section className="video translationDownToCenter neon-box-shadow">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/?autoplay=1&hl=en&modestbranding=1&playlist=${videoList.map(item => item.id)}`}
        className='video__iframe' allow="muted; autoplay; fullscreen">Sorry, your browser does not support this video
      </iframe>
    </section>
  );
}
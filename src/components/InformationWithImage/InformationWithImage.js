import React from "react";
import "./InformationWithImage.css";

export default function InformationWithImage({title, text}) {

  return (
    <section className="info">
      <h1 className="info__title">{title}</h1>
      <p
        className="info__description">{text}</p>
    </section>
  );
}
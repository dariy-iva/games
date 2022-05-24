import React from "react";
import './AnimationOverlay.css'

const colors = ["#6E4AFF", "#9C42AB", "#184292", "#EB4335", "#077d07"];
const lines = [];

for (let i = 0; i < 15; i++) {
  const line = {
    height: `${Math.round(Math.random() * (200 - 30) + 30)}px`,
    borderColor: `${colors[Math.round(Math.random() * (1 - 0) + 0)]}`,
    opacity: `.${Math.round(Math.random() * (9 - 1) + 1)}`,
    borderWidth: `${Math.round(Math.random() * (3 - 1) + 1)}px`,
    top: `${Math.round(Math.random() * ((90 - 0) - 0) + 0)}%`,
    left: `${Math.round(Math.random() * (100 - 0) + 0)}%`,
  };
  lines.push(line);
}

export default function AnimationOverlay() {
  return (
     <>
       <div className="overlay">
         <ul className="overlay__field overlay__animation_no-delay">
           {lines.map((line) => (
              <li
                 className="overlay__line"
                 style={line}
                 key={lines.indexOf(line)}
              ></li>
           ))}
         </ul>
         <ul className="overlay__field overlay__field_back overlay__animation_delay">
           {lines.map((line) => (
              <li
                 className="overlay__line"
                 style={line}
                 key={lines.indexOf(line)}
              ></li>
           ))}
         </ul>
       </div>
     </>
  );
}
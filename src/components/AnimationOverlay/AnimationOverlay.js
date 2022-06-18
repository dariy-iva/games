import React from "react";
import './AnimationOverlay.css'

export default function AnimationOverlay({colors, isOverlayColor}) {
  const [overlayList, setOverlayList] = React.useState( [{
    name: 'overlay-no-delay',
    classes: 'overlay__field overlay__animation_no-delay',
    lines: [],
  },
    {
      name: 'overlay-with-delay',
      classes: 'overlay__field overlay__animation_delay',
      lines: [],
    },
  ] );

  React.useEffect( () => {
    if (!overlayList[0].lines.length) {
      const newOverlayList = overlayList.map( overlay => {
        const maxLines = isOverlayColor ? 16 : 36;
        for (let i = 0; i < maxLines; i++) {
          const line = {
            height: `${Math.round( Math.random() * (200 - 30) + 30 )}px`,
            borderColor: `${colors[Math.round( Math.random() * (colors.length - 1) )] || 'inherit'}`,
            opacity: `.${Math.round( Math.random() * (9 - 1) + 1 )}`,
            borderWidth: `${Math.round( Math.random() * (3 - 1) + 1 )}px`,
            top: `${Math.round( Math.random() * 90 )}%`,
            left: `${Math.round( Math.random() * 100 )}%`,
          };
          overlay.lines.push( line );
        }
        return overlay;
      } )
      setOverlayList( newOverlayList );
    } else {
      const newOverlayList = [];
      overlayList.forEach( overlay => {
        const newOverlay = {};
        newOverlay.name = overlay.name;
        newOverlay.classes = overlay.classes;
        newOverlay.lines = [];
        const uniqColors = [...new Set( overlay.lines.map( line => line.borderColor ) )].filter( lineColor => lineColor !== 'inherit' );

        if (uniqColors.length < colors.length) {
          const newColor = colors.find( color => !uniqColors.includes( color ) );

          let i = 0;
          overlay.lines.forEach( line => {
            const newLine = {...line};
            if (newLine.borderColor === 'inherit' && i < 8) {
              newLine.borderColor = newColor;
              ++i;
            }
            newOverlay.lines.push( newLine );
          } );
        } else {
          overlay.lines.forEach( line => {
            const newLine = {...line};
            if (!colors.includes( line.borderColor )) {
              newLine.borderColor = 'inherit';
            }
            newOverlay.lines.push( newLine );
          } )
        }
        newOverlayList.push( newOverlay );
      } )
      setOverlayList( newOverlayList );
    }
  }, [colors] );

  return (
    <>
      <div className={`overlay ${isOverlayColor ? 'overlay_color' : ''}`}>
        {overlayList.map( overlay => (
            <ul className={overlay.classes} key={overlay.name}>
              {overlay.lines.map( (line, index) => (
                <li
                  className="overlay__line"
                  style={line}
                  key={index}
                />
              ) )}
            </ul>
          )
        )}
      </div>
    </>
  );
}
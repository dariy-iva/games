import React from 'react';
import {GetInfoPopupContext, SetInfoPopupContext} from "../../context/InfoPopupContext";
import {GamesContext} from "../../context/GamesContext";
import {gameList} from "../../utils/constants/gameList";

export default function CustomProvider({children}) {
  const [infoPopup, setInfoPopup] = React.useState({isOpen: false, status: '', text: ''});

  return (
    <GamesContext.Provider value={gameList}>
      <GetInfoPopupContext.Provider value={infoPopup}>
        <SetInfoPopupContext.Provider value={setInfoPopup}>
          {children}
        </SetInfoPopupContext.Provider>
      </GetInfoPopupContext.Provider>
    </GamesContext.Provider>
  )
}
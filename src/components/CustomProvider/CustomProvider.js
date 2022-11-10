import React from 'react';
import {GetInfoPopupContext, SetInfoPopupContext} from "../../context/InfoPopupContext";
import {GetImagePopupContext, SetImagePopupContext} from "../../context/ImagePopupContext";
import {GamesContext} from "../../context/GamesContext";
import {gameList} from "../../utils/constants/gameList";

export default function CustomProvider({children}) {
  const [infoPopup, setInfoPopup] = React.useState({isOpen: false, status: '', text: ''});
  const [imagePopup, setImagePopup] = React.useState({isOpen: false, imageSrc: ''});

  return (
    <GamesContext.Provider value={gameList}>
      <GetInfoPopupContext.Provider value={infoPopup}>
        <SetInfoPopupContext.Provider value={setInfoPopup}>
          <GetImagePopupContext.Provider value={imagePopup}>
            <SetImagePopupContext.Provider value={setImagePopup}>
              {children}
            </SetImagePopupContext.Provider>
          </GetImagePopupContext.Provider>
        </SetInfoPopupContext.Provider>
      </GetInfoPopupContext.Provider>
    </GamesContext.Provider>
  )
}
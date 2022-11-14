import React from 'react';
import {GetInfoPopupContext, SetInfoPopupContext} from "../../context/InfoPopupContext";
import {GetImagePopupContext, SetImagePopupContext} from "../../context/ImagePopupContext";
import {GetAddPostPopupContext, SetAddPostPopupContext} from "../../context/AddPostPopupContext";
import {GamesContext} from "../../context/GamesContext";
import {gameList} from "../../utils/constants/gameList";

export default function CustomProvider({children}) {
  const [infoPopup, setInfoPopup] = React.useState({isOpen: false, status: '', text: ''});
  const [imagePopup, setImagePopup] = React.useState({isOpen: false, imageSrc: ''});
  const [addPostPopup, setAddPostPopup] = React.useState({isOpen: false});

  return (
    <GamesContext.Provider value={gameList}>
      <GetInfoPopupContext.Provider value={infoPopup}>
        <SetInfoPopupContext.Provider value={setInfoPopup}>
          <GetImagePopupContext.Provider value={imagePopup}>
            <SetImagePopupContext.Provider value={setImagePopup}>
              <GetAddPostPopupContext.Provider value={addPostPopup}>
                <SetAddPostPopupContext.Provider value={setAddPostPopup}>
                  {children}
                </SetAddPostPopupContext.Provider>
              </GetAddPostPopupContext.Provider>
            </SetImagePopupContext.Provider>
          </GetImagePopupContext.Provider>
        </SetInfoPopupContext.Provider>
      </GetInfoPopupContext.Provider>
    </GamesContext.Provider>
  )
}
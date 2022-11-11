import React from "react";
import "./GamesChoicePage.css";
import UserGameConfigSection from "../../UserGameConfigSection/UserGameConfigSection";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import SelectGamesForm from "../../Forms/SelectGamesForm/SelectGamesForm";

export default function GamesChoicePage({onSubmit}) {

  return (
    <>
      <HeaderMain/>
      <UserGameConfigSection isGamesChoice={true}>
        <SelectGamesForm onSubmit={onSubmit} isMultipleSelect={true}/>
      </UserGameConfigSection>
    </>
  );
}
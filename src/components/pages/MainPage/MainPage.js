import React from "react";
import {Outlet} from "react-router-dom";
import './MainPage.css';
import MainMenu from "../../Menu/MainMenu/MainMenu";
import PeopleList from "../../PeopleList/PeopleList";


export default function MainPage() {
  return (
    <>
      <main className="content">
        <MainMenu/>

        <Outlet/>

        <PeopleList />

      </main>
    </>
  );
}
import React from "react";
import {Outlet} from "react-router-dom";
import './MainPage.css';
import MainMenu from "../../Menu/MainMenu/MainMenu";
import PeopleList from "../../PeopleList/PeopleList";
import {connect} from "react-redux";
import {getPostItemsList} from "../../../redux/slices/postsSlice";


function MainPage({getPostItemsList}) {

  React.useEffect(() => {
    getPostItemsList();
  }, []);

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

export default connect(
  (state) => ({
    posts: state.posts,
  }),
  {
    getPostItemsList
  }
)(MainPage);
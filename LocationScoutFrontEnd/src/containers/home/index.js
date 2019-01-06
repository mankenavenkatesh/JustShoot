import React from "react";
import MainSearch from "../MainSearch/";
import Content from "../Content/";
import CategoriesCarousel from "../CategoriesCarousel/";
import Info from "../Info/";
import RecentBlogPosts from "../RecentBlogPosts/";
import Backtotop from "../Backtotop/";

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainSearch />
        {/* <Content />
        <CategoriesCarousel />
        <Info />
        <RecentBlogPosts /> */}
      </div>
    );
  }
}

export default Home;

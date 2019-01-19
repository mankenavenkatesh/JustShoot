import React from "react";
import MainSearch from "../MainSearch/";
import Content from "../Content/";
import CategoriesCarousel from "../CategoriesCarousel/";
import Info from "../Info/";
import RecentBlogPosts from "../RecentBlogPosts/";
import Backtotop from "../Backtotop/";
import { fetchLocationCategories } from "./../../actions/shootingLocationCategoryActions";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainSearch locationCategories={this.props.locationCategories} />
        {/* <Content />
        <CategoriesCarousel />
        <Info />
        <RecentBlogPosts /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    locationCategories: state.locationCategories
  };
};

export default Home;

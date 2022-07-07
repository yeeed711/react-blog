import React from "react";
import Banner from "../components/postview/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import View from "../components/postview/View";
import useAxios from "../components/hooks/useAxios";

function PostView() {
  const { data } = useAxios("./data.json");
  return (
    data && (
      <>
        <Header />
        <Banner />
        <View posts={data.posts} />
        <Footer />
      </>
    )
  );
}

export default PostView;

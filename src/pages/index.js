import React from "react";
import Layout from "../components/Layout";
import Sections from "../components/sections";
require("typeface-markazi-text");

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Sections />
      </Layout>
    );
  }
}

import React from "react";
import Pagination from "../paginaton/Pagination";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className="flex-5">
      <h1 className="my-[50px]">Recent Posts</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;

import React from "react";
import Article from "./article";

// function Article_row({ article_1, article_2, article_3 }) {
  function Article_row({article}) {

  return (
    <div className='row article-row'>
      <div className="col-lg-4">
        <Article
          article={article}
        />
      </div>
      {/* <div className="col-lg-4">
        <Article
          article={article_2}
        />
      </div>
      <div className="col-lg-4">
        <Article
          article={article_3}
        />
      </div> */}
    </div>
  );
}
export default Article_row;


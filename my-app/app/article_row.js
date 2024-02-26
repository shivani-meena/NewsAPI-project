import React from "react";
import Article from "./article";

function Article_row({article_1, article_2, article_3}) {
  return (
    <div className='row article-row'>
      <div className="col-lg-4">
        <Article
          image={article_1.image}
          title={article_1.title}
          description={article_1.description}
          newsUrl={article_1.newsUrl}
        />
      </div>
      <div className="col-lg-4">
        <Article
          image={article_2.image}
          title={article_2.title}
          description={article_2.description}
          newsUrl={article_2.newsUrl}
        />
      </div>
      <div className="col-lg-4">
        <Article
          image={article_3.image}
          title={article_3.title}
          description={article_3.description}
          newsUrl={article_3.newsUrl}
        />
      </div>
    </div>
  );
}
export default Article_row;

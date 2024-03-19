"use client"
import React, { useState } from "react";
import Search from "./search";
import News_article from "./news_article";
import { initial_articles } from "./data.js";

function Home() {

  const [articles, setArticles] = useState(initial_articles);

  function handle_update(new_articles) {
    setArticles(new_articles)
    console.log(articles)
  }

  return (
    <>
      <Search
        handle_update={handle_update}
      />
      <div className="article-row row">
        {articles.map(function (article) {
          return (
            <div className="col-lg-4">
              <News_article
                key={article.id}
                article={article}
              />
            </div>
          );
        })}
      </div>





      {/* <Article_row
        article_1={articles[0]}
        article_2={articles[1]}
        article_3={articles[2]}
      />
      <Article_row
        article_1={articles[3]}
        article_2={articles[4]}
        article_3={articles[5]}
      />
      <Article_row
        article_1={articles[6]}
        article_2={articles[7]}
        article_3={articles[8]}
      /> */}
    </>
  );
};

export default Home;

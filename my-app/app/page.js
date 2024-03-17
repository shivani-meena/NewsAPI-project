"use client"
import React, { useState } from "react";
import Search from "./search";
import Article_row from "./article_row";
import { articles } from "./articles.js";

function Home() {
  const [news, setNews] = useState(articles);
  function update_articles(data) {
    setNews(data);
    console.log(news)
  };

  return (
    <>
      <Search
        new_article={update_articles}
      />
      <div className="">
        {news.map((item) => (
            <Article_row
              key={item.title}
              article={item}
            />
        ))}
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

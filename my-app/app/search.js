"use client"
import { useState } from "react";

function Search({ handle_update }) {
    const [input, setInput] = useState("");

    function handleSearch() {
        console.log("Your input text is", input)
        let fetch_promise = fetch(`https://newsapi.org/v2/top-headlines?apiKey=6f88d61a316c423786b8a37c81deaf33&q=${input}`)
        fetch_promise.then((response) => {
            return response.json()
        }).then((data) => {

            class Article {
                constructor(title, description, urlToImage, url) {
                    this.title = title;
                    this.description = description;
                    this.urlToImage = urlToImage;
                    this.url = url;
                }
            }

            let new_articles = [];
            for (let article of data.articles) {
                const new_article = new Article(article.title, article.description, article.urlToImage, article.url);
                new_articles.push(new_article);
            }

            handle_update(new_articles);
        })
    };

    return (
        <>
            <div class="row justify-content-center">
                <div className="search-container">
                    <div className="search-group">
                        <img className="search-icon" src="search.png" />
                        <input className="input-text"
                            type="search"
                            placeholder="Search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <button className="button-go" onClick={handleSearch}>Go</button>
                </div>
            </div>
            <div className="row top-news">
                <div class="col">TOP NEWS FROM INDIA</div>
            </div>
        </>
    )
};

export default Search;
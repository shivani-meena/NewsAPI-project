function News_article({article}){
    return(
        <div class="article">
            <img class="article-image" src={article.urlToImage}/>
            <div class="title">{article.title}</div>
            <p class="paragraph">{article.description}</p>
            <span class="read-article">Read full article...</span>
            <a href={article.url} class="link">
                <img src="arrow.png" />
            </a>
        </div>
    )
};

export default News_article;
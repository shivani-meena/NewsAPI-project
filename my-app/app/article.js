function Article({article}){
    return(
        <div class="article">
            <img class="article-image" src={article.image}/>
            <div class="title">{article.title}</div>
            <p class="paragraph">{article.description}</p>
            <span class="read-article">Read full article...</span>
            <a href={article.newsUrl} class="link">
                <img src="arrow.png" />
            </a>
        </div>
    )
};

export default Article;
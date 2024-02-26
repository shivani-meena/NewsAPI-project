function Article({image, title, description, newsUrl}){
    return(
        <div class="article">
            <img class="article-image" src={image}/>
            <div class="title">{title}</div>
            <p class="paragraph">{description}</p>
            <span class="read-article">Read full article...</span>
            <a href={newsUrl} class="link">
                <img src="arrow.png" />
            </a>
        </div>
    )
}
export default Article;
function Search() {
    return (
        <>
            <div class="row justify-content-center">
                <div className="search-container">
                    <div className="search-group">
                        <img className="search-icon" src="search.png" />
                        <input className="input-text" type="search" placeholder="Search" />
                    </div>
                    <button className="button-go">Go</button>
                </div>
            </div>
            <div className="row top-news">
                <div class="col">TOP NEWS FROM INDIA</div>
            </div>
        </>
    )
}
export default Search;

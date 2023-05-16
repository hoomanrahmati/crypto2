import News from "./News";

export default function NewsContainer({ filteredNews }: any) {
    return (
        <>
            <div className="center table-headings">
                <div className="coin">
                    <p className="coin-symbol">Title</p>
                    {/* <p className="coin-symbol symbol-header">Symbol</p> */}
                </div>
                {/* <div className="coin-data">
                    <p className="coin-price">Price</p>
                    <p className="coin-percent">24h Change</p>
                    <p className="coin-volume">24h Volume</p>
                    <p className="coin-marketcap">Market Cap</p>
                </div> */}
            </div>

            <div className="coin-data-display">
                {filteredNews.length < 1 ? (
                    <div className="no-search-result">
                        <h3>No Search Results Found!</h3>
                        <p>Please check you search spellings and remember this tracker only keeps record of the top 200 news</p>
                    </div>
                ) : (
                    filteredNews.map((coin: any) => {
                        return (
                            <News
                                // key={coin.id}
                                // name={coin.name}
                                // image={coin.image}
                                // price={coin.current_price}
                                // symbol={coin.symbol}
                                // volume={coin.total_volume}
                                // priceChange={coin.price_change_percentage_24h}
                                // marketCap={coin.market_cap}
                                title={coin.title}
                                url={coin.url}
                            />
                        );
                    })
                )}
            </div>
        </>

    )
}
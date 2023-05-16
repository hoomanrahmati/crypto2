"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image';
import sampleCrypto from "./components/sampleCrypto.json";
import sampleNews from "./components/sampleNews.json";
import CoinContainer from "./components/CoinContainer";
import NewsContainer from "./components/NewsContainer";

export default function Home(props: any) {
  const [coins, setCoins] = useState(sampleCrypto);
  const [news, setNews] = useState(sampleNews.results);
  const [search, setSearch] = useState("");
  const [isNews, setIsNews] = useState(false);

  useEffect(() => {

    const getNews = () => {
      return setInterval(() => {
        axios.get("https://cryptopanic.com/api/v1/posts/?auth_token=5fda82ef699c5a66783e635119147bd82e4b62db&kind=news").then((res) => {
          setNews(res.data.results);
        }).catch(err => console.log(err));
      }, 2000);
    }
    const getCoins = () => {
      return setInterval(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
          )
          .then((res) => {
            console.log("data:", res.data);
            setCoins(res.data);
          })
          .catch((error) => console.log(error));
      }, 2000);
    }
    const counter = !isNews ? getCoins() : getNews();
    return () => clearInterval(counter);
  }, [isNews]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const filteredNews = news.filter((coin) => coin.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="App">
      <h1 className="page-title">Live Crypto Price Tracker</h1><br />
      <div className="center table-headings-search-bar search-bar">
        <form>
          <div className="button-news-search-container">
            <input
              type="text"
              placeholder={isNews ? "Search News" : "Search Crypto"}
              className="coin-input"
              onChange={handleChange}
            ></input>
            <div className="button-news-search">
              <input
                type="radio"
                id="crypto-option"
                value="crypto"
                onClick={() => { setIsNews(false) }}
                checked={!isNews}
              />
              <label htmlFor="crypto-option">Crypto</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="radio"
                id="news-option"
                value="news"
                onClick={() => { setIsNews(true) }}
                checked={isNews}
              />
              <label htmlFor="news-option">News</label>
            </div>
          </div>
        </form>
      </div>
      {isNews ? <NewsContainer filteredNews={filteredNews} /> : <CoinContainer filteredCoins={filteredCoins} />}
      <div className="empty-div"></div>
      <footer>
        Demo <a href="https://nobbytalent.com/" target="_blank" rel="noreferrer">Nobby Talent</a>
      </footer>
    </div>
  )
}
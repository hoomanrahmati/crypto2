import React from "react";

const News = ({
    title, url
}: any) => {
    return (
        <div>
            <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">

                        <a href={url} target="_blank">{title}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;

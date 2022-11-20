import React from "react";

export const Listing = ({ data }) => {
  const level = (quanity) => {
    if (quanity < 10) {
      return "level-low";
    }
    if (quanity > 10 && quanity < 21) {
      return "level-medium";
    }
    if (quanity > 20) {
      return "level-high";
    }
  };

  const currentCode = (currencyCode) => {
    if (currencyCode === "EUR") {
      return "€";
    }
    if (currencyCode === "USD") {
      return "$";
    }
    return `${currencyCode} `;
  };

  const strLength = (title = '') => {
   return (title.length > 50) ? `${title.slice(0, 50)}...` : title
  }

  return (
    <div>
      <div className="item-list">
        {data.map((item) => {
          const {
            MainImage,
            listing_id,
            url,
            title,
            currency_code,
            price,
            quantity,
          } = item;
          return (
            <div key={listing_id} className="item">
              <div className="item-image">
                <a href={url}>
                  <img src={MainImage && MainImage.url_570xN} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{strLength(title)}</p>
                <p className="item-price">
                  {currentCode(currency_code) + price}
                </p>
                <p className={`item-quantity ${level(quantity)}`}>
                  {quantity} left
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

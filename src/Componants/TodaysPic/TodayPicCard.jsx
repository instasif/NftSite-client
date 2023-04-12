import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";

const TodayPicCard = ({ product }) => {
  const { creatorName, creatorImage, image, price } = product;
  return (
    <div className="mx-auto border shadow-lg rounded-xl w-60">
      <div className="p-3">
        <img className="md:w-56 md:h-56 w-full rounded-lg" src={image} alt="" />

        <div className="flex justify-between items-center my-3">
          <div className="flex justify-center items-center">
              <img
                className="w-8 h-8 rounded-full p-1 "
                src={creatorImage}
                alt=""
              />
            <div>
              <h6 className="text-xs text-gray-400">Creator</h6>
              <p className="font-bold">{creatorName}</p>
            </div>
          </div>
          <div>
            <h6 className="text-xs text-gray-400">Current Bid</h6>
            <p className="font-bold">{price}ETH</p>
          </div>
        </div>
      </div>
      <button className="w-full bg-indigo-500 text-white rounded-b-xl text-xs font-bold p-3 flex justify-center items-center">
        <span className="mx-2 text-lg font-bold">
          <RiShoppingBagLine />
        </span>
        BUY NOW
      </button>
    </div>
  );
};

export default TodayPicCard;

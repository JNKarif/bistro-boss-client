import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

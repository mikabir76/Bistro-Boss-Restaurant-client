import React from 'react';

const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item;
    return (
        <div className=" w-full shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl w-[430px] h-[270px]" />

  </figure>
 
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl">{name}</h2>
    <p>{recipe.slice(0, 80)}...</p>
    <div className='w-full flex justify-center my-8'>
           <button className='btn btn-outline  border-yellow-600 border-0 border-b-4 text-xl uppercase'>add to cart</button>
           </div>
  </div>
</div>
    );
};

export default FoodCard;
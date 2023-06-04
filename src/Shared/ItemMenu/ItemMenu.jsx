import React from 'react';

const ItemMenu = ({item}) => {
    // console.log(item)
    const {image, price, recipe, name} = item;
    return (
        <div  className='flex space-x-2'>
          <img style={{borderRadius: '0px 200px 200px 200px'}} className='w-[120px] border-2 border-black' src={image} alt="" />  
          <div>
            <h1 className='text-2xl'>{name} ------------------</h1>
            <p>{recipe}</p>
          </div>
          <p className='text-yellow-500'>${price}</p>
          
        </div>
    );
};

export default ItemMenu;
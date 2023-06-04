import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';
import ItemMenu from '../../Shared/ItemMenu/ItemMenu';
import { useMenu } from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularItems = menu.filter(items => items.category === 'popular')

// console.log(menu)
    return (
        <div className='mb-16 mx-auto'>
            <div>
                <Title
                subHeading={"Popular Items"}
                Heading={"from our menu"}
                ></Title>
            </div>
            <div className='grid md:grid-cols-2 gap-y-8 gap-x-2'>
                {
                    popularItems.map(item => <ItemMenu
                    key={item._id}
                    item={item}
                    >

                    </ItemMenu>)
                }
            </div>
           <div className='w-full flex justify-center mt-8'>
           <button className='btn btn-outline  border-0 border-b-4 text-xl uppercase'>View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;
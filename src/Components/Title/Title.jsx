import React from 'react';
const Title = ({ subHeading, Heading }) => {
    return (
        <div className=''>
            <div className='w-4/12 mx-auto text-center my-8'>

                <h3 className='italic text-yellow-600 mb-4'>---{subHeading}---</h3>
                <h1 className='text-3xl border-y-4 uppercase py-4 '>{Heading}</h1>
            </div>
           
        </div>
    );
};

export default Title;
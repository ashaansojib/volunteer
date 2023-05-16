import React from 'react';

const Search = () => {
    return (
        <div className='text-center lg:h-[400px] bg-slate-200 lg:flex justify-center items-center flex-col'>
            <h2 className='font-semibold text-4xl pb-8'>I grow by helping people in need.</h2>
            <div className='space-x-2 flex'>
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
            <button className='btn btn-primary'>Search</button>
            </div>
        </div>
    );
};

export default Search;
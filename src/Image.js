import React from 'react';

function Image(props) {
    let tag = props.image.tags.split(',');
    return (
        <div className="max-w-sm m-5 p-5 shadow-2xl rounded-2xl shadow-slate-600">
            <img src={props.image.webformatURL} className=" py-4" alt="" />
            <div className='text-xl text-cyan-600'>Photo by {props.image.user}</div>
            <div>
                <h1> <strong>Downloads:</strong>{props.image.downloads}</h1>
                <h1> <strong>Likes:</strong> {props.image.likes}</h1>
                <h1> <strong>Views:</strong> {props.image.views}</h1>
            </div>
            <div className='flex flex-wrap p-2'>
                {tag.map((obj, ind) => {
                    return (<div className='hover:bg-purple-400 text-lg max-w-fit bg-purple-500 rounded-2xl text-white m-1 px-4' key={ind}>{obj}</div>
                    )
                })}
            </div>
        </div>
    )

}

export default Image;

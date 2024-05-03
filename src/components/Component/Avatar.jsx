import './Avatar.scss'


// export function Avatar ({ src, alt}) {
//     const isEmpty = !src;
//     return (
//         <div className= {`avatar ${isEmpty ? 'empty-avatar' : ''}`}>
//             {isEmpty? (
//             <div className='avatar__placeholder'> </div>
//             ) : (
//             <img src={src} alt={alt} className='avatar-image' ></img>
//             )}
//             </div>
//     );

// }

export function Avatar ({ src, alt}) {
    const isEmpty = !src;
    return (
        <div className= {`avatar ${isEmpty ? 'empty-avatar' : ''}`}>
            {isEmpty ? null : <img src={src} alt={alt} className='avatar-image' ></img>}
            </div>
    );

}
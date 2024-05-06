import './Avatar.scss'

export function Avatar ({ src, alt}) {
    const isEmpty = !src;
    return (
        <div className= {`avatar ${isEmpty ? 'empty-avatar' : ''}`}>
            {isEmpty ? null : <img src={src} alt={alt} className='avatar-image' ></img>}
            </div>
    );

}
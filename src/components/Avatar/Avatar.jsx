import './Avatar.scss'

export function Avatar ({ src, alt }) {

    return (
        
        <div className= {`avatar ${src ? '' : 'empty-avatar' }`}>
            {src && <img src={src} alt={alt} className='avatar-image'/>}
            </div>
    );

}
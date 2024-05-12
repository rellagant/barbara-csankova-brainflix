import "./Video.scss";




export function Video({ mainPoster }) {


  return (
    <>
    
      <video className="video" controls poster={mainPoster}></video>
    </>
  );
}

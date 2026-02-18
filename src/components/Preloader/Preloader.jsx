import "./Preloader.scss";

function Preloader() {
  return (
    <div className="preloader">
      <img
        className="preloader-svg"
        src="/public/preloader__svg.svg"
        alt="preloader__svg"
      />
      <p className="preloader__text">Loading ...</p>
    </div>
  );
}

export default Preloader;

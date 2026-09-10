import styles from "./YoutubeVideo.module.scss";

function YoutubeVideo({ id, video }) {
  return (
    <div className={styles["video__wrap"]}>
      <div className={styles.container}>
        <h2 className={styles["video__title"]}>VIDEO RECIPE</h2>
        <iframe
          width="650"
          height="315"
          src={`https://www.youtube.com/embed/${video.split("=")[1]}`}
          frameBorder="0"
          title={`YouTube video player - ${id}`}
          id={id}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YoutubeVideo;

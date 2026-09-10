import Errorpage from "../ErrorPage/Errorpage";
import styles from "./YoutubeVideos.module.scss";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

function YoutubeVideos({ recipe }) {
  return (
    <div className={styles.container}>
      {recipe ? (
        recipe.map((element, index) => {
          return (
            <YoutubeVideo
              key={index}
              id={element.idMeal}
              video={element.strYoutube}
            />
          );
        })
      ) : (
        <Errorpage />
      )}
    </div>
  );
}

export default YoutubeVideos;

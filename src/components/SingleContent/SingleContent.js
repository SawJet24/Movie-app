import { Badge } from "@material-ui/core";
import {img_300, unavailable} from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    //(explain for primary and secondary color :https://color-wheel-artist.com/primary-colors/)
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average>6? 'primary' : 'secondary'}/>
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable } alt={title}
            />
            <strong className="title">{title}</strong>
            <h4 className="subTitle">
                {media_type === 'tv' ? "TV Series" : "Movie"}
                <span className="subTitle">{date}</span>
            </h4>
        </ContentModal>    

    )
};

export default SingleContent;
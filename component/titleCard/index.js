import PropTypes from 'prop-types'
import Image from 'next/image'

import style from '/styles/home.module.css'

const getDateFormat = (data) => { 
    const monthList = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Des"] 
    const date = new Date(data);
    const getDay = date.getDate() ? date.getDate() : 'xx';
    const getMonth = monthList[date.getMonth()] ? monthList[date.getMonth()] : 'month';
    const getYear = date.getFullYear() ? date.getFullYear() : 'xxxx';
    return getMonth + " " + getDay.toString() + " " + getYear.toString();
 }

const TitleCard = ({ imgURL, imgAlt, coverTitle, title, authorName, publishTime, imgSquare }) => {
    return ( 
        <article>
            {
                imgURL && (
                    <div className={imgSquare ? style.imgWraper2 : style.imgWraper1}>
                        <Image src={ imgURL } alt={ imgAlt ?? coverTitle } className="listContainer__img border-shadow" layout='fill' />
                    </div>
                )
            }
            <h2 className={style.card__title}>
                { title }
            </h2>
            <div className={style.card__publisherdate}>
                <span className="b-upperCase">{ authorName }</span> • {publishTime && getDateFormat(publishTime)}
            </div>
        </article>
     );
}

TitleCard.defaultProps = {
        imgURL: "Insert imgURL",
        imgAlt:"Insert imgAlt",
        coverTitle: "Insert coverTitle",
        title: "Insert title",
        authorName: "Insert authorName",
        publishTime: "Insert publishTime",
};

TitleCard.propTypes = {
    imgURL: PropTypes.string,
    imgAlt: PropTypes.string,
    coverTitle: PropTypes.string,
    title: PropTypes.string,
    authorName: PropTypes.string,
    publishTime: PropTypes.string,
}

export default TitleCard;
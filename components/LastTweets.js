import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';

function LastTweets(props) {
// let isLiked = false

function handleLike () { //<--- a mettre en ON CLICK sur le fontawesome icon coeur 
 
}

let iconStyle ={};
if (props.isLiked){
    iconStyle ={ 'color': "#FFA07A" }
}

    return (
        <div className={styles.main}>
            <div className={styles.userInfos}>
                <div>Name</div>
                <div>username</div>
                <img></img>
                <div>date</div>
            </div>
            <div className={styles.tweet}>Tweet</div>
            <div className={styles.iconsContainer}>
            <FontAwesomeIcon icon={faTrash} />
            <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
    )
}
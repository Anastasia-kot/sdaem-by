import Image from 'next/image'
import styles from './NewsCard.module.scss'
const room = require('../../assets/images/room.png');


export const NewsCard = () => {
    return (
        <div className={styles.Card}>
            <Image src={room} alt="" />
             <div className={styles.CardContent}>
                <h3>Линия Сталина: суровый отдых в усадьбах на сутки</h3>
                <p>Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...</p>
                    <div className={styles.CardContentFooter}>
                    <span className={styles.Date}>14 Января 2008</span>
                    <button className={styles.ReadButton}>Читать</button>
                    </div>
               
            </div>
        </div>
    )
}

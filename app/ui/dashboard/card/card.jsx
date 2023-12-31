import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Card = ({ item }) => {
	return (
		<div className={styles.container}>
			<MdSupervisedUserCircle size={24} />
			<div className={styles.texts}>
				<span className={styles.title}>Юзеры</span>
				<span className={styles.number}>10.273</span>
				<span className={styles.detail}>
					<span className={styles.positive}>12%</span> Больше чем в прошлую
					неделю
				</span>
			</div>
		</div>
	)
}

export default Card

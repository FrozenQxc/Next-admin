import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Последняя транкзация</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Имя</td>
						<td>Статус</td>
						<td>Дата</td>
						<td>Сумма</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image
									alt=''
									className={styles.avatar}
									src='/noavatar.png'
									width={40}
									height={40}
								/>
								Аква Самурай
							</div>
						</td>
						<td>
							<span className={`${styles.status} ${styles.pending}`}>
								Pending
							</span>
						</td>
						<td>30.11.2023</td>
						<td>$3.20</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image
									alt=''
									className={styles.avatar}
									src='/noavatar.png'
									width={40}
									height={40}
								/>
								Аква Самурай
							</div>
						</td>
						<td>
							<span className={`${styles.status} ${styles.pending}`}>
								Pending
							</span>
						</td>
						<td>30.11.2023</td>
						<td>$3.20</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image
									alt=''
									className={styles.avatar}
									src='/noavatar.png'
									width={40}
									height={40}
								/>
								Аква Самурай
							</div>
						</td>
						<td>
							<span className={`${styles.status} ${styles.pending}`}>
								Pending
							</span>
						</td>
						<td>30.11.2023</td>
						<td>$3.20</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image
									alt=''
									className={styles.avatar}
									src='/noavatar.png'
									width={40}
									height={40}
								/>
								Аква Самурай
							</div>
						</td>
						<td>
							<span className={`${styles.status} ${styles.pending}`}>
								Pending
							</span>
						</td>
						<td>30.11.2023</td>
						<td>$3.20</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Transactions

import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../ui/dashboard/users/users.module.css'
import Pagination from './../../ui/dashboard/pagination/pagination'

const UserPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder='Поиск пользователя' />
				<Link href='/dashboard/users/add'>
					<button className={styles.addButton}>
						Добавить нового пользователя
					</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Имя</td>
						<td>Email</td>
						<td>Дата создание</td>
						<td>Роль</td>
						<td>Статус</td>
						<td>Действие</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image
									src='/noavatar.png'
									alt='user'
									width={40}
									height={40}
									className={styles.userImage}
								/>
								Аква Самурай
							</div>
						</td>
						<td>test@gmail.com</td>
						<td>13.01.2022</td>
						<td>Админ</td>
						<td>Онлайн</td>
						<td className={styles.buttons}>
							<Link href='/'>
								<button className={`${styles.button}  ${styles.view}`}>
									Посмотреть
								</button>
							</Link>
							<Link href='/'>
								<button className={`${styles.button} ${styles.delete}`}>
									Удалить
								</button>
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination />
		</div>
	)
}

export default UserPage

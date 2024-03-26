import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../ui/dashboard/products/products.module.css'

const Products = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder='Поиск продукта' />
				<Link href='/dashboard/users/add'>
					<button className={styles.addButton}>
						Добавить нового пользователя
					</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Заголовок</td>
						<td>Описание</td>
						<td>Цена</td>
						<td>Дата создание</td>
						<td>Кол-во</td>
						<td>Действие</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.product}>
								<Image
									src='/noproduct.jpg'
									alt='user'
									width={40}
									height={40}
									className={styles.productImage}
								/>
								Бананы
							</div>
						</td>
						<td>Это бананы!</td>
						<td>100 рублей</td>
						<td>13.01.2022</td>
						<td>10</td>
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

export default Products

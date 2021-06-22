import Link from 'next/link'

import { fetchArticleList } from "/component/http/articleService";
import TitleCard from "/component/titleCard";
import AppLayout from "/component/appLayout"

import style from '/styles/home.module.css'

export async function getServerSideProps({ query }) {
	const {data} = await fetchArticleList({baseURL: "https://endeus.kurio.me/api/story", slug: query.slug, num: 12, published: "published", endeus: "endeus"});
	
	return {
		props: {
			data
		}
	}
}
	
const Container = ({data: articleList}) => {
	
	const renderContent = () => {
		if(articleList.length) {
			return (
					<AppLayout>
						<section className={style.listContainer}>
							<h1 className={`${style.listContainer__title} b-capitalize`}>{articleList[0].tag[0].name}</h1>
							<div className={style.listContainer__wrapperItem}>
								{
									articleList.map((data, index)  =>
										<Link key={index} href={`/detail/${data.slug}`} scroll={ false }>
											<a className={style.listContainer__listItem} >
												<TitleCard imgURL={ data.cover.url } imgAlt={ data.cover.alt }  coverTitle={ data.cover.title } authorName={ data.author.name } publishTime={ data.publish_time } title={ data.title }/>
											</a>
										</Link>
									)
								}
							</div>
						</section>
					</AppLayout>
			)
		}

		return null
	}

	return renderContent();
}

export default Container;
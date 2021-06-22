import React, {useState, useEffect} from "react"
import Link from 'next/link'

import { fetchResepList } from "/component/http/articleService";
import TitleCard from "/component/titleCard";
import AppLayout from "/component/appLayout"

import style from '/styles/home.module.css'

style.listContainer

export async function getServerSideProps({ query }) {
	const {data} = await fetchResepList({baseURL: "https://endeus.kurio.me/api/feed/recipe", sort: query.slug});
	
	return {
		props: {
			data
		}
	}
}
	
const Container = ({data}) => {
	
	const renderContent = () => {
		if(data) {
			return (
					<AppLayout>
						<section className={style.listContainer}>
							<h1 className={`${style.listContainer__title} b-capitalize`}>{data.title}</h1>
							<div className={style.listContainer__wrapperItem}>
								{
									data.items.map((data, index)  =>
										<Link key={index} href={`detail/${data.slug}`} scroll={ false }>
											<a className={style.listContainer__listItem} >
												<TitleCard imgURL={ data.thumbnail.url } imgSquare={true} imgAlt={ data.thumbnail.alt }  coverTitle={ data.title } authorName={ data.publisher.name } publishTime={ data.create_time } title={ data.title }/>
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
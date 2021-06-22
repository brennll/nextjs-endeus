import React, {useEffect, useState} from "react";

import {fetchResepDetail} from '/component/http/articleService';

import style from '/styles/detail.module.css'
import AppLayout from '/component/appLayout'

export async function getServerSideProps({ query }) {
	const {data} = await fetchResepDetail({baseURL: "https://endeus.tv/api/recipe/" + query.slug});
	
	return {
		props: {
			data
		}
	}
}

const Detail = ({ data: article }) => {
    
    const renderContent = () => {
        if(article) {
            return (
                <AppLayout>
                    <article className={ style.detailContainer }>
                        <div className={ style.imgWraper }>
                            {
                                article.video.url
                                ?
                                <video src={ article.video.url } style={{width: '100%'}}></video>
                                :
                                <img src={ article.thumbnail.url } alt={ article.thumbnail.alt ?? article.thumbnail.title } className={ style.coverIMG }/>
                            }
                        </div>
                        <div className={ style.detailContainer__content }>
                            <h1 className={ style.detailContainer__title }>{article.title}</h1>
                            <div className={ style.detailContainer__content } dangerouslySetInnerHTML={{__html: article.description}} />
                        </div>
                    </article>
                </AppLayout>
            )
        }
        return null
    }
    
    return renderContent()
}

export default Detail;
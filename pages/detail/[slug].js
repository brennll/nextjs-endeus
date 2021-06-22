import React, {useEffect, useState} from "react";

import {fetchArticleDetail} from '/component/http/articleService';

import style from '/styles/detail.module.css'
import AppLayout from '/component/appLayout'

export async function getServerSideProps({ query }) {
    const { data } = await fetchArticleDetail(query.slug)
    
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
                                article.cover.url && (
                                    <img src={ article.cover.url } alt={ article.cover.alt ?? article.cover.title } className={ style.coverIMG }/>
                                )
                            }
                        </div>
                        <div className={ style.detailContainer__content }>
                            <h1 className={ style.detailContainer__title }>{article.title}</h1>
                            <div className={ style['detailContainer__cover--caption'] }>{article.excerpt}</div>
                            <div className={ style.detailContainer__content } dangerouslySetInnerHTML={{__html: article.content}} />
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
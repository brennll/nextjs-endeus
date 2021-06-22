import axios from "axios";

const fetchArticleList = ({baseURL, slug, num, published, endeus,  type}) => axios.request({
	method: 'GET',
	baseURL: baseURL,
	params: {
		tag_slugs: slug,
		num: num,
		status: published,
		publication: endeus,
		type: type,
	}
});

const fetchArticleDetail = (slug) => axios.request({
	method: "GET",
	baseURL: "https://endeus.kurio.me/api",
	url: `/story/${slug}`,
});

const fetchResepList = ({baseURL, sort}) => axios.request({
	method: 'GET',
	baseURL: baseURL,
	params: {
		include_detail: 'false',
		sort: sort,
		limit: '20',
		cursor: 'MjAxOS0wMy0yNlQxNDo1MzozNSswNzowMA%3D%3D',
	}
});

const fetchResepDetail = ({baseURL}) => axios.request({
	method: 'GET',
	baseURL: baseURL,
})

export {
    fetchArticleDetail,
    fetchArticleList,
    fetchResepList,
		fetchResepDetail,
}
const API_URL = "http://127.0.0.1:3000/posts";

export const buildURL = () => {
    const url = new URL(API_URL);
    return url.href
}

const getData = () => {
    const url = buildURL()
    return fetch(url)
        .then((res) => res.json())
        .then((message) => {
            return message
        })
}

export default getData

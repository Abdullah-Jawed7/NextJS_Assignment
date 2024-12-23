export default async function Fetcher(url:string ){
    const data = await fetch(url)
    const res = await data.json()
    return res
}
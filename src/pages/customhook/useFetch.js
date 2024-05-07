import { useEffect, useState } from "react"


const useFetch=(url)=> {
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch(url)
        .then((res)=> res.json())
        .then((res)=> setData(res))
        
    }, [url])

    return [data];
}

export default useFetch;
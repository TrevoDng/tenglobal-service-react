import { useEffect, useState } from "react"


const useEmailFetch=([url, ...myData])=> {
    const [data, setData] = useState(null);

    useEffect(()=> {
        setData(myData);

        fetch(url, {
            method:"POST",
            Headers:{"Content-Type": "application/json"},
            body:JSON.stringify(data)
        }).then(()=> {
            console.log("Email is sent successfully");
        });
        
    }, [url])

    return [data];
}

export default useEmailFetch;
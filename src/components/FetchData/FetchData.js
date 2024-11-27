import { useEffect, useState } from "react";
import { useRevalidator } from "react-router-dom";

export default function FetchData(){
    const[post, setPost] = useState(null);

    // We are setting loading to be initally true so it shows 'loading...' before trying to fetch data
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/posts/1")
            .then((res) => res.json())
            .then((data) =>{
                setPost(data);
                setLoading(false); // If its successfully fetched data, then we can remove the 'loading...' text
            });
    }, []);

    return(
        <article>
            {
                // This is a tenary operator to check variable loading  is true or false
                loading ? 'loading...' : 
                <>
                <h1>{post?.title}</h1>
                <p>{post?.body}</p>
                </>
            }
        </article>
    );
}
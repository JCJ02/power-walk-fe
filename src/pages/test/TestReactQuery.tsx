import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

// Tranditional Way of FETCHING DATA using FETCH
// const fetchPosts = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = response.json();
//     console.log(data);
//     return data;
// }

// FETCHING DATA using AXIOS
const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = response.data;
    console.log(data);
    return data;
}

const TestReactQuery = () => {
    // Traditional Way of FETCHING DATA w/useEffect();
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const getPosts = async () => {
    //         const currentPosts = await fetchPosts();
    //         setPosts(currentPosts);
    //     }
    //     getPosts();
    // }, []);

    // console.log({ posts });

    // FETCHING DATA using React Query
    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return response.data;
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;

    console.log(data);

    return (
        <>
            {/* Tranditional Way of FETCHING DATA */}
            {/* <div>
                <Link to={"/test-1"}>Go to Test1</Link>
                <div>
                    {posts.length > 0 ? (
                        posts.map((post: any) => (
                            <div key={post.id}>
                                <h1>Title: {post.title}</h1>
                                <p>Description: {post.body}</p>
                            </div>
                        ))
                    ) : (
                        <p>404 NOT FOUND</p>
                    )}
                </div>
            </div> */}

            {/* // FETCHING DATA using React Query */}
            <div>
                <Link to={"/test-1"}>Go to Test1</Link>
                <div>
                    <h2>Posts</h2>
                    {data && data.map((post: any) => (
                        <div key={post.id}>
                            <h1>Title: {post.title}</h1>
                            <p>Description: {post.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TestReactQuery

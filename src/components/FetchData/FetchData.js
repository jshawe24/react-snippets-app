import { useEffect, useState } from "react";
import './FetchData.css';

export default function FetchData() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10; // 10 posts per page

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {
                // Filter for even-numbered IDs
                const evenPosts = data.posts.filter(post => post.id % 2 === 0);
                setPosts(evenPosts);
                setLoading(false);
            });
    }, []);

    // Calculate pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <article>
            {loading ? (
                'Loading...'
            ) : (
                <>
                    <h3>Fetching and displaying from an API</h3>
                    <p>This is a demonstration of:
                        <ul>
                            <li>Fetching data from an api</li>
                            <li>Fetching only data with an even id number</li>
                            <li>Paginating the results, 10 posts per page</li>
                        </ul>
                    </p>
                    <b>Total number of posts: {posts.length}</b>
                    {currentPosts.map(post => (
                        <div key={post.id} className="post-card">
                            <h3>{post.title}</h3>
                            <p>Tags: {post.tags.join(', ')}</p>
                            <p>Likes: {post.reactions.likes}</p>
                            <p>Dislikes: {post.reactions.dislikes}</p>
                            <p>Views: {post.views}</p>
                        </div>
                    ))}
                    <div className="pagination">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        <span> Page {currentPage} of {totalPages} </span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </article>
    );
}
"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export default function FetchExample2() {
    // Set the number of items per page
    const ITEMS_PER_PAGE = 10;

    // State for the current page
    const [page, setPage] = useState(0);

    const {
        data: posts,
        isError,
        isLoading,
        data: totalPosts,
    } = useQuery({
        queryKey: ["posts", { page }],
        queryFn: async () => {
            // Fetch based on the current page and number of items per page
            const response = await fetch(`${BASE_URL}/posts?_limit=${ITEMS_PER_PAGE}&_page=${page + 1}`); // _page is 1-indexed

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return await response.json();
        },
    });

    // Handle any potential errors
    if (isError) {
        return <div>Error fetching posts.</div>;
    }

    // Calculate the total number of posts (you can store this in the server-side or another query)
    const totalPostsCount = 100; // Since JSONPlaceholder has a total of 100 posts.

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalPostsCount / ITEMS_PER_PAGE);

    // Render the component
    return (
        <div className="tutorial">
            <h1 className="mb-4 text-2xl">Data Fetching in React</h1>
            <h2 className="text-lg mb-4">Total Posts: {totalPostsCount}</h2> {/* Display total count */}

            <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))} disabled={page === 0}>
                Previous Page
            </button>

            <button 
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))} 
                disabled={page >= totalPages - 1}
            >
                Next Page {/* Adjust page display */}
            </button>

            {isLoading && <div>Loading...</div>}

            {!isLoading && posts && (
                <div>
                    {/* Display the current page number */}
                    <h2 className="text-xl mb-4">Page {page + 1}</h2>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
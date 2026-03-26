import {use} from 'react'; // API

const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());


export default function UseExample({fetchPosts}) {
    const posts = use(fetchPosts); 
    return (
        <div>
            {
            posts.map((post) => (
                <div key={post.id}>
                        <h2>{post.title}</h2>
                </div>
            ))
        }
        </div>
    )
}
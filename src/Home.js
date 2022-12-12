import { useState } from "react";

const Home = () => { 
    const [blog, setBlog] = useState([
        { title : 'A new Website of Mine', body : 'Should you even visit this website', author : 'sidharth', id: 1},
        { title : 'Learning React Today', body : 'Should you learn react??', author : 'nithya', id: 2}
    ]);
    return (
        <div>
            {blog.map((blo) => (
                <div className = 'blog-preview' key={blo.id}>
                    <h2>{blo.title}</h2>
                    <p>Written by : {blo.author}</p>
                    <p>{blo.body}</p>
                </div>
            ))}
        </div>
    );
}
export default Home;
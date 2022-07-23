import React from 'react';

const Blog = () => {
    const blogs = [
        {tittle: 'What is React Js?', topics: 'react', post: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces or UI components. It lets you compose complex UIs from small and isolated pieces of code called “components”.', imageUrl: 'https://tinyurl.com/2p8wbmy3'},

        {tittle: 'What is JavaScript?', topics: 'javascript', post: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.', imageUrl: 'https://tinyurl.com/yc38zb3u'},

        {tittle: 'What is the difference between react angular and vue?', topics: 'discussion', post: 'React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they are not 100 percent the same, so it makes sense to compare them and understand their differences', imageUrl: 'https://tinyurl.com/yc6ecsk6'},

        {tittle: 'How to start web development for beginners?', topics: 'web', post: "It doesn't matter if you do not have a computer science degree. It doesn't matter if you have not written a single line of code in your life. I will give you the exact roadmap that you can follow and become a Self-Taught Web Developer. If you are passionate about learning something, you can absolutely do it.", imageUrl: 'https://tinyurl.com/27uxfa63'},
        {tittle: 'How to does react and angular work?', topics: 'discussion', post: "React is a library, but Angular is a full-fledged framework. The virtual DOM and one-way data binding are used by React. js, but the real DOM and two-way data binding are used by Angular. There's also a speed difference (React's is faster) and a difference in bundle size (React's is smaller) (React works a bit faster).", imageUrl: 'https://tinyurl.com/mpdwrdhe'},
        {tittle: 'How to can we test our code?', topics: 'codding', post: 'Modern trends and webapps have dramatically changed the way web developers can build. Obviously you need some type of IDE to code new files and save them for deployment. But what about just testing your code snippets? There are more tools available now than ever before!', imageUrl: 'https://tinyurl.com/32fcn3pb'},
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-5/6 mx-auto my-10'>

            {
                blogs.map((blog, i) =>
                    <div key={i} class="card  bg-base-100 shadow-xl">
                        <img src={blog.imageUrl} className='w-full' alt="" />
                <div class="card-body">
                    <h2 class="card-title">{blog.tittle}</h2>
                    <span className='text-primary font-semibold text-xs py-2 cursor-pointer'>Tag: {blog.topics}</span>
                    <p>{blog.post}</p>
                <a className='text-right pr-8 py-6 text-md font-semibold text-primary' target={'blank'} href={`https://www.google.com/search?q=${blog.tittle}`}>Explore More</a>
                </div>
            </div>
                 )
            }
            
        </div>
    );
};

export default Blog;
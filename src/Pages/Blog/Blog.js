import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-5/6 mx-auto my-10'>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card   bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"> What are the different ways to manage a state in a React application?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card   bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
            <div class="card   bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
            <div class="card   bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
            <div class="card   bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
        </div>
    );
};

export default Blog;
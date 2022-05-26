import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-5/6 mx-auto my-10'>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p>Here are some way to Optimizing performance in a React application: <br />
                        1. Don't duplicate code. <br />
                        2. Write custom hooks for that code that is duplicating. <br />
                        3. Using lazy loading system in images. <br />
                        4. Don't write codes that is unused. <br />
                        5. Dont write unused props in a component. Make sure that components receive only props that is necessary. <br />
                        6. Not drilling props. <br />
                        7. Using context api. <br />
                        8. Use component where code need to write twice.</p>
                </div>
            </div>
            <div class="card   bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"> What are the different ways to manage a state in a React application?</h2>
                    <p>There are four kinds of React State that need to manage in a react app. These are:  <br />
                        1. Local state. <br />
                        2. Global state. <br />
                        3. Server state. <br />
                        4. URL state.</p>
                </div>
            </div>
            <div class="card   bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>Prototypal Inheritance is a kind of methode that used to add methods and properties in javascript objects. By this method an object can inherit the properties and methods of another object. When it a property is missing from object, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. </p>
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
                    <p>Unit testing is somthing that ensures all code meets quality standards before it's deployed. Its a process where developers check their code before deploying codes in live.  It ensures  that the code is perfectly running.Unit testing saves time and money, and helps developers write better code, more efficiently and more standard.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
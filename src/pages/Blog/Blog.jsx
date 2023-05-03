import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import './Blog.css';
const Blog = () => {
    return (
        <>
            <div className='blog-bg'>
                <h2>Blog</h2>
            </div>
            <Container className='my-5'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
                        <Accordion.Body>
                            <p> In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state. A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component.</p><br />

                            <p>A controlled component is one where the value of the input element is controlled by the React state. This means that every time the user types something into the input field, the state of the component is updated with that value. The value of the input field is then set to be equal to the value in the state. This way, React always knows what the current value of the input field is.</p>
                            <br />
                            <p>On the other hand, an uncontrolled component is one where the value of the input element is not controlled by React state. Instead, it maintains its own internal state. This means that every time the user types something into the input field, React does not know what the current value of that field is</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. How to validate React props using PropTypes</Accordion.Header>
                        <Accordion.Body>
                            use PropTypes to validate the props of a React component. PropTypes is a package that allows you to specify the type of each prop that your component receives. This helps you catch bugs early on by ensuring that the props passed to your component are of the correct type
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Tell us the difference between nodejs and express js.</Accordion.Header>
                        <Accordion.Body>
                            <p>Node.js is a platform for building server-side event-driven I/O applications using JavaScript. It provides an environment for running JavaScript code on the server side1.</p>
                            <p>

                                Express.js is a framework based on Node.js that is used for building web applications. It provides a set of features for web and mobile applications such as routing, middleware, and templating1.</p>
                            <p>

                                In simpler terms, Node.js is a runtime environment for building server-side applications using JavaScript while Express.js is a framework that makes handling API requests and server management easier than using only Node.js2.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. What is a custom hook, and why will you create a custom hook?.</Accordion.Header>
                        <Accordion.Body>
                            <p>A custom hook is a JavaScript function that starts with the word “use” and can call other hooks. It allows you to extract component logic into reusable functions1.</p>
                            <p>

                                Custom hooks are useful when you have component logic that needs to be used by multiple components. They allow you to extract that logic into a reusable function that can be used across multiple components</p>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
};

export default Blog;
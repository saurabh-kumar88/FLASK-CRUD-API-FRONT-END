import React from 'react';
import Link from 'next/link';
// import fetch from 'isomorphic-fetch';

class About extends React.Component {
    static async getInitialProps() {
        const data = await fetch(`https://flask-crud-api-v1.herokuapp.com/books-api/v1/resources/getAll`);
        const items = await data.json();
        
        return {
            items
        };
    }
    render() {
        const { items } = this.props;
        const listItems = items.map((item) => 
        <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.publcation}</p>
        </div>)
        
        return (
            <div>
                <h1>Node.js Server Side Render in the Age of APIs</h1>
                    {/* { items.map((post) => 
                       <div>
                            <ul>
                                <li>{ post.title }</li>
                                <li>{ post.author }</li>
                                <li>{ post.publcation }</li>
                            </ul>
                       </div>
                    )} */}
                    <div>
                        {listItems}
                        <hr />
                    </div>
            </div>
        );
    }
}


// function About({posts}){
//     return <div>
//     <h1>Welcome to About page</h1>
//         {posts.map((post) => {
//             <li>{ post.title }</li>
//         })}
        
//     </div>
// }


// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries. See the "Technical details" section.
// export async function getServerSideProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('http://flask-crud-api-v1.herokuapp.com/books-api/v1/resources/getAll')
//     const posts = await res.json()
    
    
//     // By returning { props: posts }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }

export default About;
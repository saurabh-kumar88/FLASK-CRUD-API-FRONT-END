import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

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
        <div key={item.title}>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.publcation}</p>
        </div>)
        
        return (
            <Layout>
                <div className="col-6">
                    {listItems}
                </div>
            </Layout>      
        );
    }
}

export default About;
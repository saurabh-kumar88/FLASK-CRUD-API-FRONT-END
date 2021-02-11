import React from 'react';
import Layout from '../components/Layout';
import PaginationBasic from '../components/pagination';
import "bootstrap/dist/css/bootstrap.min.css";

class ListAll extends React.Component {
    static async getInitialProps() {
        const data = await fetch(`https://node-3collections-api-v1.herokuapp.com/api/v1/users/list-all-users`);
        const items = await data.json();
        
        return {
            items
        };
    }
    render() {
        const { items } = this.props;
        const listItems = items.map((item) => 
        <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.bio}</td>
        </tr>)
        
        return (
            <Layout>
                    <table className="col-6 col-s-10">
                        <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publication Date</th>
                        </tr>
                        { listItems }
                    </table>               
            </Layout>      
        );
    }
}

export default ListAll;
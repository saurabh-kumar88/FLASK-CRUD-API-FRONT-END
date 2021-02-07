import Header from './Header';
import NavBar from './NavBar';
import Head from 'next/head';

import './Layout.scss';
import './index.scss';
  
  const Layout = props => (
      
    <div className="Layout" style={layoutStyle}>
      <Head>
          <title>WHATABYTE</title>
          <mete name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8"/>
      </Head>

      <Header />
      <div className="Content">
        {props.children}
      </div>
      <NavBar />
      
    </div>
  );
  
  export default Layout;
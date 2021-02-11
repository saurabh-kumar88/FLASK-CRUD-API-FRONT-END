import Link from 'next/link';


  const NavBar = () => (
    
      
      <div className="col-3 col-s-3 menu">
        <ul>
          
          <Link href="/" passHref>
              <li>Home</li>
          </Link>

          <Link href="/ListAll" passHref>
            <li>Show All Books </li>
          </Link>
          
          <li>City</li>
          <li>Island</li>
          <Link href="/Books" passHref >
            <li>Flood</li>
          </Link>
          
        </ul>
        
      </div>
    
  );
  
  export default NavBar;
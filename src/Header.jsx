import picture1 from './Images/what-is-law.jpg'
function Header(){
    return(
        <header>
            <div className='page1'>
            <img src={picture1} alt="law"></img>
            <h1>LAWgig</h1>
            <nav>
              <ul>
                 <li><a href="#">Home</a></li>
                 <li><a href='#'>Projects</a></li>
                 <li><a href='#'>Associates</a></li>
                 <li><a href='#'>References</a></li>
              </ul>
            </nav>
            <hr></hr>
            </div>
        </header>
    );
}
export default Header
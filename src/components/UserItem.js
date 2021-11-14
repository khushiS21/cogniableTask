import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom' 
const UserItem = () => {
  const [users, setUsers] = useState([]);
  const [filteredUser,setFilteredUser]=useState([])
  const [displayFullArray,setDisplayFullArray]=useState(true);
  useEffect(() => {
    fetchData();
    //console.log(users)
  });

  const fetchData = () => {
    fetch('/data/MOCK_DATA.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const filterByName=(event)=>{
    !event.target.value?setDisplayFullArray(true):setDisplayFullArray(false);
    console.log(event.target.value)
    const initialArray=users?.filter(user=>user.name.includes(event.target.value));
    setFilteredUser(initialArray);
  }

  const filterByEmail=(event)=>{
    !event.target.value?setDisplayFullArray(true):setDisplayFullArray(false);
    console.log(event.target.value)
    const initialArray=users?.filter(user=>user.email.includes(event.target.value));
    setFilteredUser(initialArray);
  }

  const filterByManager=(event)=>{
    !event.target.value?setDisplayFullArray(true):setDisplayFullArray(false);
    console.log(event.target.value)
    const initialArray=users?.filter(user=>user.caseManager.includes(event.target.value));
    setFilteredUser(initialArray);
  }
  return  <>
  <section>
         <header>
        <div className="page-heading">
         <h2>Learners</h2>
         <p>Partners/Learners</p>
        </div>
        <div className="searches">
            <input type="text" placeholder="search by name"className="searchName" onChange={(e)=>filterByName(e)}></input>
            <input type="text" placeholder="search by emaill" className="searchEmail" onChange={(e)=>filterByEmail(e)}></input>
            <input type="text" placeholder="search by case manager" className="searchManager" onChange={(e)=>filterByManager(e)}></input>
            <button className="search-button">search</button>
          
        </div>
        </header>
        
        <div className="user-top">
          <p className="userHead">User</p>
          <p  className="emailHead">Email</p>
          <p className="loginHead">Last Login</p>
          <p className="managerHead">Case Manager</p>
          <p  className="tagsHead">Tags</p>
          <p className="intervention">Intervention</p>
        </div>
      
      </section>
  <ul className="user-list">
    {filteredUser && filteredUser.map((item) => {
    const {id ,name , email , lastLogin , caseManager , tags , image , contact}= item 
    return <li key= {id} className="users">
      <div className="user-detail">
        <img className="img" alt="pic" src={image}></img>
        <div className="credentials">
          <p>{name}</p>
          <p className="phone">{contact}</p>
          </div>
        </div>
        <div className="icon"><i className="fas fa-check-circle"></i></div>
        <div className="email">
        <i className="far fa-envelope"></i>
         <p> {email}</p>
        </div>
        <div className="login-detail">
        <i className="far fa-user"></i>
        <p>{lastLogin}</p>
        </div>
        <div className="manager">{caseManager}</div>
        <div className="tags">{tags}
        </div>
       <div className="btn">
         <Link to={{
             pathname: "/details",
            state: item}}>
              <button>Veiw details</button>
        </Link>
         <i class="fas fa-ellipsis-v"></i>
       </div>
        </li>
   })}
    {displayFullArray && users && users.map((item) => {
    const {id ,name , email , lastLogin , caseManager , tags , image , contact}= item 
    return <li key= {id} className="users">
      <div className="user-detail">
        <img className="img" alt="pic" src={image}></img>
        <div className="credentials">
          <p>{name}</p>
          <p className="phone">{contact}</p>
          </div>
        </div>
        <div className="icon"><i className="fas fa-check-circle"></i></div>
        <div className="email">
        <i className="far fa-envelope"></i>
         <p> {email}</p>
        </div>
        <div className="login-detail">
        <i className="far fa-user"></i>
        <p>{lastLogin}</p>
        </div>
        <div className="manager">{caseManager}</div>
        <div className="tags">{tags}
        </div>
       <div className="btn">
       <Link to={{
             pathname: "/details",
            state: item}}>
              <button>Veiw details</button>
        </Link>
         <i class="fas fa-ellipsis-v"></i>
       </div>
        </li>
   })}
 </ul>
 </>
}

export default UserItem;

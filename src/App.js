import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Shakib', 'Salman', 'Bappi', 'Shuvo'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$249.99'}
  ];
  const friends = [
    {id: 1, name: 'Fahim', age: 21, address: 'Digram'},
    {id: 2, name: 'Tanvir', age: 18, address: 'Godagrari'},
    {id: 3, name: 'Najia', age: 25, address: 'Rajshahi'},
    {id: 4, name: 'Kamal', age: 22, address: 'Dhaka'},
    {id: 5, name: 'Jhankar', age: 28, address: 'NewYork'}
  ];
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {
          friends.map(fd => <Friend friend={fd}></Friend>)
        }
        <Person name="Fahim" job="Footballer"></Person>
        <Person name="Tanvir" job="Freelancer"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Friend(props) {
  const friendStyle={
    border:'2px solid gold',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    margin: '10px'
  }
  const {id, name, address} = props.friend;
  return(
    <div style={friendStyle}>
      <h1>{id}</h1>
      <h3>{name}</h3>
      <h5>{address}</h5>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'250px',
    float:'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid cyan', width:'400px', margin:'20px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;

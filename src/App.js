import './App.css';

const App = (props) => {
  console.log(props)
  return (
      <div className='container'>
        <h1>{props.primero}</h1>
        <h1>{props.segundo}</h1>
        <h1>{props.tercero}</h1>
      </div>
    );
};

export default App;

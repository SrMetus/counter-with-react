import './App.css';

const App = (props) => {
  console.log(props)
  return (
      <div className='container'>
        <div className="row">
          <div className="col">
            <h1>{props.sexto}</h1>
          </div>
          <div class="col">
            <h1>{props.quinto}</h1>
          </div>
          <div class="col">
            <h1>{props.cuarto}</h1>
          </div>
          <div class="col">
            <h1>{props.tercero}</h1>
          </div>
          <div class="col">
            <h1>{props.segundo}</h1>
          </div>
          <div class="col">
            <h1>{props.primero}</h1>
          </div>
        </div>
      </div>
    );
};

export default App;

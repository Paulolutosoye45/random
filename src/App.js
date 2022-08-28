import './App.css';
import useFetch from './components/useFetch';


function App() {

  const { data, loading, error, refetch } = useFetch(
    "https://randomuser.me/api/?gender=female"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);
  console.log(data)
  return (
    <div className="App">
      <div className='card'>

      <img className="gender" src={data?.results[0].picture.large} alt=''/>
      <span>{data?.results[0].name.title}</span>
      <div className='names'>
      <h1>{data?.results[0].name.first}  {data?.results[0].name.last}</h1>
      </div>
      

      <p>{data?.results[0].gender}</p>

      <div class="buttons">
      <i class="fa fa-envelope" aria-hidden="true"></i>
            <h6>{data?.results[0].email}</h6>
        </div>

        <div class="buttons">
      <i class="fa fa-phone" aria-hidden="true"></i>
            <h6>{data?.results[0].phone}</h6>
        </div>
        <div class="buttons">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
            <h6>{data?.results[0].location.country}</h6>
        </div>
    </div>
      <button  className='next' onClick={refetch}>New user</button> 
    </div>
  );
}

export default App;

import './App.css';

function App() {

  let person= {
    name: "Madhav ++",
    age: 25,
    city: "Gambat",
    bestFriend: "wasif"
  };
  let { name, bestFriend } = person;
  document.write(name, bestFriend);  
  
  return (
    <>
    </>
  );
}

export default App;

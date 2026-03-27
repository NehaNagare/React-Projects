
import './App.css'

function App() {

let name="Neha";
let loggedIn=false;
let a=10;
let b=20;
  return (
    <>
      <h1>Welcome to our React App {name}.....</h1>

      <h2>{loggedIn ? "Login Success": "Login Failed"}</h2>
      <h2>sum = {a+b}</h2>
      <h2>Diff = {a-b}</h2>
      <h2>Multiply = {a*b}</h2>
      <h2>Div = {a/b}</h2>
      <h2>Mod = {a%b}</h2>
      <h2>Incr a = {++a}</h2>
    </>
  )
}

export default App

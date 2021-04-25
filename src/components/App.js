import Button from "./Button/Button";

function App() {

  const handleClick=()=>{
    console.log("siema!");
  }


  return(
      <>
        <Button type="warning" text="Counter" onClick={handleClick}/>
        <Button type="info" text="Counter" onClick={handleClick}/>
        <Button type="error" text="Counter" onClick={handleClick}/>
        <Button type="success" text="Counter" onClick={handleClick}/>
      </>
  )
}

export default App;

import { useState } from "react";



function App() {

  const [bilgi,bilgiGuncelle]=useState("")

  const fonksiyon1 = ()=>{

    alert("naber")
  }

  const fonksiyon2=(e)=>{
    bilgiGuncelle(e.target.value)}

  return (<>
   <input onChange={fonksiyon2 } type="text" placeholder="deneme"/>
    <button onClick={fonksiyon1}>Uyarı</button>
   <p>{bilgi.length<15 ? "15 karakteri geçemez doğru": ""}</p>
   </>
  );
}

export default App;

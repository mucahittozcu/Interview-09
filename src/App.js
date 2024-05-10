import React, { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [grow,setGrow] = useState(false)
  // KODUNUZ BURAYA GELECEK
  useEffect(() => {
   setGrow(true)
  },[])

  const handleClick = () => {
  setGrow((pre) => !pre)
  }
  return(
    <button onClick={handleClick} className={`bg-slate-200 min-w-20 border-2 max-w-64 min-h-fit max-h-64 border-slate-400 p-4 ${grow ? "duration-1000 w-60 h-60" : "duration-1000 w-20 h-20"}`}>{grow ? "Küçült": "Büyüt"}</button>
  )
};

export default App;

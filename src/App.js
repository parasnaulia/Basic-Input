import "./App.css";
import Compo1 from "./Compo1";
import { useState } from "react";
const App = () => {
  const [abchal, abchalf] = useState("");
  const bhawesh = (val) => {
    const newoj = {
      val1: val.value1,
      val2: val.value2,
      val3: val.value3,
      val4: val.value4,
    };
    console.log(newoj);

    abchalf(newoj);
  };
  // console.log(newoj);
  // console.log(abchal);
  // console.log();
  return (
    <>
      <Compo1 data={abchal} newval={bhawesh} />
    </>
  );
};

export default App;

/*
val1
: 
undefined
val2
: 
"bhawesh sinh"
val3
: 
"1234"
val4
: 
"#b54040"*/

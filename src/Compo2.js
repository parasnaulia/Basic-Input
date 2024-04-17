import React, { useRef } from "react";
import { useState } from "react";
import "./Compo2.css";
const Compo2 = (props) => {
  const [change, changefun] = useState("text"); //val2
  const changehandler = (event) => {
    changefun(event.target.value);
  };
  const [chanam, changeam] = useState(null); //val3
  const changehandler2 = (event) => {
    changeam(event.target.value);
  };

  const [chani, changeifun] = useState(null); //val1
  const [imageSrc, setImageSrc] = useState(null);
  const inref = useRef(null);

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     changeifun(reader.result);
  //   };

  //   reader.readAsDataURL(file);
  // };

  const handleImageUpload = (event) => {
    // console.log("This " + event.target.files[0]);
    // console.log(object)
    console.log("This is File");
    console.log(event.target.files[0]);
    changeifun(event.target.files[0]);
    // changeifun(event.target.value); // Get the selected file
    // Do something with the selected image file, such as uploading it to a server or displaying it in the UI
  };

  const [colorc, colorcfun] = useState(""); //val4
  const changehandler3 = (event) => {
    console.log(event.target);
    colorcfun(event.target.value);
  };

  const submithandler = (event) => {
    console.log(event.target.files);
    event.preventDefault();
    const myobject = {
      value1: chani,
      value2: change,
      value3: chanam,
      value4: colorc,
    };
    props.wahajaanewala(myobject);

    //console.log(myobject);
    changefun("");
    changeam("");
    changeifun("");
    colorcfun("");
  };

  return (
    <>
      <h1>AD customization</h1>
      <div className="formName">
        <div>
          <h4>customize your ad and get the templates accordingly</h4>

          <br></br>
          <h3>choose your image</h3>

          <input
            type="file"
            ref={inref}
            // accept="image/*"
            // multiple
            onChange={handleImageUpload}
            // accept="image/*"
          />

          <br></br>
          <br></br>

          <h3>Add your content</h3>
          <input
            type="text"
            className="wide-input"
            value={change}
            placeholder={change}
            onChange={changehandler}
          />
          <br></br>
          <br></br>
          <h3>choose your Amount</h3>
          <input
            type="number"
            className="wide-input"
            value={chanam}
            placeholder={chanam}
            step="0.01"
            onChange={changehandler2}
          />
          <br></br>
          <br></br>
          <h3>choose your color</h3>
          <input type="color" value={colorc} onChange={changehandler3} />
          <br></br>
          <br></br>
          <input type="submit" onClick={submithandler} />
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};
export default Compo2;

import React from "react";
// import { useState } from "react";

function About(props) {
   

  //  const [containerStyler,setContainerStyler] = useState();

  //  const [Styler,SetStyler] = useState({
  //    color: props.toggleMode === 'dark'? 'white':"black",
  //    backgroundColor:props.toggleMode === 'dark' ? "gray" : "white"
  //   });

  let Styler = {color: props.toggleMode === 'dark'? 'white':"black",
      backgroundColor:props.toggleMode === 'dark' ? "rgb(50 66 143)" : "white"}

  //  const [btnText,setBtnText] = useState("Enable Dark Mode");

  //  const Toggler = () => {

  //      if(Styler.color === "black"){
  //      setBtnText("Enable Light Mode");
  //      setContainerStyler({
  //         border:"2px solid gray",
  //      });
 
  //      SetStyler(
  //         {
  //            color: "white",
  //            backgroundColor: "black",
  //            border: "1px solid white"
  //         }
  //      );
  //   }else {
  //         setBtnText("Enable Dark Mode");
  //         SetStyler(
  //            {
  //               color: "black",
  //               backgroundColor: "white",
                
  //            }
  //         );
  //   }
  //  }
 
  return (
    <>
      <div className="container" style={Styler}>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item" style={Styler} >
            <h2 className="accordion-header" id="headingOne" >
              <button
                className="accordion-button"
                type="button" style={Styler}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
              <strong>Accordion Item #1</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={Styler}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button" style={Styler}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Accordion Item #2</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={Styler}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button" style={Styler}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Accordion Item #3</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <button className='btn btn-primary my-2' onClick={Toggler}>{btnText}</button> */}
      </div>
    </>
  );
  
  }
export default About;

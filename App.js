import React from "react";
import ReactDOM from "react-dom/client";

// const parentTag = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement(
//       "h1",
//       { id: "heading1" },
//       "Learning React is super cool"
//     ),
//     React.createElement("h2", { id: "heading2" }, "Excited to learn more"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement(
//       "h1",
//       { id: "heading1" },
//       "Learning React is super cool"
//     ),
//     React.createElement("h2", { id: "heading2" }, "Excited to learn more"),
//   ]),
// ]);

const FirstFuncComp = () => (<h1>Welcome saro!!!</h1>);
function WrapperComp () {
  return (
    <div>

      {FirstFuncComp()}
      <h2 style={{color:'red',backgroundColor:'aquamarine'}}>Happy to host you</h2>
    </div>
  )
}

const reactRoot = ReactDOM.createRoot(document.getElementById("mainroot"));
reactRoot.render(<WrapperComp ></WrapperComp>);

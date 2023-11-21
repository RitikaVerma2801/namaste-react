import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>ReactElement - JS Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);



//JSX - HTML-like or XML-like syntax
//JSX (transpiled before it reaches JS engine) - PARCEL - Babel
//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = (<h1 id="heading">Namaste React using JSX</h1>); 
console.log(jsxHeading);



const Title = () => (
 <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
);


//Component Composition
const HeadingComponent = () =>(
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React using Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);






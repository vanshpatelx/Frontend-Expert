import React from "react";
import ReactDOM from "react-dom/client";
console.log("hello");

const heading = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "hello A"),        
        React.createElement("h1", {}, "hello B"),
    ]),
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "hello A"),        
        React.createElement("h1", {}, "hello B"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
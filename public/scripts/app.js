"use strict";

console.log("hej");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var userName = 'Simon';
var userAge = 25;
var userLocation = 'Gothenburg';

var user = {
    name: 'Simon',
    age: '25',
    location: 'Gothenburg'
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

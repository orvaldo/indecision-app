console.log("hej");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!"
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var userName = 'Simon';
var userAge = 25;
var userLocation = 'Gothenburg';

var user = {
    name: 'Simon',
    age: '25',
    location: 'Gothenburg'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
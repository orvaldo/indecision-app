const appRoot = document.getElementById('app');

let visibility = false;

const toggleDetails = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility ? (
                <div>
                    <p>Here are some details!</p>
                </div>
            ) : (
                ''
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

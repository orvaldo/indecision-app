class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false,
        };
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible,
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible && <div>Details!</div>}
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);

/* const appRoot = document.getElementById('app');

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
 */

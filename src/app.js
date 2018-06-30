class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing four'],
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {options: []};
        });
    }
    handlePick() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[rand]);
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>
                    Remove all
                </button>
                {this.props.options.map((option) => (
                    <Option option={option} key={option} />
                ))}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <p>{this.props.option}</p>;
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        console.log(option);

        if (option) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

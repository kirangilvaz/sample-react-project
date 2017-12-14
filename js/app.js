var React = require('react');
var ReactDOM = require('react-dom');

var calculateSomething = function(str1, str2, str3) {
    var list = [str1,str2,str3];
    return list;
};

var Header = React.createClass({
    render: function () {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
});

var MyReactComponent = React.createClass({
    render: function () {
        var items = this.props.data.map(function (year, index) {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="somecssclass">Kiran</td>
                </tr>
            );
        });
        return (
            <table>
                <tbody>{items}</tbody>
            </table>
        );
    }
});

var MainApp = React.createClass({
    getInitialState: function() {
        return {
            str1: this.props.value1,
            str2: this.props.value2,
            str3: this.props.value3
        };
    },
    render: function () {
        var list = calculateSomething(this.state.str1, this.state.str2, this.state.str3);
        var number = 100;
        return (
            <div>
                <Header title="First React App"/>
                <div className="content">
                    <h2>Some text: <span>{number}</span></h2>
                    <MyReactComponent data={list}/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<MainApp value1="200000" value2="30" value3="5"/>,  document.getElementById("app"));
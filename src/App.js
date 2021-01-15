import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        let error = ''

        if (name === "age") {
            if (value !== '' && !Number(value)) {
                error = <strong>Age must be a number</strong>
            }
        }
        this.setState({
            errormessage: error
        })
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 offset-4">
                        <form>
                            <h2>Hey {this.state.username} {this.state.age}</h2>
                            <input 
                                className="form-control"
                                type="text" 
                                name="username"
                                placeholder="Username"
                                onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                className="form-control"
                                type="text" 
                                name="age"
                                placeholder="age"
                                onChange={this.handleChange}
                            />
                            {this.state.errormessage}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

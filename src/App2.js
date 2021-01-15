import React, { Component } from 'react'

class App2 extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        }
    }

    mySubmitHandler = (event) => {
        event.preventDefault()
        let age = this.state.age
        if (!Number(age)) {
            alert('Age must be a number')
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4">
                        <form onSubmit={this.mySubmitHandler}>
                            <h2>Hello {this.state.username} {this.state.age}</h2>
                            <label>Username:</label>
                            <input 
                                className="form-control"
                                type="text" 
                                name="username"
                                placeholder="Username"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label>Age:</label>
                            <input 
                                className="form-control"
                                type="" 
                                name="age"
                                placeholder="Age"
                                onChange={this.handleChange}
                            />
                            <br />
                            <button className="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App2

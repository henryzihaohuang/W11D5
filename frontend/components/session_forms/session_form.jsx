import React from 'react'
import { Link, Redirect} from 'react-router-dom';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
    };
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value})
  }

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user).then(()=> this.props.history.push('/'));
	}

  render() {
    const formType = this.props.formType;
    const oppFormType = formType === "Login" ? "signup" : "login"
    const errors = this.props.errors.map( error => {
      return (
        <li>{error}</li>
      )
    })
    
    return (
			<div>
				<h2>{formType}</h2>
				<Link to={`/${oppFormType}`}> {oppFormType} </Link>
				<ul>{errors}</ul>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
						/>
					</label>
					<br />
					<label>
						Password:
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
						/>
					</label>
					<br />
					<button value={formType}> Enter </button>
				</form>
			</div>
		);

  }
}

export default SessionForm;
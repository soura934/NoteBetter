import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         };
         this.handleSubmit = this.handleSubmit.bind(this);
         this.demoLogin = this.demoLogin.bind(this);
    }
    componentWillUnmount(){
        this.props.unmountErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
      }

      update(field) {
          return e => this.setState({
              [field]: e.currentTarget.value
          })
      }
      demoLogin(e) {
          e.preventDefault();
          const demo = {
              email: 'email@email.com',
              password: 'password'
          }
          this.props.login(demo);
      }

      renderErrors(){
          return(
              <ul>
                {
                this.props.errors.map((error , idx) => (
                   <li key={idx}>
                        {error}
                    </li>
                ))}
              </ul>
            
          )
      }

    render() { 
        
        return ( 
        <div className="screen">
            <form className="form" onSubmit={this.handleSubmit}>
            <div>
            <div className="logo-auth">
                <a href="/">
                    <img src="data:image/png;base64,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"/>
                </a>
            </div>
            <h1 className="header">Notebetter</h1>
            <p className="slogan">Remember everything important</p>
            </div>
            <ul>{this.renderErrors()}</ul>
            <div>
                <button className="demo" 
                onClick={this.demoLogin}>Demo Login
                </button>
                <p className="or">or</p>
            </div>
            <div className="input">
                    <input id="form-email"
                    type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                    />
            </div>
                <br />
                <div className="input">
                    <input className="input-form" 
                    type="password" 
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                    />
                </div>
                <br />
                <input className="submit-form" 
                type="submit" 
                value={this.props.formType}/>
            </form>
            
        </div>
         );
    }
}
 
export default SessionForm;
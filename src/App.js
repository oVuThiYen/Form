import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        txtName: '',
        txtPassword: '',
        txtContent: '',
        txtGender: 0,
        txtLanguage: 'EN',
        txtStatus: false
      },
      submitSuccess: false,
      newInfo: {}
    };
  }

  onHandleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      userInfo: { ...this.state.userInfo, [name]: value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitSuccess: true,
      newInfo: this.state.userInfo
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container my-5 text-left">
          <h1 className="text-center mb-4">Demo Form</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                name="txtName"
                value={this.state.txtName}
                onChange={this.onHandleChange} />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                type="password"
                className="form-control"
                name="txtPassword"
                value={this.state.txtPassword}
                onChange={this.onHandleChange} />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                className="form-control"
                rows="3"
                name="txtContent"
                onChange={this.onHandleChange}
                value={this.state.txtContent}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-control"
                name="txtGender"
                onChange={this.onHandleChange}
                value={this.state.txtGender}
              >
                <option value={0}>Nam</option>
                <option value={1} selected={this.state === 1}>Nữ</option>
              </select>
            </div>
            <div className="form-check">
              <label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="txtLanguage"
                  value="EN"
                  onChange={this.onHandleChange}
                  checked={this.state.userInfo.txtLanguage === 'EN'}
                />
                English
              </label>
              <br />
              <label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="txtLanguage"
                  value="VI"
                  onChange={this.onHandleChange}
                  checked={this.state.userInfo.txtLanguage === 'VI'}
                />
                Viet Nam
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="txtStatus"
                  value={true}
                  onChange={this.onHandleChange}
                  checked={this.state.userInfo.txtStatus === true}
                />
                Status
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >Submit</button>
          </form>
          <div className="info mt-4">
            {this.state.submitSuccess && <p>{JSON.stringify(this.state.newInfo)}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

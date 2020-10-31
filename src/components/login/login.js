import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
	state = {
		data: {
			login: '',
			password: ''	
		},
		error: false
	}
	render() {
		return(
			<div className = 'login'>
				<form className = 'login__form auth' onSubmit = {this.handleSubmit}>
					<h3 className = 'auth__title'>Авторизация</h3>
					<input 
								type = 'text'
								value = {this.state.data.login}
								onChange = {this.onHandleChangeName}
								placeholder = 'Логин или Email'
								required/>
					<input 
								type = 'password'
								value = {this.state.data.password}
								onChange = {this.onHandleChangeEmail}
								placeholder = 'Пароль'
								required/>
					<button  
								type = 'submit'>
								Войти
					</button>
					{/* {error} */}
				</form>
			</div>
		);
	}
}
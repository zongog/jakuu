import React, { Component } from 'react';
import axios from "axios";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
		id:'',
		password:''
	}
    }

    login = (e) => {
	e.preventDefault();
	console.log(this.state)
	let ServerAddr = 'http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:4001'   
        axios.post(ServerAddr+'/login',this.state)
        .then( res => {
		console.log(res.data.success)
		if(res.data.success){
			sessionStorage.setItem('dtoken',res.data.token);
			console.log(sessionStorage.getItem('dtoken'));
		/*여기에 로그인 성공시메인으로 자동  화면 전환 해야하는 코드 추가 할 것*/
		}
	})
        .catch( res => { 
		console.log(res);
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
        return(
      	<Container>
	<Form onSubmit={this.login}>
        <FormGroup>
          <Label for="id">Id</Label>
          <Input type="text" name="id" id="id" placeholder="id" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={this.handleChange} />
        </FormGroup>
	<Button>로그인</Button>
	</Form>
	</Container>
	);
    }
}

export default Login;

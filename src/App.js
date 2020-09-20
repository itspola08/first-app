import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment'

class App extends Component() {

  /* state={
     comments:[
       {
         "postId": 1,
         "id": 1,
         "name": "id labore ex et quam laborum",
         "email": "Eliseo@gardner.biz",
         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
       },
       {
         "postId": 1,
         "id": 2,
         "name": "quo vero reiciendis velit similique earum",
         "email": "Jayne_Kuhic@sydney.com",
         "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
       },
       {
         "postId": 1,
         "id": 3,
         "name": "odio adipisci rerum aut animi",
         "email": "Nikita@garfield.biz",
         "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
       }]
 
   }*/

  constructor(props) {
    super(props)// componente de los padres,POO
    this.state = { comments: [] }
  }

  ComponentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then(response => response.json())
      .then(result => this.setState({ comments: result }))//Asignacion del state, para q se pueda mostrar
      .then(json => console.log(json))
  }
  
  delComment = (id) => {
    console.log(id);
    this.setState({
      comments: [...this.state.comments.filter(item =>
        item.id !== id)]
    })
  }

  render() {
    console.log('taco', this.state.comments)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <Comment comments={this.state.comments} delComment={this.delComment} />
      </div>
    );
  }
}

export default App;

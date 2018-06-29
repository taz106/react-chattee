import React, { Component } from 'react';
import './App.css';

import {Sidebar} from "./container/sidebar";
import {MessagesList} from "./container/messagesList";
import {AddMessage} from "./container/addMessage";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;

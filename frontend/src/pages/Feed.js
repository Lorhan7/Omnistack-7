import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css';

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {
  state = {
    
  }
  async componentDidMount() {
    const response = await api.get('post')
  }
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span> NOME DO SU</span>
              <span className="place"> Macmas </span>
            </div>
            <img src={more} alt="sdas" />
          </header>
          
          <img src="http://localhost:4141/files/2021-02-27_16-31.png" alt="" />
          
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong> 9000 curtidas </strong>
            <p> 
              SDPJASPKDJASKJD
              <span> #macaco </span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span> NOME DO SU</span>
              <span className="place"> Macmas </span>
            </div>
            <img src={more} alt="sdas" />
          </header>
          
          <img src="http://localhost:4141/files/2021-02-27_16-31.png" alt="" />
          
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong> 9000 curtidas </strong>
            <p> 
              SDPJASPKDJASKJD
              <span> #macaco </span>
            </p>
          </footer>
        </article>
      </section>
    );
  } 
}

export default Feed;
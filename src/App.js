import React, { Component } from 'react';
import logo from './logo.svg';
import sound1 from './media//beats/1.mp3'
import sound2 from './media//beats/2.mp3'
import sound3 from './media//beats/3.mp3'
import sound4 from './media//beats/4.mp3'
import sound5 from './media//beats/5.mp3'
import sound6 from './media//beats/6.mp3'
import sound7 from './media//beats/7.mp3'
import sound8 from './media//beats/8.mp3'
import sound9 from './media//beats/9.mp3'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display:'------'
    }
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleDisplay(text){
    this.setState({
      display:text
    })
  }
  
  styleKeyPress(name,color){
    document.getElementById(name).click()
    document.getElementById(name).className = "btn btn-default btn-light drum-pad active";
    document.querySelector("body").style.transition = "0.2s"
    document.querySelector("body").style.background = color;
  }

  handleKeyOff(event){
    switch( event.keyCode ) {
      case 81:
          document.getElementById("pad1").className = 'btn btn-default btn-light drum-pad';
          break;
      case 87:
          document.getElementById("pad2").className = 'btn btn-default btn-light drum-pad';
          break;
      case 69:
          document.getElementById("pad3").className = 'btn btn-default btn-light drum-pad';
          break;
      case 65:
          document.getElementById("pad4").className = 'btn btn-default btn-light drum-pad';
          break;
      case 83:
           document.getElementById("pad5").className = 'btn btn-default btn-light drum-pad';
          break;
      case 68:
          document.getElementById("pad6").className = 'btn btn-default btn-light drum-pad';
          break;
     case 90:
          document.getElementById("pad7").className = 'btn btn-default btn-light drum-pad';
          break;
      case 88:
          document.getElementById("pad8").className = 'btn btn-default btn-light drum-pad';
          break;
      case 67:
          document.getElementById("pad9").className = 'btn btn-default btn-light drum-pad';
          break;
      default: 
          break;
    }

  }
  handleKeyPress(event){
    switch( event.keyCode ) {
      case 81:
          this.styleKeyPress("pad1","#EE7752");
          break;
      case 87:
          this.styleKeyPress("pad2","#E73C7E");
          break;
      case 69:
          this.styleKeyPress("pad3","#23A6D5");
          break;
      case 65:
          this.styleKeyPress("pad4","#23D5AB");
          break;
      case 83:
           this.styleKeyPress("pad5","#CD9361");
          break;
      case 68:
          this.styleKeyPress("pad6","#97031B");
          break;
     case 90:
          this.styleKeyPress("pad7","#00586F");
          break;
      case 88:
          this.styleKeyPress("pad8","#F9EAE5");
          break;
      case 67:
          this.styleKeyPress("pad9","#23D5AB");
          break;
      default: 
          break;
    }
  }

  componentWillMount(){
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyOff);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm app-header">
            <h4 class="rounded-top">Beat-Boxer</h4>
            <span>By Ramon Arredondo</span>
          </div>
          <div className="col-sm"></div>
        </div>
        <div className="row">
          <div className="col-sm filler"></div>
          
            <div className="col-sm bg-dark rounded" id="drum-machine"  >
              <div className="row">
                <div className="col-sm">
                <button className="btn btn-default btn-light drum-pad" id="pad1" onClick={()=>{this.handleDisplay("Sound1");document.getElementById("Q").play()}}>Q<audio src={sound1} className="clip" id="Q">
                <source  src={sound1} type="audio/mpeg" /></audio>
                </button>
                </div>
                <div className="col-sm">
                  <button className="btn btn-default btn-light drum-pad" id="pad2" onClick={()=>{this.handleDisplay("Sound2");document.getElementById("W").play()}}>W<audio src={sound2} className="clip" id="W">
                  <source  src={sound2} type="audio/mpeg" /></audio>
                  </button>
                </div>
                <div className="col-sm ">
                <button className="btn btn-default btn-light drum-pad" id="pad3" onClick={()=>{this.handleDisplay("Sound3");document.getElementById("E").play()}}>E<audio src={sound3} className="clip" id="E">
                <source  src={sound3} type="audio/mpeg" /></audio>
                </button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                <button className="btn btn-default btn-light drum-pad" id="pad4" onClick={()=>{this.handleDisplay("Sound4");document.getElementById("A").play()}}>A <audio src={sound4} className="clip" id="A">
                <source  src={sound4} type="audio/mpeg" /></audio>
                </button>
                </div>
                <div className="col-sm">
                  <button className="btn btn-default btn-light drum-pad" id="pad5" onClick={()=>{this.handleDisplay("Sound5");document.getElementById("S").play()}}>S<audio src={sound5} className="clip" id="S">
                  <source  src={sound5} type="audio/mpeg" /></audio>
                  </button>
                </div>
                <div className="col-sm ">
                <button className="btn btn-default btn-light drum-pad" id="pad6" onClick={()=>{this.handleDisplay("Sound6");document.getElementById("D").play()}}>D<audio src={sound6} className="clip" id="D">
                <source  src={sound6} type="audio/mpeg" /></audio>
                </button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                <button className="btn btn-default btn-light drum-pad" id="pad7" onClick={()=>{this.handleDisplay("Sound7");document.getElementById("Z").play()}}>Z<audio src={sound7} className="clip" id="Z">
                <source  src={sound7} type="audio/mpeg" /></audio>
                </button>
                </div>
                <div className="col-sm">
                  <button className="btn btn-default btn-light drum-pad" id="pad8" onClick={()=>{this.handleDisplay("Sound8");document.getElementById("X").play()}}>X<audio src={sound8} className="clip" id="X">
                  <source  src={sound8} type="audio/mpeg" /></audio>
                  </button>
                </div>
                <div className="col-sm ">
                <button className="btn btn-default btn-light drum-pad" id="pad9" onClick={()=>{this.handleDisplay("Sound9");document.getElementById("C").play()}}>C<audio src={sound9} className="clip" id="C">
                <source  src={sound9} type="audio/mpeg" /></audio>
                </button>
                </div>
              </div>
              <div className="row" id="bottom">
                <div class="col-sm"></div>
                <div class="col-sm"> <div id="display" class="text-center rounded">{this.state.display}</div></div>
                <div class="col-sm"></div>
              </div>
          </div>
          <div className="col-sm filler"></div>
        </div>
      </div>
    );
  }
}

export default App;

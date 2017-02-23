import React, { Component } from 'react';

require('./../styles/main.scss');

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.canvas = null
    this.updateCanvas = this.updateCanvas.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.mouseX = null
    this.mouseY
  }

  componentDidMount () {
    this.updateCanvas();
  }

  updateCanvas () {
    console.log('updateCanvas')
    this.canvas = document.getElementById('theCanvas')
    const ctx = this.canvas.getContext('2d');
    const rect = this.canvas.getBoundingClientRect();

    this.canvas.addEventListener('mousedown', 
      this.onMouseDown
    );
  }

  onMouseDown (e) {
    console.log('on Mouse Down', e)
    const ctx = this.canvas.getContext('2d');
    const rect = this.canvas.getBoundingClientRect();

    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    document.body.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove (e) {
    const ctx = this.canvas.getContext('2d');
    const rect = this.canvas.getBoundingClientRect();

    console.log('on Mouse Move')

    ctx.beginPath();
    ctx.moveTo(this.mouseX, this.mouseY);
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;
    ctx.lineTo(this.mouseX, this.mouseY);
    ctx.stroke();
  }

  onMouseUp (e) {
    this.canvas.removeEventListener("mousemove", this.onMouseMove);
    document.body.removeEventListener("mouseup", this.onMouseUp);
  }

  render () {
    return (
      <div>
        <h1>A very simple Image Editor</h1>
        <canvas id="theCanvas" width={1000} height={700} />
      </div>
    );
  }
}

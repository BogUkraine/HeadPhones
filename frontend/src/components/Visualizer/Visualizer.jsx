import React, { Component } from 'react';
import Spiral from './Spiral';
import Flower from './Flower';
import Barred from './Barred';
import Tricentric from './Tricentric';
import * as THREE from 'three';

class Visualizer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        visualizerNumber: 0
      }
      this.canvasRef = React.createRef()
      this.handleResize = this.handleResize.bind(this)
      this.changeVisualizer = this.changeVisualizer.bind(this)
    }
  
    componentDidMount() {
      // eslint-disable-next-line
      const ctx = new AudioContext()
      const player = document.getElementById('player')
      const src = ctx.createMediaElementSource(player)
      ctx.crossOrigin = 'anonymous'
      //player.current.crossOrigin = 'anonymous'
      let audioAnalyser = Object.assign({}, this.state.audioAnalyser)
      audioAnalyser = ctx.createAnalyser()
      src.connect(audioAnalyser)
      audioAnalyser.fftSize = 32768
      audioAnalyser.connect(ctx.destination)
      this.setState({ audioAnalyser })

      // set up shared renderer and canvasRef
      const [width, height] = [this.canvasRef.current.clientWidth, this.canvasRef.current.clientHeight]
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(width, height)

      setTimeout(() => {
        this.myAnimations = [
          new Barred(this.renderer, this.canvasRef, this.state.audioAnalyser),
          new Spiral(this.renderer, this.canvasRef, this.state.audioAnalyser),
          new Flower(this.renderer, this.canvasRef, this.state.audioAnalyser),
          new Tricentric(this.renderer, this.canvasRef, this.state.audioAnalyser),
        ]
        this.myAnimations[this.state.visualizerNumber].init()
    
        window.addEventListener('resize', this.handleResize)
        this.canvasRef.current.addEventListener('click', this.changeVisualizer)
      }, 1000)
      
    }
  
    componentWillUnmount() {
      this.myAnimations[this.state.visualizerNumber].stop()
      window.removeEventListener('resize', this.handleResize)
    }
  
    handleResize() {
      let [width, height] = [this.canvasRef.current.clientWidth, this.canvasRef.current.clientHeight]
      //this.camera.aspect = width / height
      //this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
      this.canvasRef.current.appendChild(this.renderer.domElement)
    }
  
    render() {
      return (
        <div className="visualizer" ref={this.canvasRef} id="visualizer"/>
      )
    }
  
    changeVisualizer() {
      this.myAnimations[this.state.visualizerNumber].stop()
      let visualizerNumber = (this.state.visualizerNumber + 1) % this.myAnimations.length
      this.setState({ visualizerNumber }, () => {
        this.myAnimations[this.state.visualizerNumber].init()
      })
    }
  }
  
export default Visualizer
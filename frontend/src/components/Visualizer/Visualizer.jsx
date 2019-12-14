import React, { Component } from 'react';
//import Tricentric from './Tricentric';
//import * as THREE from 'three'

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
      // set up shared renderer and canvasRef
      const [width, height] = [this.canvasRef.current.clientWidth, this.canvasRef.current.clientHeight]
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(width, height)
  
      this.myAnimations = [
        new Tricentric(this.renderer, this.canvasRef, this.props.audioAnalyser)
      ]
      this.myAnimations[this.state.visualizerNumber].init()
  
      window.addEventListener('resize', this.handleResize)
      this.canvasRef.current.addEventListener('click', this.changeVisualizer)
    }
  
    componentWillUnmount() {
      this.myAnimations[this.state.visualizerNumber].stop()
      window.removeEventListener('resize', this.handleResize)
    }
  
    handleResize() {
      let [width, height] = [this.canvasRef.current.clientWidth, this.canvasRef.current.clientHeight]
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
      this.canvasRef.current.appendChild(this.renderer.domElement)
    }
  
    render() {
      return (
        <div className={this.props.styles.visualizer} ref={this.canvasRef} />
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
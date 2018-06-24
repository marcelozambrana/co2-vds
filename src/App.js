import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleCalcular = this.handleCalcular.bind(this)
    this.handleLimpar = this.handleLimpar.bind(this)
  }
  handleCalcular() {
    const lencol_grPc = 60
    const top_grPc = 100
    const bottom_grPc = 300

    this.refs.lencos.value = parseInt(this.refs.lencos.value ? this.refs.lencos.value : 0, 10)
    this.refs.tops.value = parseInt(this.refs.tops.value ? this.refs.tops.value : 0, 10)
    this.refs.bottoms.value = parseInt(this.refs.bottoms.value ? this.refs.bottoms.value : 0, 10)

    const co2_sequestrada = 0.735
    const pegada_co2 = 0.0254

    const calculoAmoreiras = ((this.refs.lencos.value * lencol_grPc) +
      (this.refs.tops.value * top_grPc) +
      (this.refs.bottoms.value * bottom_grPc))

    const calculoCo2 = ((this.refs.lencos.value * lencol_grPc * co2_sequestrada)
      - (this.refs.lencos.value * lencol_grPc * pegada_co2)) +
      ((this.refs.tops.value * top_grPc * co2_sequestrada)
        - (this.refs.tops.value * top_grPc * pegada_co2)) +
      ((this.refs.bottoms.value * bottom_grPc * co2_sequestrada)
        - (this.refs.bottoms.value * bottom_grPc * pegada_co2))

    this.refs.resultado1.value = Math.round(calculoAmoreiras / 8.4).toLocaleString('pt')
    this.refs.resultado2.value = Math.round((calculoCo2 / 112) * 365).toLocaleString('pt')
  }
  handleLimpar() {
    this.refs.lencos.value = ''
    this.refs.tops.value = ''
    this.refs.bottoms.value = ''
    this.refs.resultado1.value = ''
    this.refs.resultado2.value = ''
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header clearfix" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img src={"/valedaseda.jpg"} style={{ width: '50px', height: '50px' }} />
          </div>
          <div className="jumbotron" style={{ paddingTop: '0px', paddingBottom: '15px', marginBottom: '5px' }}>
            <div className="row">
              <div className="col-sm text-justify" style={{ padding: '7px', fontSize: '20px' }}>
                <span><strong>How many pieces of silk do you have in your wardrobe?</strong></span>
              </div>
            </div>

            <div className="row" style={{ padding: '5px' }}>
              <div className="col-sm-12" style={{ padding: '5px' }}>
                <span><strong>Scarves</strong></span>
              </div>
              <div className="col-sm-12">
                <input className='form-control' type="number" placeholder='Qty of scarves' style={{ fontSize: '16px' }} ref='lencos' />
              </div>
            </div>
            <div className="row" style={{ padding: '5px' }}>
              <div className="col-sm-12" style={{ padding: '5px' }}>
                <span><strong>Tops (blouses, shirts etc)</strong></span>
              </div>
              <div className="col-sm-12">
                <input className='form-control' type="number" placeholder='Qty of Tops (blouses, shirts etc)' style={{ fontSize: '16px' }} ref='tops' />
              </div>
            </div>
            <div className="row" style={{ padding: '5px' }}>
              <div className="col-sm-12" style={{ padding: '5px' }}>
                <span><strong>Bottoms (skirts, trousers etc)</strong></span>
              </div>
              <div className="col-sm-12">
                <input className='form-control' type="number" placeholder='Qty of Bottoms (skirts, trousers etc)' style={{ fontSize: '16px' }} ref='bottoms' />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 text-justify" style={{ color: 'green', fontSize: '16px' }}>
              <strong>Check here how many mulberry trees were kept alive to produce the silk in your wardrobe *</strong>
            </div>
            <div className="col-sm-12 text-justify" style={{ display: 'flex' }}>
              <input className='form-control' type="text" ref='resultado1' style={{ width: '95px', margin: '10px', textAlign: 'center', fontSize: '16px' }} disabled='true' />
              <span style={{ padding: '12px' }}><strong>mulberry trees pesticide free</strong></span>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 text-justify" style={{ color: 'green', fontSize: '16px' }}>
              <strong>Check here how many days of use of your cell phone have been neutralized by these mulberry trees **</strong>
            </div>
            <div className="col-sm-12 text-justify" style={{ display: 'flex' }}>
              <input className='form-control' type="text" ref='resultado2' style={{ width: '95px', margin: '10px', textAlign: 'center', fontSize: '16px' }} disabled='true' />
              <span style={{ padding: '15px' }}><strong>days</strong></span>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-info" style={{ marginTop: "10px", marginRight: "10px" }} onClick={this.handleCalcular}>Enter</button>
              <button className="btn btn-info" style={{ marginTop: "10px", marginRight: "10px" }} onClick={this.handleLimpar}>Clear</button>
            </div>
          </div>

          <div className="row" style={{ marginTop: "40px", textDecoration: 'none' }}>
            <div className="col-sm-12 text-justify">
              <p><i><a href='http://iopscience.iop.org/article/10.1088/1757-899X/254/19/192008/meta;jsessionid=1CD3EFC723BA0472CCF5BFC47BF1C345.c2.iopscience.cld.iop.org' target="autex">
                (*) Silk Industry and Carbon Mitigation - AUTEX 2017</a></i></p>
              <p><i><a href='http://www.unesco.org/education/tlsf/mods/theme_c/img/grid/kick_full_lr.pdf' target="guideNeutrality">
                (**) Kick the Habit - A UN Guide to Climate Neutrality</a></i></p>
            </div>
          </div>

          <div className="row" style={{ marginTop: "35px", fontSize: '11px', textDecoration: 'none' }}>
            <div className="col-sm-12 text-justify">
              <p><bold><a href='http://eurekalabs.com.br/' target="eurekalabs">
                Developed by Eurekalabs</a></bold></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default App

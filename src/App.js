import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleCalcular = this.handleCalcular.bind(this)
    this.handleLimpar = this.handleLimpar.bind(this)
  }
  handleCalcular() {
    this.refs.lencos.value = this.refs.lencos.value ? this.refs.lencos.value : 0
    this.refs.tops.value = this.refs.tops.value ? this.refs.tops.value : 0
    this.refs.bottoms.value = this.refs.bottoms.value ? this.refs.bottoms.value : 0

    const x = (parseInt(this.refs.lencos.value, 10) * 7) + (parseInt(this.refs.tops.value, 10) * 12) + (parseInt(this.refs.bottoms.value, 10) * 35.72)
    this.refs.resultado1.value = Math.round(x)

    const y = (parseInt(this.refs.lencos.value, 10) * 139) + (parseInt(this.refs.tops.value, 10) * 231) + (parseInt(this.refs.bottoms.value, 10) * 694)
    this.refs.resultado2.value = Math.round(y)
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
          <div className="header clearfix">
            <h3 className="text-muted" style={{color: 'green'}}>Vale da Seda</h3>
          </div>
          <div className="jumbotron" style={{ paddingTop: "0px" }}>
            <div className="row">
              <div className="col-sm text-justify" style={{padding: "10px"}}>
                <h2>Informe quantas peças de seda você tem no seu guarda-roupas</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2">
                <span><strong>Lenços (unidades)</strong></span>
              </div>
              <div className="col-sm-3">
                <input className='form-control' type="number" placeholder='Qtde de Lenços' ref='lencos' />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <span><strong>Tops (unidades)</strong></span>
              </div>
              <div className="col-sm-3">
                <input className='form-control' type="number" placeholder='Qtde de Tops (blusa, túnica, etc)' ref='tops' />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <span><strong>Bottoms (unidades)</strong></span>
              </div>
              <div className="col-sm-3">
                <input className='form-control' type="number" placeholder='Qtde de Bottoms (saia, calça, etc)' ref='bottoms' />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <button className="btn btn-info" style={{ marginTop: "10px", marginRight: "10px" }} onClick={this.handleCalcular}>Calcular</button>
                <button className="btn btn-info" style={{ marginTop: "10px", marginRight: "10px" }} onClick={this.handleLimpar}>Limpar</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 text-justify" style={{color: 'green'}}>
              <h3>Veja aqui quantas amoreiras foram necessárias para produzir a seda em seu guarda-roupas *</h3>
            </div>
            <div className="col-sm-6">
              <input className='form-control' type="text" ref='resultado1' />
            </div>
            <div className="col-sm-5 text-justify">
              <h4><strong>amoreiras cultivadas sem agrotóxico</strong></h4>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 text-justify" style={{color: 'green'}}>
              <h3>Veja aqui quantos dias de uso de seu celular foram neutralizados por estas amoreiras **</h3>
            </div>
            <div className="col-sm-2">
              <input className='form-control' type="text" ref='resultado2' />
            </div>
            <div className="col-sm-5">
              <h4><strong>dias</strong></h4>
            </div>
          </div>

          <div className="row" style={{marginTop: "60px"}}>
            <div className="col-sm-12 text-justify">
              <p><i>(*) Silk Industry and Carbon Mitigation - AUTEX 2017</i></p>
              <p><i>(**) Kick the Habit - A UN Guide to Climate Neutrality</i></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default App

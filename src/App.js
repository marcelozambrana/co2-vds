import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleCalcularAmoreiras = this.handleCalcularAmoreiras.bind(this)
    this.handleCalcularDiaUsosNeutralizados = this.handleCalcularDiaUsosNeutralizados.bind(this)
    this.handleLimpar = this.handleLimpar.bind(this)
  }
  handleCalcularAmoreiras() {
    this.refs.lencos.value = this.refs.lencos.value ? this.refs.lencos.value : 0
    this.refs.tops.value = this.refs.tops.value ? this.refs.tops.value : 0
    this.refs.bottoms.value = this.refs.bottoms.value ? this.refs.bottoms.value : 0

    const x = (parseInt(this.refs.lencos.value, 10) * 7) + (parseInt(this.refs.tops.value, 10) * 12) + (parseInt(this.refs.bottoms.value, 10) * 35.72)
    this.refs.resultado1.value = Math.round(x)

  }
  handleCalcularDiaUsosNeutralizados() {
    this.refs.lencos.value = this.refs.lencos.value ? this.refs.lencos.value : 0
    this.refs.tops.value = this.refs.tops.value ? this.refs.tops.value : 0
    this.refs.bottoms.value = this.refs.bottoms.value ? this.refs.bottoms.value : 0

    const y = (parseInt(this.refs.lencos.value, 10) * 139) + (parseInt(this.refs.tops.value, 10) * 231) + (parseInt(this.refs.bottoms.value, 10) * 694)
    this.refs.resultado2.value = Math.round(y)
  }
  handleLimpar() {
    this.refs.lencos.value = ''
    this.refs.tops.value = ''
    this.refs.bottoms.value = ''
  }
  render() {
    const divStyle = {
      marginTop: "10px"
    }
    const divStyleFooter = {
      marginTop: "50px"
    }
    return (
      <div className="App">
        <div className="container">
          <div className="header clearfix">
            <h3 className="text-muted">Vale da Seda</h3>
          </div>
          <div className="jumbotron">
            <div className="row">
              <div className="col-sm">
                <h2>Informe quantas peças de seda você tem no seu guarda-roupas</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2">
                <span><strong>Peças</strong></span>
              </div>
              <div className="col-sm-3">
                <span><strong>Unidades</strong></span>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <span>Lenços</span>
              </div>
              <div className="col-sm-3">
                <input className='form-control input-sm' type="number" placeholder='Lenços' ref='lencos' />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <span>Tops</span>
              </div>
              <div className="col-sm-3">
                <input className='form-control input-sm' type="number" placeholder='Tops (blusa, túnica, etc)' ref='tops' />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <span>Bottoms</span>
              </div>
              <div className="col-sm-3">
                <input className='form-control input-sm' type="number" placeholder='Bottoms (saia, calça, etc)' ref='bottoms' />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
              </div>
              <div className="col-sm-3">
                <button className="btn btn-info" style={divStyle} onClick={this.handleLimpar}>Limpar</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <h3>Veja aqui quantas amoreiras foram necessárias para produzir a seda em seu guarda-roupas *</h3>
            </div>
            <div className="col-sm-2">
              <input className='form-control' type="text" ref='resultado1' />
            </div>
            <div className="col-sm-5">
              <h4>amoreiras cultivadas sem agrotóxico</h4>
            </div>
            <div className="col-sm-5">
              <button className="btn btn-info" onClick={this.handleCalcularAmoreiras}>Calcular</button>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <h3>Veja aqui quantos dias de uso de seu celular foram neutralizados por estas amoreiras **</h3>
            </div>
            <div className="col-sm-2">
              <input className='form-control' type="text" ref='resultado2' />
            </div>
            <div className="col-sm-5">
              <h4>dias</h4>
            </div>
            <div className="col-sm-5">
              <button className="btn btn-info" onClick={this.handleCalcularDiaUsosNeutralizados}>Calcular</button>
            </div>
          </div>

          <div className="row" style={divStyleFooter}>
            <div className="col-sm-12">
              <p>(*) Silk Industry and Carbon Mitigation - AUTEX 2017</p>
              <p>(**) Kick the Habit - A UN Guide to Climate Neutrality</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default App

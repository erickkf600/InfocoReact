import React from "react";

class Contador extends React.Component {
    render() {
        return(
            <section className="contador container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title titulo">Já Temos</h2>
                                <span className="linha-titulo bg-light"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="card mobile">
                            <div className="card-body">
                                <i className="fa fa-users"></i>
                                <h2 className="card-title numero">5000</h2>
                                <p>Acessos na Plataforma</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="card mobile">
                            <div className="card-body">
                                <i className="far fa-handshake"></i>
                                <h2 className="card-title numero">18</h2>
                                <p>Parceiros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        )
    }
}
export default Contador;

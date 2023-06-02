import React, { Component }  from "react"
export default class player extends Component{
    render() {
        return(
            <div className='container'>
                <div className="column">
                    <div className="card">
                        <img src='assets/images/cr.jpg'/>
                        <h3>Cristiano Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src='assets/images/kante.jpg'/>
                        <h3>N'golo Kante</h3>
                        <p className="title">Chelsea</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src='assets/images/messi.jpg'/>
                        <h3>Lionel Messi</h3>
                        <p className="title">Paris-Saint German</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src='assets/images/neymar.jpg'/>
                        <h3>Neymar Jr</h3>
                        <p className="title">Paris-Saint German</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src='assets/images/kane.jpg'/>
                        <h3>Harry Kane</h3>
                        <p className="title">Tottenham Hotspur</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src='assets/images/haaland.jpg'/>
                        <h3>Erling Haaland</h3>
                        <p className="title">Manchester City</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            </div>
        )
    }
}
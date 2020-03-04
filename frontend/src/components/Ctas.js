import React from 'react';
import '../App.scss';

class Ctas extends React.Component {
    render() {
        return (
            <>
                <div className="box">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="inventory link" />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="specials link" />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Contact link" />
                        </div>
                    </div>
                </div>
            </>





        )
    }
}

export default Ctas;
import React from 'react';
import '../App.scss';

class Secc2 extends React.Component {
    render() {
        return (
            <>
                <div className="box">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Secc2 heading" />
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <textarea className="textarea is-medium" placeholder="secc2 content textarea"></textarea>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Secc2;
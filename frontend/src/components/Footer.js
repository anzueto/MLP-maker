import React from 'react';
import '../App.scss';

class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="box">
                    <div class="field">
                        <div class="control">
                            <textarea className="textarea is-medium" placeholder="Footer content textarea"></textarea>
                        </div>
                    </div>


                    <div class="field">
                        <div class="control">
                            <textarea className="textarea is-medium" placeholder="schema code"></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <textarea className="textarea is-medium" placeholder="disclaimer"></textarea>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default Footer;

import React from 'react';
import '../App.scss';


class Intro extends React.Component {
    render() {
        return (
            <div className="box">
                <form action="">
                    <label htmlFor="title">Title</label>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="title" />
                        </div>
                    </div>

                    <label htmlFor="title">intro</label>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="intro" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Intro;

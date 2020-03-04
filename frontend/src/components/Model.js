import React from 'react';
import '../App.scss'

class Model extends React.Component {
    render() {
        return (
            <>
                <div className="box">
                    <div class="select">
                        <select>
                            <option>Year</option>
                            <option>2020</option>
                            <option>2021</option>
                        </select>
                    </div>

                    <div class="select">
                        <select>
                            <option>Make</option>
                            <option>Toyota</option>
                        </select>
                    </div>

                    <div class="select">
                        <select>
                            <option>Model</option>
                            <option>Corolla</option>
                        </select>
                    </div>

                    <div class="select">
                        <select>
                            <option>Template</option>
                            <option>T3</option>
                        </select>
                    </div>
                </div>

            </>
        )
    }
}

export default Model;
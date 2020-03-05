import React from 'react';
import '../App.scss';
import styled from 'styled-components';


const Select = styled.select`
 width:20%;
 font-size:18px;
 margin: 0 10px;
 min-width:150px;
`;


class Model extends React.Component {
    render() {
        return (
            <>

                <div className="box">
                    <Select>
                        <option>Year</option>
                        <option>2020</option>
                        <option>2021</option>
                    </Select>

                    <Select>
                        <option>Make</option>
                        <option>Toyota</option>
                    </Select>

                    <Select>
                        <option>Model</option>
                        <option>Corolla</option>
                    </Select>

                    <Select>
                        <option>Template</option>
                        <option>T3</option>
                    </Select>
                </div>

            </>
        )
    }
}

export default Model;
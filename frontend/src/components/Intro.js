import React from 'react';
import '../App.scss';
import styled from 'styled-components';

const Input = styled.input`
width:70%;
margin-left:10px;
`;

const Textarea = styled.textarea`
width:70%;
margin-left:10px;
margin-top:10px;
`;

const Label = styled.label`
width:20%;
font-size:18px;
`;

class Intro extends React.Component {
    render() {
        return (
            <div className="box">
                <form action="">

                    <div className="field">
                        <div className="control">
                            <Label htmlFor="title">Title</Label>
                            <Input className="input" type="text" placeholder="title" />
                        </div>
                    </div>


                    <div className="field">
                        <div className="control">
                            <Label htmlFor="title">intro</Label>
                            <Textarea className="textarea is-medium" placeholder="intro content"></Textarea>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Intro;

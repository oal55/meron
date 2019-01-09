import React, { Component } from 'react';

import './WelcomeScene.css';

const buttonPath = (
    "M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 " +
    "2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 " +
    "0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
);

class WelcomeScene extends Component {

    render() {
        return (
            <div className="WelcomeScene">

                <header>
                    <h1 className="WelcomeScene-title">Welcome to Meron</h1>
                    <p className="WelcomeScene-intro">Upload a csv file to get started.</p>
                </header>

                <div className="button-container">
                    <div className="button-encaps">
                        <input
                            type="file" id="file-inp" className="inputfile"
                            onChange={this.props.fileHandler} />
                        <label htmlFor="file-inp">
                            <figure><svg viewBox="0 0 20 17">
                                <path d={buttonPath} />
                            </svg></figure>
                        </label>

                    </div>
                </div>

            </div>
        );
    }
}

export default WelcomeScene;
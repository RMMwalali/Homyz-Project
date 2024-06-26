import React from 'react';

class Copyright extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: new Date().getFullYear()
        };
    }

    render() {
        return (
            <p style={{ color: "white" }}>© Patnan Investments. All Rights Reserved {this.state.currentYear}.</p>
        );
    }
}

export default Copyright;
import React, { Component } from 'react';

class Adsense extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
                <ins className='adsbygoogle'
                    style={{ display: 'inline-block', paddingTop: "1rem", maxHeight: "250px", width: "100%" }}
                    data-ad-client= 'ca-pub-7386611028385098'
                    data-ad-slot={this.props.slot}
                    data-ad-format= 'auto'
                    data-full-width-responsive="true"
                >
                </ins>
        );
    }
}

export default Adsense;
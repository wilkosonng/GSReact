import React, { Component } from 'react';

class Adsense extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
                <ins className='adsbygoogle'
                    style={{ display: 'inline-block', paddingTop: "2rem", maxHeight: "200px", width: "100%" }}
                    data-ad-client= 'ca-pub-7386611028385098'
                    data-ad-slot='9172261328'
                    data-ad-format= 'auto'
                    data-full-width-responsive="true"
                >
                </ins>
        );
    }
}

export default Adsense;
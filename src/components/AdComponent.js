import React, { Component } from 'react';
import { Mobile, Default } from './MobileCheckComponent'
import { Container } from 'reactstrap';

class Adsense extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <Container>
                <Default>
                    <ins className='adsbygoogle'
                        style={{ display: 'inline-block', paddingTop: "2rem", maxHeight: "120px", width: "100%" }}
                        data-ad-client= 'ca-pub-7386611028385098'
                        data-ad-slot='9172261328'
                        data-ad-format= 'auto'
                        data-full-width-responsive="true"
                    >
                    </ins>
                </Default>
                <Mobile>
                    <ins className='adsbygoogle'
                    style={{ display: 'inline-block', paddingTop: "2rem", maxHeight: "120px", width: "100%", maxWidth: "280px" }}
                    data-ad-client= 'ca-pub-7386611028385098'
                    data-ad-slot='9172261328'
                    data-ad-format= 'auto'
                    data-full-width-responsive="true"
                    >
                    </ins>
                </Mobile>
            </Container>

        );
    }
}

export default Adsense;
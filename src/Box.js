import React, {Component} from 'react';
import {Link} from 'react-router';

const box = (WrappedComponent, link) => {
    return class Box extends Component {
        render() {
            return (
                <div className='Box'>
                    <Link to={link || '/'} className='boxClose'>
                        <span>&times; </span>
                    </Link>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    };
};
export default box;

//ten box jest dekoratorm. Mamy tutaj funkcje wyzszego rzedu w srodku ktorej zwracana jest inna funkcja
//box- ten okalajacy dekorator

//sprobowac z tym boxem w sumie jest on wspolnym rodzicem dla forma importa i exporta

import React,{Component} from 'react';
import PropTypes from 'prop-types';


import Header from './Globals/Header';
import Content from './Globals/Content';
import Footer from './Globals/Footer';

import items from '../data/menu';

class App extends Component{
    static propTypes={
        children:PropTypes.object.isRequired
    };

    render(){
        const {children}=this.props;

        return (
            <div className="App">
                <Header 
                    title="Alep-Icabod"
                    items={items}
                />
                <Content body={children} />
                <Footer />
            </div>
        );
    }
}

export default App;
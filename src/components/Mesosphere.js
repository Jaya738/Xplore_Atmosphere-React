import React, { Component } from 'react';
import { Container,Row,Col} from 'react-grid-system';
import mesosphere from './reusable_components/images/mesolayer.png';

class Mesosphere extends Component {
    render() {
        return (
              <div>
                  <Row className="mesosphere" style={ {backgroundImage: 'url('+ mesosphere +')'}}>
                  </Row>
                  
              </div>
        );
    }
}
export default Mesosphere;



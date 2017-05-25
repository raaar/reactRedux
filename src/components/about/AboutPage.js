import React from 'react';
import {Link} from 'react-router';

// A stateless component could be used here on the page,
// however due to a limitation with hot reloading were stateless components
// will not hot-reload unless they have a parent that is a Class


class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

export default AboutPage;

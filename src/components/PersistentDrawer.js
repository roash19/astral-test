import React, {Component} from 'react';
import SideNav from './SideNav';
import MobileMenu from './MobileMenu';

class PersistentDrawer extends Component {
  render() {
    return (
      <div className="allcontent">
        <MobileMenu/>
        <SideNav/>
        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PersistentDrawer;

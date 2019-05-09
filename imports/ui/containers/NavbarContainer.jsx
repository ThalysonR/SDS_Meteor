import { withTracker } from 'meteor/react-meteor-data';

import Navbar from '../Navbar.jsx';

const NavbarContainer = withTracker(() => {
  const user = Meteor.user();
  return { user };
})(Navbar);

export default NavbarContainer;

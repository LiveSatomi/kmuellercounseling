import React from 'react';
import './Header.scss';

class HeaderProps {
}

class Header extends React.Component<HeaderProps> {
    render() {
        return (
          <div>
              <p className={"Header"}>hello</p>
          </div>
        );
    }
}

export default Header;
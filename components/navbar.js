const React = require('react');
const bootstrap = require('react-bootstrap');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Navbar = require('react-bootstrap/lib/Navbar');
const NavDropdown = require('react-bootstrap/lib/NavDropdown');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const Image = require('react-bootstrap/lib/Image');
const Button = require('react-bootstrap/lib/Button');

class NavBar extends React.Component {
    resizeText(multiplier){
      if (document.body.style.fontSize == "") {
        console.log(document.body.style.fontSize);
        document.body.style.fontSize = "1.4em";
      }
      document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
      console.log(document.body.style.fontSize);
    }  

  render() {
    return (         

          <Navbar className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <Navbar.Header>
              <Navbar.Brand>
                <a className="nav-btn" href="index.html" data-toggle="tooltip" data-placement="bottom" title="Autographa"><Image alt="Brand" src="../assets/images/logo.png"/></a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>              
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li>
  
                    <div className="btn-group navbar-btn strong verse-diff-on" role="group" aria-label="..." id="bookBtn">
                      <Button className="btn btn-default" data-toggle="tooltip" data-placement="bottom"  title="Select Book" href="javascript:getBookList();" id="book-chapter-btn">Genesis</Button>
                        <span id="chapterBtnSpan">
                          <Button className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Select Chapter" href="javascript:getBookChapterList('1');" id="chapterBtn">1</Button>
                        </span>
                    </div>
                    <div className="btn-group navbar-btn" role="group" aria-label="...">
                        <Button className="btn btn-default font-button plus" data-toggle="tooltip" data-placement="bottom"  title="Increase Font"  onClick={() => this.resizeText(1)}>A+</Button>
                      <Button className="btn btn-default font-button minus" data-toggle="tooltip" data-placement="bottom"  title="Decrease Font" onClick={() => this.resizeText(-1)}>A-</Button>
                    </div>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right verse-diff-on">
                  <li><a href="settings.html" data-toggle="tooltip" data-placement="bottom" title="Settings" className="nav-btn"><i className="fa fa-cog fa-2x"></i></a></li>
                  <li><a href="about.html" data-toggle="tooltip" data-placement="bottom" title="About" className="nav-btn"><i className="fa fa-info fa-2x"></i></a></li>
                  <li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Export" id="export-usfm"><i className="fa fa-cloud-download fa-2x"></i></a></li>
                </ul>
              </div>
            </Nav>
          </Navbar>
    )}       
};

module.exports = NavBar
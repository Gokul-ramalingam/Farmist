import React,{ Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import icon from '../../assets/menu.png'
import './Menu.style.scss'

class Sidebar extends Component{
    render(){
        var styles = {
            bmMenu: {
              overflow:'hidden'
            }
          }
          
        return(
        <Menu styles={styles} customBurgerIcon={ <img src={icon} alt="hamburger"/> }>
           <b id="home" className="menu-item" href="/"><i className="fa fa-home"></i> Home</b><br/>
           <b id="about" className="menu-item" href="/about"><i className="fa fa-car"></i> About</b><br/>
          <b id="contact" className="menu-item" href="/contact"><i className="fa fa-car"></i> Contact</b><br/>
          <b id="settings" className="menu-item" href="/settings"><i className="fa fa-home"></i> Settings</b><br/>
        </Menu>
        )
    }
}

export default Sidebar;
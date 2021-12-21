import './Header.css'
import NavButton from './molecules/NavButton'

const NavBar = () => {
    return (
    <>
        <div className="navbar-container">
            <NavButton button={"Personnages"}/>
            <NavButton button={"Planètes"}/>
            <NavButton button={"Episodes"}/>
        </div>
    </>
    )
}

export default NavBar
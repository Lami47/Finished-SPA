import { Link } from "react-router-dom"
import '../css/NavBar.css'

export default function NavBar(){
    return(
        <>
            <div className="NavGrid">
                <div className="NavGridSection1">

                </div>
                <div className="NavGridSection2">
                    <div className="NavBtns">
                        <Link to='/'>
                            Home
                        </Link>
                    </div>
                    <div className="NavBtns">
                        <Link to='/menu'>
                            Menu
                        </Link>
                    </div>
                    <div className="NavBtns">
                        <Link to='/cart'>
                            Cart
                        </Link>
                    </div>
                    <div className="NavBtns">
                        <Link to='/about-us'>
                            AboutUs
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
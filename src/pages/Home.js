import Footer from "../components/Footer"
import '../css/Home.css'

export default function Home(){
    return(
        <>
            <div>
                Welcoming Section with a few ideas of the restaruant + a few specials of the day
            </div>
            <div className="BriefOverview">
                <div className="SubGrid1">
                    {/* <img src="https://i.postimg.cc/XJRsWNvB/th-3.jpg" alt="Currently down" /> */}
                    <div className="SubGridImgs">
                        <img src="https://i.postimg.cc/XJRsWNvB/th-3.jpg" alt="Currently down" />
                    </div>
                    <div className="SubGridItem1">
                        aghsgdajfashjf
                    </div>
                </div>
                <div className="SubGrid2">
                    <div className="SubGridItem2">
                        aghsgdajfashjf
                    </div>
                    <div className="SubGridImgs">
                        <img src="https://i.postimg.cc/XJRsWNvB/th-3.jpg" alt="Currently down" />
                    </div>
                </div>
                brief view of vision and mission of fishifoods
            </div>
            <div>
                link to the menu
            </div>
            <div>
                Home page
            </div>
            <Footer/>
        </>
    )
}
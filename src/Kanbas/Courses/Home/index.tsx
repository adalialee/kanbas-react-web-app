import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaChevronDown, FaPlus, FaFileExport, FaBan, FaTimes, FaCalendar,
    FaArrowCircleRight, FaCircle, FaChartBar, FaCrosshairs, FaArrowAltCircleRight, FaBullhorn, FaBell} from "react-icons/fa";
import "./index.css";
import Modules from "../Modules";

function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-12 col-sm-7 d-sm-block flex-fill margin-right">
                    <Modules/>
                </div>
                <div className="medium d-none d-lg-block margin-right">
                    <div className="row">
                        <div className="col-12 top">
                            <button className="full-width left-align-text bottom-padding"><FaFileExport className="icon-padding-right"/>
                                Import Existing Control
                            </button>
                            <button className="full-width left-align-text bottom-padding"><FaArrowAltCircleRight className="icon-padding-right"/>
                                Import From Commons
                            </button>
                            <button className="full-width left-align-text bottom-padding"><FaCrosshairs className="icon-padding-right"/>
                                Choose Home Page
                            </button>
                            <button className="full-width left-align-text bottom-padding"><FaChartBar className="icon-padding-right"/>
                                View Course Stream
                            </button>
                            <button className="full-width left-align-text bottom-padding"><FaBullhorn className="icon-padding-right"/>
                                New Announcement
                            </button>
                            <button className="full-width left-align-text bottom-padding"><FaChartBar className="icon-padding-right"/>
                                New Analytics
                            </button>
                            <button className="full-width left-align-text bottom-padding"><FaBell className="icon-padding-right"/>
                                View Course Notifications
                            </button>
                        </div>
                    </div>
                    <h5 className="top">To Do</h5>
                    <hr/>

                    <div className="grid-row">
                        <label className="five">5</label>
                        <div>
                            <div className="ninety up">
                                <label className="red push">Grade A1 - ENV + HTML</label>
                                <label className="push">100 points &#183; Sep 18 at 11:59 PM</label>
                            </div>
                            <div className="ten x">
                                <FaTimes className="float-right"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="grid-row">
                        <label className="five">5</label>
                        <div>
                            <div className="ninety up">
                                <label className="red push">Grade A2 - CSS + BOOTSTRAP</label>
                                <label className="push">100 points &#183; Oct 2 at 11:59 PM</label>
                            </div>
                            <div className="ten x">
                                <FaTimes className="float-right"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;

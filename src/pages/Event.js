import React, { useState } from 'react';
import Eventheader from '../components/event/eventheader';
import EventCard from '../components/event/eventcard';

import TopNav from '../components/layout/TopNav';
import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi'; // Importing icons
import { FiPlusCircle, FiCamera, FiTruck } from 'react-icons/fi'; // Icons from react-icons
import { FaUtensils, FaGamepad } from 'react-icons/fa'; // Additional icons from react-icons/fa
import { useLocation } from "react-router-dom";
import './DiyalumaWaterfallAbseiling.css';

function DiyalumaWaterfallAbseiling() {
  
  
  // return (
  //   <div className="event-page">
  //     <TopNav />
  //     <div className="event-header">
  //       <Eventheader />
  //     </div>
  //     <div className="event-main-content">
  //       <div className="event-card">
  //         <div className="event-content">
  //           <h3 className="section-title">Diyaluma Waterfall Abseiling</h3>

  //           <div className="section">
  //             <p className="iconsection">
  //               <FiCalendar style={{ marginRight: '5px' }} />
  //               Saturday, Nov 30 • 08.00 AM IST
  //             </p>

  //             <p className="iconsection">
  //               <FiMapPin style={{ marginRight: '5px' }} />
  //               Diyaluma Waterfall
  //             </p>

  //             <p className="iconsection">
  //               <FiUser style={{ marginRight: '5px' }} />
  //               The Marvel Sri Lanka
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="event-header">
  //       <h3>More info</h3>
  //       <p>The Marvel Sri Lanka Proudly Presents</p>
  //       <h3 className="event-title">Diyaluma Waterfall Abseiling</h3>

  //       <div>
  //         <FaUtensils className="icon" /> Breakfast / Lunch / Snacks
  //       </div>
  //       <div>
  //         <FiPlusCircle className="icon" /> Insurance Cover - Up & Included
  //         Activities
  //       </div>
  //       <div>
  //         <FiTruck className="icon" /> Up & Down Transport From Colombo
  //       </div>
  //       <div>
  //         <FiCamera className="icon" /> DSLR Photography
  //       </div>
  //       <div>
  //         <FaGamepad className="icon" /> Drone Coverage
  //       </div>

  //       <div></div>
  //       <div>
  //         <p>Pick up Point: Colombo Fort</p>
  //         <p>Pick up Time: 12.30 AM</p>
  //         <p>Location: Diyaluma</p>
  //         <p>Event Start Time: 8.00 AM</p>
  //         <p>Event Duration: 1 Day</p>
  //         <p>Weight Limit: 110KG</p>
  //       </div>

  //       <EventCard />
  //     </div>
  //   </div>
  // );
  const location = useLocation();

  const eventData = location.state;
  console.log("eventDataeventData",eventData)

    // State for popup visibility
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // State for form data
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
    });
  
    // Handlers for form input changes
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handler for opening and closing the popup
    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
  
    // Handler for form submission
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data Submitted:', formData);
      // Close the popup
      setIsPopupOpen(false);
    };

    

  return (
    <div className="event-page">
      <TopNav />
      <div className="event-header">
        <Eventheader />
      </div>
      <div className="event-main-content">
        <div className="event-card">
          <div className="event-content">
            <h3 className="section-title">{eventData?.title}</h3>

            <div className="section">
              <p className="iconsection">
                <FiCalendar style={{ marginRight: '5px' }} />
                Saturday, Nov 30 • 08.00 AM IST
              </p>

              <p className="iconsection">
                <FiMapPin style={{ marginRight: '5px' }} />
                Diyaluma Waterfall
              </p>

              <p className="iconsection">
                <FiUser style={{ marginRight: '5px' }} />
                The Marvel Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="event-container">
        <div className="event-header">
          <h3>More info</h3>
          <p>The Marvel Sri Lanka Proudly Presents</p>
          <h3 className="event-title">Diyaluma Waterfall Abseiling</h3>

          <div>
            <FaUtensils className="icon" /> Breakfast / Lunch / Snacks
          </div>
          <div>
            <FiPlusCircle className="icon" /> Insurance Cover - Up & Included
            Activities
          </div>
          <div>
            <FiTruck className="icon" /> Up & Down Transport From Colombo
          </div>
          <div>
            <FiCamera className="icon" /> DSLR Photography
          </div>
          <div>
            <FaGamepad className="icon" /> Drone Coverage
          </div>

          <div></div>
          <div>
            <p>Pick up Point: Colombo Fort</p>
            <p>Pick up Time: 12.30 AM</p>
            <p>Location: Diyaluma</p>
            <p>Event Start Time: 8.00 AM</p>
            <p>Event Duration: 1 Day</p>
            <p>Weight Limit: 110KG</p>
          </div>
        </div>


        <div className="event-card-right">
        <EventCard imageSrc={eventData?.imgSrc} buyTickets={togglePopup} />
        </div>

 
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Enter Personal Details</h3>
            <form onSubmit={handleFormSubmit}>
              <div className=''>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              </div>
              <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              </div>
              <div>
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
              </div>
              <div className="popup-buttons">
              <button type="button" onClick={togglePopup}>
                  Cancel
                </button>
                <button type="submit">Submit</button>
               
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </div>
  );


}

export default DiyalumaWaterfallAbseiling;

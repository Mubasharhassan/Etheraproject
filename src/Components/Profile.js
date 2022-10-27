import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { HiPlusSm } from "react-icons/hi";
import { MdWifiCalling2 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Profile = () => {
  return (
    <>
      <div className="">
        <div class=" main-div-data">
          <h2>Profile</h2>
          <div>
            <button className="outlined11">
              <AddCircleRoundedIcon className="outlined-icon" />
              <span>Request Appoinments</span>
            </button>
          </div>
        </div>

        <form className="insurance-form">
          <div className="main-div-of-profile">
            <div className="clients-relationship-div1">
              <span>Please fill out these forms below</span>
            </div>

            <div className="member-group-plan-div">
              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>First Name</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>

              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Middle Name</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>
            </div>
            <div className="member-group-plan-div">
              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Last Name</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>

              <div className="member-company">
                <div>
                  <label className="label-name-div">
                    <span>Suffix</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>
            </div>

            <div className="member-group-plan-div">
              <div className="member-company1">
                <div>
                  <label>
                    <span className="label-name-div">Preferred Name</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>
            </div>

            <div className="clients-relationship-div2">
              <span>
                Used in place of first name across ether, as well as in client
                communication (reminders, billings documents,etc.)
              </span>
            </div>

            <div className="radio-div1">
              <input
                type="checkbox"
                id="html"
                name="fav_language"
                // value="Client"
                className="Radio-button-for-clients1"
              />
               
              <label for="html" className="radio-label">
                Client in a minor
              </label>
            </div>

            <div className="clients-radio-data1">
              <div className="radio-div2">
                <b className="status-text">Status :</b>
              </div>
              <div className="radio-div">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  legal Guardian
                </label>
              </div>
              <div className="radio-div">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  Parent
                </label>
              </div>
              <div className="radio-div">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  Family Member
                </label>
              </div>
              <div className="radio-div">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                <label for="html" className="radio-label">
                  Other
                </label>
              </div>
            </div>

            <div className="member-group-plan-div">
              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>First Name</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>

              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Last Name</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>
            </div>

            <div className="member-group-plan-div">
              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Phone</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>

              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Email</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>
            </div>

            <div className="Insurance-company">
              <div className="label-name-div">
                <label>
                  <span>Address</span>
                </label>
              </div>
              <div>
                <input
                  className="input-feild-insurance-company"
                  placeholder="Street Address"
                />
                {/* <IoMdArrowDropdown />  */}
              </div>
            </div>

            <div className="member-group-plan-div">
              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Member ID</span>
                  </label>
                </div>
                <div>
                  <input
                    className="input-feild-insurance-company"
                    placeholder="City"
                  />
                </div>
              </div>

              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Group ID</span>
                  </label>
                </div>
                <div>
                  <input
                    className="input-feild-insurance-company"
                    placeholder="AL"
                  />
                </div>
              </div>

              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Plan ID</span>
                  </label>
                </div>
                <div>
                  <input
                    className="input-feild-insurance-company"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
            </div>

            <div className="member-group-plan-div">
              <button className="outlined3">
                <HiPlusSm className="outlined-icon" />
                <span>Secondary Contact</span>
              </button>
            </div>
          </div>
          <hr className="hr-line-create" />

          <div className="phone-with-call-icon-in-profile">
            <button className="phone-with-icon-btn">
              <div className="icon-and-phonecall">
                <MdWifiCalling2
                  size={30}
                  className="outlined-icon-in-profile"
                />
                <b style={{ fontSize: "1rem" }}>Phone</b>
              </div>
            </button>
          </div>
          <div className="main-div-of-profile">
            <div className="member-group-plan-div1">
              <div className="member-company-in-profile-div">
                <div className="label-name-div">
                  <label>
                    <span>Member ID</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>

              <div className="radio-div-for-profile">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  yes, it's okay tou can send voice message in this number
                </label>
              </div>

              <div className="radio-div-for-profile">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  yes, it's okay tou can send text message in this number
                </label>
              </div>
            </div>
          </div>

          <hr className="hr-line-create" />

          <div className="phone-with-call-icon-in-profile">
            <button className="phone-with-icon-btn">
              <div className="icon-and-phonecall">
                <MdEmail size={30} className="outlined-icon-in-profile" />
                <b style={{ fontSize: "1rem" }}>Email</b>
              </div>
            </button>
          </div>
          <div className="main-div-of-profile">
            <div className="member-group-plan-div1">
              <div className="member-company-in-profile-div">
                <div className="label-name-div">
                  <label>
                    <span>Member ID</span>
                  </label>
                </div>
                <div>
                  <input className="input-feild-insurance-company" />
                </div>
              </div>
              <div className="radio-div-for-profile1">
                <b>Send email reminders for :</b>
              </div>

              <div className="radio-div-for-profile">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  yes, it's okay tou can send voice message in this number
                </label>
              </div>

              <div className="radio-div-for-profile">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  yes, it's okay tou can send text message in this number
                </label>
              </div>
            </div>
          </div>

          <hr className="hr-line-create" />

          <div className="address-icon-in-profile">
            <button className="address-with-icon-btn">
              <div className="icon-and-phonecall">
                <MdLocationOn size={30} className="outlined-icon-in-profile" />
                <b style={{ fontSize: "1rem" }}>Address</b>
              </div>
            </button>
            <div className="peragraph-in-address">
              <p>
                Required for insurance billing - please use the client's address
                they have on file their insurance provider
              </p>
            </div>
          </div>
          <div className="main-div-of-profile">
            <div className="Insurance-company-for-profile">
              <div className="label-name-div">
                <label>
                  <span>Address</span>
                </label>
              </div>
              <div>
                <input
                  className="input-feild-insurance-company"
                  placeholder="Street Address"
                />
                {/* <IoMdArrowDropdown />  */}
              </div>
            </div>

            <div className="member-group-plan-div">
              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Member ID</span>
                  </label>
                </div>
                <div>
                  <input
                    className="input-feild-insurance-company"
                    placeholder="City"
                  />
                </div>
              </div>

              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Group ID</span>
                  </label>
                </div>
                <div>
                  <input
                    className="input-feild-insurance-company"
                    placeholder="AL"
                  />
                </div>
              </div>

              <div className="member-company">
                <div className="label-name-div">
                  <label>
                    <span>Plan ID</span>
                  </label>
                </div>
                <div>
                  <input
                    className="input-feild-insurance-company"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="hr-line-create" />
          <div className="main-div-of-profile">
            <div className="billing-type-div">
              <b>Billing Type</b>
            </div>
            <div className="billing-type-in-profile-div">
              <span>
                How this client's will typically be paying for their services
              </span>
            </div>

            <div className="billing-type-data1">
              <div className="radio-div">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  Self-Pay
                </label>
              </div>
              <div className="radio-div">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  // value="Client"
                  className="Radio-button-for-clients"
                />
                 
                <label for="html" className="radio-label">
                  Insurance
                </label>
              </div>
            </div>
          </div>
          <hr className="hr-line-create" />

        </form>
      </div>
    </>
  );
};

export default Profile;

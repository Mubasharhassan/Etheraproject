import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { HiPlusSm } from "react-icons/hi";

const Profile = () => {
  return (
    <>
      <div>
        <div class=" main-div-data">
          <span className="header-pera">Profile</span>
          <button className="outlined11">
            <AddCircleRoundedIcon className="outlined-icon" />
            <span>Request Appoinments</span>
          </button>
        </div>

        <form className="insurance-form">
          <div className="clients-relationship-div1">
            <span>Please fill out these forms below</span>
          </div>

          <div className="member-group-plan-div">
            <div className="member-company">
              <div>
                <label>
                  <span>First Name</span>
                </label>
              </div>
              <div>
                <input className="input-feild-insurance-company" />
              </div>
            </div>

            <div className="member-company">
              <div>
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
              <div>
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
                <label>
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
                  <span>Preferred Name</span>
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
              <div>
                <label>
                  <span>First Name</span>
                </label>
              </div>
              <div>
                <input className="input-feild-insurance-company" />
              </div>
            </div>

            <div className="member-company">
              <div>
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
              <div>
                <label>
                  <span>Phone</span>
                </label>
              </div>
              <div>
                <input className="input-feild-insurance-company" />
              </div>
            </div>

            <div className="member-company">
              <div>
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
            <div>
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
              <div>
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
              <div>
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
              <div>
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
        </form>
      </div>
    </>
  );
};

export default Profile;

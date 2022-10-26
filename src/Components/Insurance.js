import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiCloudArrowUp } from "react-icons/hi2";
import { HiCloudArrowDown } from "react-icons/hi2";

const Insurance = () => {
  return (
    <>
      <div>
        <div class=" main-div-data">
          <h2>Insurance</h2>
          <button className="outlined">
            <AddCircleRoundedIcon className="outlined-icon" />
            <span>Request Appoinments</span>
          </button>
        </div>
        <form className="insurance-form">
          <div className="Insurance-company">
            <div>
              <label>
                <span>Insurance Company</span>
              </label>
            </div>
            <div>
              <input className="input-feild-insurance-company" />
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
                <input className="input-feild-insurance-company" />
              </div>
            </div>

            <div className="member-company">
              <div>
                <label>
                  <span>Member ID</span>
                </label>
              </div>
              <div>
                <input className="input-feild-insurance-company" />
              </div>
            </div>

            <div className="member-company">
              <div>
                <label>
                  <span>Member ID</span>
                </label>
              </div>
              <div>
                <input className="input-feild-insurance-company" />
              </div>
            </div>
          </div>
          <div className="clients-relationship-div">
            <span>Client's relationship to insured</span>
          </div>
          <div className="clients-radio-data">
            <div className="radio-div">
              <input
                type="radio"
                id="html"
                name="fav_language"
                // value="Client"
                className="Radio-button-for-clients"
              />
               
              <label for="html" className="radio-label">
                Client
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
                Client"s Spouse
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
                Client" Parents
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
          <div className="Insurance-upload-data">
            <span>Insurance</span>
            <br />
            <p>
              Upload an image of the front and back of your insurance card to
              keep on file
            </p>
          </div>

          <div className="Insurance-upload-cards">
            <div className="Insurance-upload-data-front">
              <div>
                <div>
                  <span className="front-side-insurance-card">
                    Front side of insurance Card
                  </span>
                </div>
                <div>
                  <HiCloudArrowUp size={"5rem"} />
                </div>
                <div>
                  <span className="front-side-insurance-card">
                    <b> Chooes file</b> or drag and drop file any JPG, PNG, PDF,
                    & DOC files
                  </span>
                </div>
              </div>
            </div>
            <div className="Insurance-upload-data-back">
              <div>
                <span className="front-side-insurance-card">
                  Back side of insurance Card
                </span>
              </div>
              <div>
                <HiCloudArrowDown size={"5rem"} />
              </div>
              <div>
                <span className="front-side-insurance-card">
                  <b> Chooes file</b> or drag and drop file any JPG, PNG, PDF, &
                  DOC files
                </span>
              </div>
            </div>
          </div>
          <hr className="hr-line-create" />
          <div className="Insurance-company">
            <b>Insurance Information</b>
          </div>
          <div className="Insurance-company-info">
            <div className="insurance-type-radio-btn">
              <div className="insurance-type-three-divs">
                <span>Insurance Type</span>
                <div className="radio-type-insurance">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    // value="Client"
                    className="Radio-button-for-clients"
                  />
                  <label for="html" className="radio-label-for-insurance-type">
                    Primary Insurance
                  </label>
                </div>
                <div className="radio-type-insurance">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    // value="Client"
                    className="Radio-button-for-clients"
                  />
                  <label for="html" className="radio-label-for-insurance-type">
                    Secondary Insurance
                  </label>
                </div>
                <div className="radio-type-insurance">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    // value="Client"
                    className="Radio-button-for-clients"
                  />
                  <label for="html" className="radio-label-for-insurance-type">
                    Other
                  </label>
                </div>
              </div>

              <div className="insurance-type-three-divs">
                <span>Who is the primary insured</span>
                <div className="radio-type-insurance">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    // value="Client"
                    className="Radio-button-for-clients"
                  />
                  <label for="html" className="radio-label-for-insurance-type">
                    Myself
                  </label>
                </div>
                <div className="radio-type-insurance">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    // value="Client"
                    className="Radio-button-for-clients"
                  />
                  <label for="html" className="radio-label-for-insurance-type">
                    Spouse
                  </label>
                </div>
                <div className="radio-type-insurance">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    // value="Client"
                    className="Radio-button-for-clients"
                  />
                  <label for="html" className="radio-label-for-insurance-type">
                    Parent/ Guardian
                  </label>
                </div>
                <div className="radio-type-insurance">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    // value="Client"
                    className="Radio-button-for-clients"
                  />
                  <label for="html" className="radio-label-for-insurance-type">
                    Other
                  </label>
                </div>
              </div>
              <div className="insurance-type-three-divs">
                <RiDeleteBin5Line size={30} />
               
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Insurance;

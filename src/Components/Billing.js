import React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const Billing = () => {
  return (
    <>
      <div>
        <div class=" main-div-data-for-billing">
          <button className="outlined-billing-icon">
            <AddCircleRoundedIcon className="outlined-icon" />
            <span>Payment Method</span>
          </button>
          <button className="outlined11">
            <AddCircleRoundedIcon className="outlined-icon" />
            <span>Request Appoinments </span>
          </button>
        </div>
        <div className="empty-div-in-billing">
          <p className="current-invoices-peragraph">Current Invoices</p>
        </div>
      </div>
    </>
  );
};

export default Billing;

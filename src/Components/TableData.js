import React from "react";

const TableData = () => {
  const ListItem = [
    {
      Date: "05/10/2022",
      Time: "8:00 AM",
      Location: "Ethera Irvine, Room1",
      Total: "1 hour",
    },
    {
      Date: "05/10/2022",
      Time: "8:00 AM",
      Location: "Ethera Irvine, Room2",
      Total: "1 hour",
    },
    {
      Date: "05/10/2022",
      Time: "8:00 AM",
      Location: "Ethera Irvine, Room3",
      Total: "2.5 hours",
    },
    {
      Date: "05/10/2022",
      Time: "8:00 AM",
      Location: "Ethera Irvine, Room9",
      Total: "1 hour",
    },
    {
      Date: "05/10/2022",
      Time: "8:00 AM",
      Location: "Ethera Irvine, Room10",
      Total: "1 hour",
    },
  ];
  return (
    <>
      <div>
        <table className="table">
          <tr>
            <th className="table-heading">Date</th>
            <th className="table-heading">Time</th>
            <th className="table-heading">Location</th>
            <th className="table-heading">Total</th>
          </tr>
          {ListItem.map((item, index) => (
            <tr className="table-row-data">
              <td className="table-data"><b>{item.Date}</b></td>
              <td className="table-data-time">{item.Time}</td>
              <td className="table-data-time">{item.Location}</td>
              <td className="table-data-time">{item.Total}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default TableData;

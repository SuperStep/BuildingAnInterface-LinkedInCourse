import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

class ListAppointments extends Component {
  render() {
    return (
      <div className="appointment-list item-list mb-3">
        {this.props.myAppointments.map((item) => (
          <div className="pet-item col media py-3" key={item.itemId}>
            <div className="mr-3">
              <button
                className="pet-delete btn btn-sm btn-danger"
                onClick={() => this.props.deleteAppointent(item)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span
                  className="pet-name"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    this.props.updateInfo(
                      "petName",
                      e.target.innerText,
                      item.itemId
                    )
                  }
                >
                  {item.petName}
                </span>
                <span className="apt-date ml-auto">
                  <Moment
                    date={item.aptDate}
                    parse="YYYY-MM-dd hh:mm"
                    format="YYYY MMM-D hh:mm"
                  />
                </span>
              </div>

              <div className="owner-name">
                <span
                  className="label-item"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    this.props.updateInfo(
                      "ownerName",
                      e.target.innerText,
                      item.itemId
                    )
                  }
                >
                  Owner:{" "}
                </span>
                <span>{item.ownerName}</span>
              </div>
              <div
                className="apt-notes"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  this.props.updateInfo(
                    "aptNotes",
                    e.target.innerText,
                    item.itemId
                  )
                }
              >
                {item.aptNotes}
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}

function getImage(image) {
  if (image === undefined) {
    return <p>No image</p>;
  } else {
    return <img src={`data:${image.mime};base64,${image.data}`} />;
  }
}

export default ListAppointments;

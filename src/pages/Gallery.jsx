import React, { useState } from "react";
import "../assets/css/style.css";


// Import images from src/assets/
import i1 from "../assets/1.jpeg";
import i2 from "../assets/2.jpeg";
import i3 from "../assets/3.jpeg";
import i4 from "../assets/4.jpeg";
import i5 from "../assets/5.jpeg";
import i6 from "../assets/6.jpeg";
import i7 from "../assets/7.jpeg";
import i8 from "../assets/8.jpeg";
import i9 from "../assets/9.jpeg";
import i10 from "../assets/10.jpeg";
import i11 from "../assets/11.jpeg";
import i12 from "../assets/12.jpeg";
import i13 from "../assets/13.jpeg";
import i14 from "../assets/14.jpeg";
import i15 from "../assets/15.jpeg";
import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";
import t4 from "../assets/t4.jpeg";
import t5 from "../assets/t5.jpeg";

// Create an image mapping object
const images = {
  i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, t1, t2, t3, t4, t5
};

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("finance-tab");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container-fluid" id="Gallery">
      <div className="row justify-content-center">
        <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
          {[
            { id: "design-tab", target: "design-tab-pane", label: "Our Villas" },
            { id: "marketing-tab", target: "marketing-tab-pane", label: "Tent Stay A Frame" },
            { id: "finance-tab", target: "finance-tab-pane", label: "Home Stay" },
          ].map((tab) => (
            <li className="nav-item" role="presentation" key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                id={tab.id}
                data-bs-toggle="tab"
                data-bs-target={`#${tab.target}`}
                type="button"
                role="tab"
                aria-controls={tab.target}
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
<br />
      {/* Tab Content */}
      <div className="tab-content mt-2" id="myTabContent">
        {[
          {
            id: "design-tab-pane",
            content: "Our Villas",
            images: ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "i11", "i12", "i13", "i14", "i15", "t1", "t2", "t3", "t4", "t5"],
          },
          {
            id: "marketing-tab-pane",
            content: "Staging Content",
            images: ["t1", "t2", "t3", "t4", "t5"],
          },
          {
            id: "finance-tab-pane",
            content: "Day to Dusk Content",
            images: ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "i11", "i12", "i13", "i14", "i15"],
          },
        ].map((pane) => (
          <div
            key={pane.id}
            className={`tab-pane fade ${activeTab === pane.id.replace("-pane", "") ? "show active" : ""}`}
            id={pane.id}
            role="tabpanel"
          >
            <div className="row">
              {pane.images.map((img, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card">
                    <img src={images[img]} className="card-img-top" alt={pane.content} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

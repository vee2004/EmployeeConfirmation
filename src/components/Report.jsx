import React, { useState } from "react";
import "../styles/PGHApproval.css";
import ViewPoliciesIcon from "../assets/svg/viewpolice.svg";
import NoteIcon from "../assets/svg/Note.svg";
import WorkflowIcon from "../assets/svg/workflow-icon.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  const [formData, setFormData] = useState({
    softwareCompetencyLevel: "NA",
    ghrJobCode: "RD-1123",
    internalJobCode: "Se",
    employeeName: "Amritanjan Kumar",
    employeeId: "23513215",
    division: "CTO-H/W IP LnbWR RTL Design",
    designation: "Lead Engineer",
    manager: "Naveen Srivastava",
    joiningDate: "05-Jun-2023",
    project: "IoT_Advanced_Features_DRI_ID_72025",
    confirmExtend: "confirm",
    rmJustification: "",
    attachment: null,
    evaluationData: [
      {
        category: "Functional Competencies",
        parameter: "Job understanding knowledge & skill",
        description: "Understands job duties and responsibilities. Possesses sufficient skill and knowledge to perform the job effectively & efficiently. Makes an effort to stay current with new developments.",
        rating: "2.5",
        remarks: "First time BIZ Contribution in Android..."
      },
      {
        category: "Functional Competencies", 
        parameter: "Planning & Organising",
        description: "Ability to prioritize workload, Ability to manage information flow, Effective utilisation of resources",
        rating: "2",
        remarks: "First time BIZ Contribution in Android..."
      },
      {
        category: "Functional competencies",
        parameter: "Deliverables", 
        description: "Attentive to detail & accuracy. Demonstrates thoroughness & completeness. Quality of work",
        rating: "3",
        remarks: "First time BIZ Contribution in Android..."
      },
      {
        category: "Functional competencies",
        parameter: "Dependability / Reliability",
        description: "Punctuality & regularity. Completes tasks On time. Meets commitments. Works independently. Handles change. Stays focused under pressure",
        rating: "3.5",
        remarks: "First time BIZ Contribution in Android..."
      },
      {
        category: "Functional competencies",
        parameter: "Initiative",
        description: "Self-directed, resourceful, creative toward meeting job objectives. Helps improve work processes.",
        rating: "2.5",
        remarks: "First time BIZ Contribution in Android..."
      },
      {
        category: "Behavioural traits",
        parameter: "Interpersonal Skills and Teamwork",
        description: "Treats peers with mutual respect. Demonstrates integrity and deals well with ethical and confidential matters. Works effectively with other employees/ depts in accomplishing specific tasks",
        rating: "4",
        remarks: "First time BIZ Contribution in Android..."
      }
    ],
    averageRating: 0,
    comment: ""
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onClick) onClick();
    // Replace with API integration
    // For now, just log the data so you can wire it later
    // eslint-disable-next-line no-console
    console.log("RequiredInfo submission", formData);
  };

  return (
    <div className={`required-info-section ${className}`}>
      {/* Required Information Header */}
      <div className="required-info-header">
        <svg
          className="clipboard-icon"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2501_12997"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="26"
          >
            <path d="M0 0H24V26H0V0Z" fill="white" />
          </mask>
        
        </svg>
        
      </div>

      <div className="info-card">
        {/* Competency Details Section */}
        <div className="competency-details">
          <div className="section-heading">Competency Details</div>
          <div className="note-icon">
            <img
              src={NoteIcon}
              alt="Note"
              width="29"
              height="29"
             
            />
            
          </div>
          
          <div className="competency-table-image">
            <div className="competency-header-image">
              <div className="competency-cell-header">Software Competency Level</div>
              <div className="competency-cell-header">GHR - Job Code</div>
              <div className="competency-cell-header">Internal - Job Code</div>
            </div>
            <div className="competency-row-image">
              <div className="competency-cell">{formData.softwareCompetencyLevel || 'NA'}</div>
              <div className="competency-cell">{formData.ghrJobCode || 'IRD_1123'}</div>
              <div className="competency-cell">{formData.internalJobCode || 'Se'}</div>
            </div>
          </div>
        </div>

        {/* Employee to Confirm Section */}
        <div className="employee-section">
          <div className="section-heading">Employee to Confirm</div>
          <div className="employee-table">
            <div className="employee-header">
              <div className="emp-col-name">Name</div>
              <div className="emp-col-id">Employee ID</div>
              <div className="emp-col-division">Division</div>
              <div className="emp-col-designation">Designation</div>
              <div className="emp-col-manager">Manager</div>
              <div className="emp-col-joining">Joining Date</div>
            </div>
            <div className="employee-row">
              <div className="emp-col-name">{formData.employeeName}</div>
              <div className="emp-col-id">{formData.employeeId}</div>
              <div className="emp-col-division">{formData.division}</div>
              <div className="emp-col-designation">{formData.designation}</div>
              <div className="emp-col-manager">{formData.manager}</div>
              <div className="emp-col-joining">{formData.joiningDate}</div>
            </div>
          </div>
        </div>

        {/* Confirmation/Extension Details */}
        <div className="confirmation-section">
          <div className="section-heading">Confirmation/Extension Details</div>
          
          <div className="project-section">
            <label className="project-label">Project  </label>
            <div className="select-wrapper">
              <select 
                className="project-select"
                value={formData.project}
                onChange={(e) => handleChange("project", e.target.value)}
              >
                <option value="IoT_Advanced_Features_DRI_ID_72025">IoT_Advanced_Features_DRI_ID_72025</option>
                <option value="other">Other Project</option>
              </select>
            </div>
          </div>

          <div className="confirm-extend-section">
            <div className="section-subheading">Confirm / Extend Probation</div>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="confirmExtend"
                  value="confirm"
                  checked={formData.confirmExtend === "confirm"}
                  onChange={(e) => handleChange("confirmExtend", e.target.value)}
                />
                <span>Confirm</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="confirmExtend"
                  value="extend"
                  checked={formData.confirmExtend === "extend"}
                  onChange={(e) => handleChange("confirmExtend", e.target.value)}
                />
                <span>Extend</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="confirmExtend"
                  value="not-confirmed"
                  checked={formData.confirmExtend === "not-confirmed"}
                  onChange={(e) => handleChange("confirmExtend", e.target.value)}
                />
                <span>Not Confirmed</span>
              </label>
            </div>
          </div>

        </div>

        {/* RM Justification / Reason */}
        <div className="rm-justification-section">
          <div className="section-subheading">RM Justification / Reason</div>
          <textarea
            className="justification-textarea"
            placeholder="xxx-xxx-xx-xxx-x"
            value={formData.rmJustification}
            onChange={(e) => handleChange("rmJustification", e.target.value)}
          />
        </div>

        {/* Evaluation Section */}
        <div className="evaluation-section">
          <div className="section-heading">Evaluation</div>
          <div className="evaluation-table">
            <div className="evaluation-header">
              <div className="eval-col-category">Category</div>
              <div className="eval-col-parameter">Parameter</div>
              <div className="eval-col-description">Parameter Description</div>
              <div className="eval-col-rating">RM Rating</div>
              <div className="eval-col-remarks">RM Remarks</div>
            </div>
            {formData.evaluationData.map((item, index) => (
              <div key={index} className="evaluation-row">
                <div className="eval-col-category">{item.category}</div>
                <div className="eval-col-parameter">{item.parameter}</div>
                <div className="eval-col-description">{item.description}</div>
                <div className="eval-col-rating">
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    max="5"
                    value={item.rating}
                    onChange={(e) => {
                      const newData = [...formData.evaluationData];
                      newData[index].rating = e.target.value;
                      setFormData(prev => ({ ...prev, evaluationData: newData }));
                    }}
                    className="rating-input"
                  />
                </div>
                <div className="evaluation-cell">
                  <input
                    type="text"
                    value={item.remarks}
                    onChange={(e) => {
                      const newData = [...formData.evaluationData];
                      newData[index].remarks = e.target.value;
                      setFormData(prev => ({ ...prev, evaluationData: newData }));
                    }}
                    className="remarks-input"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="average-rating">
            <span className="average-label">Average Final Rating:</span>
            <span className="average-value" style={{ color: "green" }}>3.0</span>
          </div>
         
        </div>

       
 

        {/* Comment Section */}


        {/* Submit Button */}
    

        {/* Transfer Workflow */}
   

        {/* View Policies */}
        <div className="view-policies-section">
          <div className="view-policies-link">
            <img
              src={ViewPoliciesIcon}
              alt="View Policies"
              width="20"
              height="20"
            />
            <span>View Policies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredInfo;

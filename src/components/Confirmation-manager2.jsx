import React, { useState } from "react";
import "../styles/Confirmation-manager2.css";
import ViewPoliciesIcon from "../assets/svg/viewpolice.svg";
import NoteIcon from "../assets/svg/Note.svg";
import WorkflowIcon from "../assets/svg/workflow-icon.svg";
import saveDraft from "../assets/svg/Icon.svg";

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

          <div className="rm-justification-section">
            <div className="section-subheading">RM Justification / Reason</div>
            <textarea
              className="justification-textarea"
              placeholder="xxx-xxx-xx-xxx-x"
              value={formData.rmJustification}
              onChange={(e) => handleChange("rmJustification", e.target.value)}
            />
          </div>
        </div>

        {/* Attachment Section */}
        <div className="attachment-section">
          <div className="section-heading">Attachment</div>
          <div className="upload-section">
            <div className="upload-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#F0F2F5"/>
                <path d="M28 22.6667C28.5304 22.6667 29.0391 22.8774 29.4142 23.2525C29.7893 23.6276 30 24.1362 30 24.6667C30 26.8773 28.21 28.6667 26 28.6667H14C11.79 28.6667 10 26.8773 10 24.6667C10 22.6613 11.5553 21.0027 13.5 20.72V20.6667C13.5 18.136 15.634 16 18.1667 16C20.148 16 21.8427 17.2453 22.5 18.9173C22.6827 18.8853 22.864 18.8667 23.0507 18.8667C25.7893 18.8667 28 20.544 28 22.6667Z" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 22.6667L20 12M20 12L22.5 14.5M20 12L17.5 14.5" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="upload-text">
              <div className="upload-title">Upload Document</div>
              <div className="upload-subtitle">PDF format • Max 3MB</div>
            </div>
            <button className="upload-button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8.66667L8 4.66667M8 4.66667L12 8.66667M8 4.66667V11.3333" stroke="#007BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Upload
            </button>
          </div>
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
          <div className="evaluation-footer">
            <div className="average-rating">
              <span className="average-label">Average Final Rating:</span>
              <span className="average-value">0</span>
            </div>
            <button className="save-draft-button">
              <img src={saveDraft} alt="Save as Draft" />
              <span>Save as Draft</span>
            </button>
          </div>
        </div>

        {/* Comment Section */}
        <div className="comment-section">
          <div className="section-heading">Comment (Max 500 Chars)</div>
          <textarea
            className="comment-textarea"
            placeholder="xxx-xxx-xx-xxx-x"
            maxLength={500}
            value={formData.comment}
            onChange={(e) => handleChange("comment", e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="submit-section">
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {/* Transfer Workflow */}
        <div className="transfer-workflow">
          <div className="transfer-icon">
            <img src={WorkflowIcon} alt="Transfer Workflow" />
          </div>
          <span>Transfer Workflow</span>
          <div className="transfer-arrow-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="#343A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

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

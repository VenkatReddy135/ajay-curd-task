import React from "react";
import PropTypes from "prop-types";
import CustomInput from "../../shared_components/CustomInput";
import CustomButton from "../../shared_components/CustomButton";

export default function CustomForm(props) {
  return (
    <div>
      <form className="CustomForm">
        <div className={`container border border-info p-4 mt-4`}>
          <h2>{props.formData?.employee_name} Details:</h2>
          <div className="row">
            <div className="col-4">
              <label>Employee Name:</label>
              <CustomInput
                inputType="text"
                inputValue={props.formData?.employee_name}
                inputClass={`${
                  props.mode === "view" ? "border-0" : ""
                } form-control inputWidth`}
              />
            </div>
            <div className="col-4">
              <label>Employee Age:</label>
              <CustomInput
                inputType="text"
                inputValue={props.formData?.employee_age}
                inputClass={`${
                  props.mode === "view" ? "border-0" : ""
                } form-control inputWidth`}
              />
               </div>
                <div className="col-4">
                <label>Employee Salary:</label>
                <CustomInput
                  inputType="text"
                  inputValue={props.formData?.employee_salary}
                  inputClass={`${
                    props.mode === "view" ? "border-0" : ""
                  } form-control inputWidth`}
                />
              </div>
           
            {/* <div className="row">
            
            </div> */}
            <div className="row">
              <CustomButton
                buttonClass={`button btn btn-secondary backButton`}
                handleClick={props.buttonAction}
                buttonValue={props.buttonText}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
CustomForm.propTypes = {
  formData: PropTypes.any.isRequired,
  mode: PropTypes.string,
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func.isRequired,
};

CustomForm.defaultProps = {
  formData: {},
  buttonAction: () => {},
};

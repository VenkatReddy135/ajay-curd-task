/* eslint-disable react/destructuring-assignment */
import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import CustomButton from "../../shared_components/CustomButton";
import SimpleModal from "../../shared_components/CustomModal";
import CustomToaster from "../../shared_components/CustomToaster";
import CustomInput from "../../shared_components/CustomInput";
import { useNavigate } from "react-router-dom";
import { searchData, getAll, deleteOne } from "../../utils/helperFunction";

const Headers = {
  empName: "Employee Name",
  empAge: "Employee Age",
  empSalary: "Employee Salary",
  actions: "Actions",
};

const labelMapping = {
  NO: "No",
  VIEW: "View",
  YES: "Yes",
};

const TableHeader = memo((props) => {
  return (
    <>
      <th>{Headers.empName}</th>
      <th>{Headers.empAge}</th>
      <th>{Headers.empSalary}</th>
      <th>{Headers.actions}</th>
    </>
  );
});

export default function CustomList(props) {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState([]);
  const [show, setShow] = useState({ show: false, id: null });
  const [showToast, setShowToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [filteredData, setFilteredData] = useState(employeeData);

  const handleShow = (user) => {
    setShow((prevState) => ({ ...prevState, show: true, id: user.id }));
  };
  const handleClose = () =>
    setShow((prevState) => ({ ...prevState, show: false }));

  const viewEmployeeDetails = (empData) => {
    navigate(`/${empData.id}`);
  };

  const handleSuccess = useCallback(() => {
    let response;
    const clickedId = show.id;
    const deleteCall = async () => {
      response = await deleteOne(props.deleteResource, clickedId);
      setSuccessMessage(response?.data.message);
      setShowToast(true);
    };
    deleteCall();
    setShow((prevState) => ({ ...prevState, show: false }));
  }, [show.id]);

  useEffect(() => {
    const getAllData = async () => {
      const res = await getAll(props.getAllResource);
      setEmployeeData(res.data);
      setFilteredData(res.data);
    };
    getAllData();
  }, []);

  const handleOnChange = (e) => {
    setFilteredData(searchData(e, employeeData));
  };

  return (
    <div className={`container border border-info mt-4 mb-4`}>
      <h2>{props.listTitle}</h2>
      <div className="row">
        <div className="col">
          <CustomInput
            inputType="text"
            placeHolderText="Search"
            inputClass={`form-control searchField marginClass`}
            handleOnChange={handleOnChange}
          />
        </div>
      </div>
      <table className={`table marginClass`}>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          {filteredData?.length > 0 ? (
            filteredData?.map((user) => (
              <tr key={user?.id}>
                <td>{user?.employee_name}</td>
                <td>{user?.employee_age}</td>
                <td>{user?.employee_salary}</td>
                <td>
                  <CustomButton
                    buttonClass="button btn btn-info"
                    handleClick={() => {
                      viewEmployeeDetails(user);
                    }}
                    buttonValue="View"
                  />
                  <CustomButton
                    buttonClass={`button btn btn-danger marginLeftClass`}
                    handleClick={() => {
                      handleShow(user);
                    }}
                    buttonValue="Delete"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border-0" colSpan={3}>
                {props.textOnNoData}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <SimpleModal
        showModal={show.show}
        modalContent={props.modalData}
        closeText={labelMapping.NO}
        actionText={labelMapping.YES}
        handleClose={handleClose}
        handleAction={handleSuccess}
      />
      <CustomToaster
        showToast={showToast}
        handleClose={() => setShowToast(false)}
        successMessage={successMessage}
      />
    </div>
  );
}

CustomList.propTypes = {
  listTitle: PropTypes.string,
  textOnNoData: PropTypes.string,
  modalData: PropTypes.string.isRequired,
  getAllResource: PropTypes.any,
  deleteResource: PropTypes.any,
};

CustomList.defaultProps = {
  modalData: "",
};

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomForm from "../../shared_components/CustomForm";
import { getOne } from "../../utils/helperFunction";

const ViewEmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewData, setViewData] = useState({});
  const resource = `http://dummy.restapiexample.com/api/v1/employee`;

  useEffect(() => {
    const employeeId = id;
    const getOneData = async () => {
      const res = await getOne(resource, employeeId);
      const apiData = res.data;
      console.log(apiData.data);
      setViewData(apiData.data);
    };
    getOneData();
  }, [id, resource]);

  const backAction = () => {
    navigate(`/`);
  };

  return (
    <CustomForm
      formData={viewData}
      mode="view"
      buttonText="Back"
      buttonAction={backAction}
    />
  );
};

export default React.memo(ViewEmployeeDetails);

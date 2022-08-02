import React from "react";

import CustomList from "../../shared_components/CustomList";

const EmployeesList = () => {
  const resource = "https://dummy.restapiexample.com/api/v1";

  const modalData = "Are you sure you want to delete?";

  return (
    <CustomList
      listTitle="Employee List"
      textOnNoData="No Employees Found"
      getAllResource={`${resource}/employees`}
      deleteResource={`${resource}/delete`}
      modalData={modalData}
    />
  );
};

export default React.memo(EmployeesList);

import axios from "axios";

export const searchData = (e, employeeData) => {
  const { value } = e.target;
  const searchString = value.toLowerCase();
  if (searchString.length > 0) {
    const filteredValue = employeeData.filter((el) =>
      el.employee_name.toLowerCase().includes(searchString)
    );
    return filteredValue;
  } else {
    return employeeData;
  }
};

export const getAll = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

export const getOne = async (url, id) => {
  const res = await axios.get(`${url}/${id}`);
  return res;
};

export const deleteOne = async (url, id) => {
  const res = await axios.delete(`${url}/${id}`);
  return res;
};

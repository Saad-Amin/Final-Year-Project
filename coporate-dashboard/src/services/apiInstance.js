import { commonrequest } from "./apiCall";
import BASEURI from "./helper";

//Request for Getting Product Filters
export const getAllProductFilterfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/productfilter`);
};
export const getProductFilterbyIdfunc = async (id) => {
  return await commonrequest("GET", `${BASEURI}/productfilter/${id}`);
};

export const getAllCategoriesfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/category`);
};

export const getAllBrandsfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/brand`);
};

export const getCategorybyIdfunc = async (id) => {
  return await commonrequest("GET", `${BASEURI}/category/${id}`);
};

export const getBrandbyIdfunc = async (id) => {
  return await commonrequest("GET", `${BASEURI}/brand/${id}`);
};

export const getProductbyIdfunc = async (id) => {
  return await commonrequest("GET", `${BASEURI}/product/${id}`);
};

export const getAllUsersfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/user/customer`);
};

export const getAllAdminfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/user/admin`);
};

export const getUserbyIdfunc = async (id) => {
  return await commonrequest("GET", `${BASEURI}/user/${id}`);
};

export const getAllProductfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/product`);
};

export const getAllOrdersfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/order/admin`);
};

export const getOrderbyIdfunc = async (id) => {
  return await commonrequest("GET", `${BASEURI}/order/${id}`);
};

//Delete
export const deleteProductfunc = async (id) => {
  return await commonrequest("DELETE", `${BASEURI}/product/${id}`, {});
};

export const deleteCategoryfunc = async (id) => {
  return await commonrequest("DELETE", `${BASEURI}/category/${id}`, {});
};

export const deleteBrandfunc = async (id) => {
  return await commonrequest("DELETE", `${BASEURI}/brand/${id}`, {});
};

export const deleteProductFilterfunc = async (id) => {
  return await commonrequest("DELETE", `${BASEURI}/productfilter/${id}`, {});
};

export const deleteUserfunc = async (id) => {
  return await commonrequest("DELETE", `${BASEURI}/user/${id}`, {});
};

//Add
export const addBrandfunc = async (data) => {
  return await commonrequest("POST", `${BASEURI}/brand/`, data);
};

export const addProductFilterfunc = async (data) => {
  return await commonrequest("POST", `${BASEURI}/productfilter/`, data);
};

export const addProductfunc = async (data) => {
  return await commonrequest("POST", `${BASEURI}/product/`, data);
};

//Reset Password
export const getEmailOTPfunc = async (data) => {
  return await commonrequest("POST", `${BASEURI}/user/emailotp`, data);
}

export const getOTPVerificationfunc = async (data) => {
  return await commonrequest("POST", `${BASEURI}/user/verifyotp`, data);
}

export const getResetPasswordfunc = async (data) => {
  return await commonrequest("POST", `${BASEURI}/resetpassword`, data);
}

//EDIT
export const editBrandfunc = async (id, data) => {
  return await commonrequest("PUT", `${BASEURI}/brand/${id}`, data);
};

export const editProductFilterfunc = async (id, data) => {
  return await commonrequest("PUT", `${BASEURI}/productfilter/${id}`, data);
};

export const editCategoryfunc = async (id, data) => {
  return await commonrequest("PUT", `${BASEURI}/category/${id}`, data);
};

export const editProductfunc = async (id, formData) => {
  return await commonrequest("PUT", `${BASEURI}/product/${id}`, formData, {
    "Content-Type": "multipart/form-data",// Set the content type to multipart/form-data
  });
};

export const editOrderStatusfunc = async (data) => {
  return await commonrequest("PUT", `${BASEURI}/order`,  data);
};
//COUNT
export const getAllProductCountfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/product/count`);
};

export const getAllCustomerCountfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/user/customer/count`);
};

export const getAllOrderCountfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/order/count`);
};


//STATS
export const getTotalSalesfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/totalsales`);
};

export const getSalesPerMonthfunc = async () => {
  return await commonrequest("GET", `${BASEURI}/salespermonth`);
};


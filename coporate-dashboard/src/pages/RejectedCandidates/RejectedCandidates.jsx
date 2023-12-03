import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BiSort } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllProductFilterfunc } from "../../services/apiInstance";
import "./rejectedcandidates.scss";

const RejectedCandidates = () => {
  const [productFilterData, setProductFilterData] = useState([]);
  const [searchProductFilter, setSearchProductFilter] = useState("");
  const [filterProductFilterData, setFilterProductFilterData] = useState([]);

  const getProductFilter = async () => {
    try {
      const response = await getAllProductFilterfunc();
      if (response.status === 200) {
        setProductFilterData(response.data.data);
        setFilterProductFilterData(response.data.data);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };

  //Columns
  const columns = [
    {
      name: "Candidate Id",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Candidate Name",
      selector: (row) => row.productFilterName,
      sortable: true,
    },
    {
      name: "Job Title",
      selector: (row) => row.productFilterName,
      sortable: true,
    },
    {
      name: "Email Address",
      selector: (row) => row.productFilterName,
      sortable: true,
    },
  ];

  useEffect(() => {
    getProductFilter();
  }, []);

  useEffect(() => {
    const result = productFilterData.filter(prfilter => {
      return prfilter.productFilterName.toLowerCase().match(searchProductFilter.toLowerCase());
    });

    setFilterProductFilterData(result);
  }, [searchProductFilter]);

  return (
    <div className="container">
      <div className="row">
        <h3 className="col-6 col-md-12 fw-400 justify-content-center">
          Rejected Candidates
        </h3>
        <div className="col-6 col-md-12 d-flex justify-content-end">
          <input 
              style={{
                paddingInline: 20,
                borderRadius: 10
              }}
              type={"text"} 
              placeholder="Search ....."
              value={searchProductFilter}
              onChange={(e) => setSearchProductFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="row my-4 brandtable">
        <DataTable
          columns={columns}
          // data={filterProductFilterData}
          data={""}
          pagination={true}
          fixedHeader
          fixedHeaderScrollHeight="450px"
          selectableRows
          highlightOnHover
          sortIcon={<BiSort />}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default RejectedCandidates;

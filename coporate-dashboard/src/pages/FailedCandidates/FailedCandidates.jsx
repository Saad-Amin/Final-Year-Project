import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BiSort } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllBrandsfunc } from "../../services/apiInstance";
import "./failedcandidates.scss";

const FailedCandidates = () => {
  const [brandData, setBrandData] = useState([]);
  const [searchBrand, setSearchBrandData] = useState("");
  const [filterBrandData, setFilterBrandData] = useState([]);


  const getBrands = async () => {
    try {
      const response = await getAllBrandsfunc();
      if (response.status === 200) {
        setBrandData(response.data.data);
        setFilterBrandData(response.data.data);
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
      name: "Candidates Id",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.brandName,
      sortable: true,
    },
  ];

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    const result = brandData.filter(brand => {
      return brand.brandName.toLowerCase().match(searchBrand.toLowerCase());
    });

    setFilterBrandData(result);
  }, [searchBrand]);
  

  return (
    <div className="container">
      <div className="row">
        <h3 className="col-6 col-md-12 fw-400 justify-content-center">
          Failed Candidates
        </h3>
        <div className="col-6 col-md-12 d-flex justify-content-end">
          <input 
            style={{
              paddingInline: 20
            }}
            type={"email"} 
            placeholder="Search ....." 
            value={searchBrand}
            onChange={(e) => setSearchBrandData(e.target.value)}
          />
        </div>
      </div>
      <div className="row my-4 brandtable">
        <DataTable
          columns={columns}
          // data={filterBrandData}
          data={""}
          pagination
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

export default FailedCandidates;
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BiSort } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllCategoriesfunc } from "../../services/apiInstance";
import "./passedcandidates.scss";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [filterCategoryData, setFilterCategoryData] = useState([]);


  const getCategories = async () => {
    try {
      const response = await getAllCategoriesfunc();
      if (response.status === 200) {
        setCategoryData(response.data.data);
        setFilterCategoryData(response.data.data);
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
      name: "Name",
      selector: (row) => row.categoryName,
      sortable: true,
    },
    {
      name: "Job Title",
      selector: (row) => row.categoryName,
      sortable: true
    },
    {
      name: "Score",
      selector: (row) => row.categoryName,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.categoryName,
      sortable: true
    },
    {
      name: "Email Address",
      selector: (row) => row.categoryName,
      sortable: true
    },

  ];

  useEffect(() => {
    getCategories();
  }, []);

    //UseEFfect hook for Searching by Name
    useEffect(() => {
      const result = categoryData.filter(category => {
        return category.categoryName.toLowerCase().match(searchCategory.toLowerCase());
      });
  
      setFilterCategoryData(result);
    }, [searchCategory]);
  

  return (
    <div className="container">
      <div className="row">
        <h3 className="col-6 col-md-12 fw-400 justify-content-center">
          Passed Candidates
        </h3>
        <div className="col-6 col-md-12 d-flex justify-content-end">
          <input style={{
            paddingInline: 20,
            borderRadius: 10
          }} type={"email"} placeholder="Search ....." value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}/>
        </div>
      </div>
      <div className="row my-4 brandtable">
        <DataTable
          columns={columns}
          // data={filterCategoryData}
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

export default Categories;

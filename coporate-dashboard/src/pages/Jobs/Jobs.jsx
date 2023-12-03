import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BiSort } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllProductfunc } from "../../services/apiInstance";
import "./Jobs.scss";
import { Image } from 'react-bootstrap';

const Jobs = () => {
  const [productData, setProductData] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [filterProductData, setFilterProductData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await getAllProductfunc();
      if (response.status === 200) {
        setProductData(response.data.data);
        setFilterProductData(response.data.data);
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
      name: "Job Id",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Job Title",
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => (
        <Image src={'https://beautify.herokuapp.com'+row.productImages} width={50} height={50} alt={"product image"} />
      ),
    },
    {
      name: "Location",
      selector: (row) => row.category.categoryName,
      sortable: true,
    },
    {
      name: "Job Type",
      selector: (row) => row.brand.brandName,
      sortable: true,
    },
    {
      name: "Salary Range",
      selector: (row) => row.productPrice,
      sortable: true,
    },
  ];

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const result = productData.filter(product => {
      return product.productName.toLowerCase().match(searchProduct.toLowerCase());
    });

    setFilterProductData(result);
  }, [searchProduct])

  return (
    <div className="container">
      <div className="row">
        <h3 className="col-6 col-md-12 fw-400 justify-content-center">
          Jobs
        </h3>
        <div className="col-6 col-md-12 d-flex justify-content-end">
        <input 
        style={{
          paddingInline: 20,
          borderRadius: 10
        }}
                type={"text"}
                placeholder="Search ....."
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
            />
        </div>
      </div>
      <div className="row my-4 brandtable">
        <DataTable
          columns={columns}
          // data={filterProductData}
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

export default Jobs;

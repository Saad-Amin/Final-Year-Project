import React from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import AddProductFilter from "../ProductFilters/AddProductFilter";
import "./report.scss";

const TopSellingReport = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="col-6 col-md-12 fw-400 justify-content-center">
          Top Selling Report
        </h3>
        <div className="col-6 col-md-12 d-flex justify-content-end">
          <input
            className="mx-2"
            type={"date"}
            placeholder="From"
            value={""}
            onChange={() => {}}
          />
          <input
            type={"date"}
            placeholder="Search ....."
            value={""}
            onChange={() => {}}
          />
          <Link
            to={"/dashboard/addproductfilter"}
            component={<AddProductFilter />}
          >
            <div className="btn addbtn mx-2">
              <MdSearch size={25}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSellingReport;

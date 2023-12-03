import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import YearlyReport from "./YearlyReport";
import OrderReport from "./OrderReport";
import TopSellingReport from "./TopSellingReport";
import "./report.scss";

function MainReport() {
  return (
    <div>
      <Tabs defaultActiveKey="yearlyreport" className="mb-3">
        <Tab eventKey="yearlyreport" title="Yearly Report">
          <YearlyReport />
        </Tab>
        <Tab eventKey="orderreport" title="Order Report">
          <OrderReport />
        </Tab>
        <Tab eventKey="topsellingproduct" title="Top Selling Product">
          <TopSellingReport />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MainReport;

import { useState } from "react";
import ReportTabTable from "../../components/report-tab-table/ReportTabTable";
import ShortenTabForm from "../../components/shorten-tab-form/ShortenTabForm";

import classes from "./Dashboard.module.css";

const Dashboard = (props) => {

    const [ selectedTab, setSelectedTab ] = useState("form");

    const selectTab = (tab) => {
        if (isSelected(tab)) {
            return;
        }

        setSelectedTab(tab);
    }

    const isSelected = (tab) => {
        return selectedTab === tab;
    }

    return (
        <div className="container-fluid pt-5 d-flex flex-column justify-content-center w-100">
            <ul className="nav nav-tabs w-100">
                <li className="nav-item">
                    <a className={`nav-link ${isSelected('form') ? 'active' : ''}`} href="#" onClick={() => selectTab('form')}>Shorten URL</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${isSelected('report') ? 'active' : ''}`} href="#" onClick={() => selectTab('report')}>URLs report</a>
                </li>
            </ul>

            <div className="container-fluid pt-5 d-flex justify-content-center w-100">
                    {isSelected('form') &&
                    <ShortenTabForm />
                    }
                    {isSelected('report') &&
                    <ReportTabTable />
                    }
            </div>
        </div>
    );
}

export default Dashboard;
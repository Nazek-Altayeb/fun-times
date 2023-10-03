import React from "react";
import NoResults from "../assets/no-results.png";
import Asset from "../components/Asset";

// page is not found component
const NotFound = () => {
    return (
        <div className="styles.marginTop">
            <Asset
                src={NoResults}
                message={"Ops, it seems that the page you are looking for doesn't exist"}
            />
        </div>
    );
};

export default NotFound;
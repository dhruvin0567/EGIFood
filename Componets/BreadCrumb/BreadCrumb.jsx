
const BreadCrumb = ({ breadCrumb_title }) => {
    return (
        <div className="breadcrumb">
            <div
                className="breadcrumb-inner"
            >
                <h3>{breadCrumb_title}</h3>
            </div>
        </div>
    );
};

export default BreadCrumb;

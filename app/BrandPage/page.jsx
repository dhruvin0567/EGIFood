import Brands from "@/Componets/Brand/Brand";
import BreadCrumb from "@/Componets/BreadCrumb/BreadCrumb";
import JoinUs from "@/Componets/JoinUs/JoinUs";

const page = () => {
    return (
        <>
            <BreadCrumb breadCrumb_title={"Premium Brands"} />
            <Brands />
            <JoinUs />
        </>
    )
}

export default page;    
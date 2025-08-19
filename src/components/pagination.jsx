import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/components/pagination.css";

const Pagination = ({ list, itemsPerPage, setPagination }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(list.length / itemsPerPage);

    useEffect(() => {
        setPagination(list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    }, [currentPage, list, itemsPerPage]);

    useEffect(() =>{
        setCurrentPage(1);
    }, [list])

    return (
        (totalPages === 1 || totalPages === 0) ? null : (
            <div className="pagination">
                <button className="prev" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}><FaArrowLeft /></button>
                <p className="pagination-page">{currentPage} de {totalPages !== 0 ? totalPages : '1'}</p>
                <button className="next" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}><FaArrowRight /></button>
            </div>
        )
    );

}

export default Pagination;
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import '@/styles/components/card-buttons.css';

const CardButtons = () => {
    return (
        <div className="card-buttons">
            <button className="btn-view"><FaEye /></button>
            <button className="btn-edit"><FaPencilAlt /></button>
            <button className="btn-delete"><FaTrash /></button>
        </div>
    );
};

export default CardButtons;


import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import '@/styles/components/card-buttons.css';

const CardButtons = ({onBtnViewClick, onBtnEditClick, onBtnDeleteClick}) => {
    return (
        <div className="card-buttons">
            <button className="btn-view" onClick={onBtnViewClick}><FaEye /></button>
            <button className="btn-edit" onClick={onBtnEditClick}><FaPencilAlt /></button>
            <button className="btn-delete" onClick={onBtnDeleteClick}><FaTrash /></button>
        </div>
    );
};

export default CardButtons;


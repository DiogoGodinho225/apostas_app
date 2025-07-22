import { FaPlus } from "react-icons/fa";
import '@/styles/components/floatBtn.css';

const FloatBtn = ({route}) =>{

    return(
        <button className="float-btn" onClick={route}><FaPlus /></button>
    );

}

export default FloatBtn;
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import '@/styles/components/goBackButton.css';

const BackButton = () =>{

    const router = useRouter();

    return(
        <button className='goBackBtn' onClick={()=> router.back()}><FaArrowLeft /></button>
    );
}

export default BackButton;
import '@/styles/components/footer.css';

const Footer = () =>{

    const date = new Date().getFullYear();

    return(
        <p>&copy; {date} - Desenvolvida por Diogo Godinho</p>
    );
}

export default Footer;
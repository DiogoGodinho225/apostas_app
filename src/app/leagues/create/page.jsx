'use client'
import '@/styles/leagues/create.css'
import { useState } from 'react'
import { createLeague } from '@/services/leaguesApi'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useLeagues } from '@/context/leaguesContext'

const CreateLeague = () => {
    return (
        <div className="create-league-container">
            <Form />
        </div>
    )
}

const Form = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [league, setLeague] = useState({
        name: '',
        country: '',
        type: '',
        tier: '',
        image: '',
        season: '',
    })
    const {fetchLeagues} = useLeagues();

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (e.target.type === 'file') {
            setLeague(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setLeague(prev => ({ ...prev, [name]: value }));
        }
    }

    const addLeague = async (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData();
        formData.append('name', league.name);
        formData.append('country', league.country);
        formData.append('type', league.type);
        formData.append('tier', league.tier);
        formData.append('season', league.season);
        formData.append('image', league.image);

        try {
            const response = await createLeague(formData);

            if (response.status === 200 && response.data.success === true) {
                toast.success(response.data.message);
                await fetchLeagues();
                router.push('/leagues/index');
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.log(error);
            toast.error('Erro ao criar liga!');
        }

        setLoading(false);

    }

    return (
        <form onSubmit={addLeague}>
            <div className='row'>
                <FormGroup type={'text'} txtname={'name'} placeholder={'Nome da liga...'} label={'Nome: '} action={handleInputChange} value={league.name} />
                <FormGroup type={'text'} txtname={'country'} placeholder={'País...'} label={'País: '} action={handleInputChange} value={league.country} />
            </div>
            <div className='row'>
                <FormGroup type={'select'} txtname={'type'} placeholder={'Selecione um tipo'} label={'Tipo: '} action={handleInputChange} value={league.type} />
                <FormGroup type={'select'} txtname={'tier'} placeholder={'Selecione a divisão'} label={'Divisão: '} action={handleInputChange} value={league.tier} />
            </div>
            <div className='row'>
                <FormGroup type={'text'} txtname={'season'} placeholder={'Ex:. 2024/25'} label={'Temporada: '} action={handleInputChange} value={league.season} />
                <FormGroup type={'file'} txtname={'image'} placeholder={null} label={'Imagem: '} action={handleInputChange} />
            </div>
            <div className='row'>
                <SubmitBtn loading={loading} />
            </div>
        </form>
    )
}


const FormGroup = ({ type, txtname, placeholder, label, action, value }) => {

    if (type === 'select') {
        return (
            <div className='form-group'>

                <label>{label}</label>
                <select name={txtname} onChange={action} value={value} required >
                    <option value={0} >{placeholder}</option>
                    {txtname === 'type' ? (
                        <>
                            <option value={1} >Nacional</option>
                            <option value={2} >Internacional</option>
                        </>
                    ) : (
                        <>
                            <option value={1} >1ª Divisão</option>
                            <option value={2} >2ª Divisão</option>
                            <option value={3} >3ª Divisão</option>
                            <option value={0} >Desconhecida</option>
                        </>
                    )}
                </select>

            </div>
        );
    }

    return (
        <div className='form-group'>
            <label>{label}</label>
            {type === 'file' ? (
                <input type={type} name={txtname} placeholder={placeholder} onChange={action} required />
            ) :
                <input type={type} name={txtname} placeholder={placeholder} onChange={action} value={value} required />
            }

        </div>
    );
}

const SubmitBtn = ({ loading }) => {
    return (
        <button disabled={loading} type='submit'>{loading ? 'A criar...' : 'Criar Liga'}</button>
    );

}

export default CreateLeague
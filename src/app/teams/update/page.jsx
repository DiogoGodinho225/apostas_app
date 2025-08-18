'use client'
import '@/styles/teams/update.css'
import { useState, useEffect, Suspense } from 'react'
import { getTeam, updateTeam } from '@/services/teamsApi'
import { useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'
import { useTeams } from '@/context/teamsContext'
import { useLeagues } from '@/context/leaguesContext'
import BackButton from '@/components/goBackButton'

const UpdateTeam = () => {
    return (
        <Suspense>
            <div className="update-team-container">
                <Form />
            </div>
        </Suspense>
    )
}

const Form = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [team, setTeam] = useState(null);
    const { leagues } = useLeagues();
    const { fetchTeams } = useTeams();
    const [countryLeagues, setCountryLeagues] = useState([]);


    const fetchTeam = async () => {

        setLoading(true);

        var id = searchParams.get('id');

        try {
            const response = await getTeam(id);

            if (response.status === 200 && response.data.success === true) {
                setTeam(response.data.team);
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao carregar a liga!');
        }

        setLoading(false);
    }

    useEffect(() => {

        fetchTeam();

    }, []);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (e.target.type === 'file') {
            setTeam(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setTeam(prev => ({ ...prev, [name]: value }));
        }
    }

    const editTeam = async (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData();
        formData.append('id', searchParams.get('id'));
        formData.append('name', team.name);
        formData.append('country', team.country);
        formData.append('stadium', team.stadium);
        formData.append('short_name', team.short_name);
        formData.append('founded_year', team.founded_year);
        if (team.image instanceof File) {
            formData.append('image', team.image);
        }
        formData.append('leagueId', team.leagueId);


        try {
            const response = await updateTeam(formData);

            if (response.status === 200 && response.data.success === true) {
                toast.success(response.data.message);
                await fetchTeams();
                router.push('/teams/index');
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.log(error);
            toast.error('Erro ao criar equipa!');
        }

        setLoading(false);

    }

    useEffect(() => {
        if (!team || !leagues) return;

        if (team.country === '') {
            setCountryLeagues(leagues);
        } else {
            const filtered = leagues.filter(l => l.country.toLowerCase() === team.country.toLowerCase);
            setCountryLeagues(filtered);
        }

    }, [team, leagues]);


    const handleLeagueChange = (e) => {
        const leagueId = e.target.value;
        setTeam(prev => ({
            ...prev,
            leagueId,
            country: countryLeagues.find(l => String(l.id) === String(leagueId))?.country || ''
        }))
    }

    return (
        <form onSubmit={editTeam}>
            {!team ? (
                <p className="alert">A carregar equipa...</p>
            )
                :
                <>
                    <div className='row'>
                        <FormGroup type={'text'} txtname={'name'} placeholder={'Nome da equipa...'} label={'Nome: '} action={handleInputChange} value={team.name} />
                        <FormGroup type={'text'} txtname={'country'} placeholder={'País...'} label={'País: '} action={handleInputChange} value={team.country} />
                    </div>
                    <div className='row'>
                        <FormGroup type={'text'} txtname={'short_name'} placeholder={'Siglas...'} label={'Siglas: '} action={handleInputChange} value={team.short_name} />
                        <FormGroup type={'text'} txtname={'stadium'} placeholder={'Estádio...'} label={'Estádio: '} action={handleInputChange} value={team.stadium} />
                    </div>
                    <div className='row'>
                        <FormGroup type={'text'} txtname={'founded_year'} placeholder={'Fundado em...'} label={'Fundado em: '} action={handleInputChange} value={team.founded_year} />
                        <FormGroup type={'file'} txtname={'image'} placeholder={null} label={'Imagem: '} action={handleInputChange} />
                    </div>
                    <div className='row'>
                        <FormGroup type={'select'} txtname={'leagueId'} placeholder={'Selecione a Liga'} label={'Liga: '} action={handleLeagueChange} value={team.leagueId} countryLeagues={countryLeagues} />
                    </div>
                    <div className='row'>
                        <SubmitBtn loading={loading} />
                    </div>
                </>
            }

        </form >
    )
}


const FormGroup = ({ type, txtname, placeholder, label, action, value, countryLeagues }) => {

    if (type === 'select') {
        return (
            <div className='form-group'>

                <label>{label}</label>
                <select name={txtname} onChange={action} value={value} required >
                    {countryLeagues.length === 0 ? (
                        <option>Nenhuma liga encontrada!</option>
                    ) : (
                        <>
                            <option value={0} >{placeholder}</option>
                            {countryLeagues.map((l) => (
                                <option key={l.id} value={l.id}>{l.name}</option>
                            ))}
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
                <input type={type} name={txtname} placeholder={placeholder} onChange={action} />
            ) :
                <input type={type} name={txtname} placeholder={placeholder} onChange={action} value={value} required />
            }

        </div>
    );
}

const SubmitBtn = ({ loading }) => {
    return (
        <button disabled={loading} type='submit'>{loading ? 'A editar...' : 'Editar Equipa'}</button>
    );

}

export default UpdateTeam
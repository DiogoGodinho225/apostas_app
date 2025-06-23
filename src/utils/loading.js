'use client';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const Loading = ({ height = 40, width = 40 }) => {
    const [loadingAnim, setLoadingAnim] = useState(null);

    useEffect(() => {
        const loadAnimation = async () => {
            try {
                const res = await fetch('/others/loading.json');
                const json = await res.json();
                setLoadingAnim(json);
            } catch (error) {
                console.error("Erro ao carregar o loading.json", error);
            }
        };

        loadAnimation();
    }, []);

    if (!loadingAnim) return null;

    return (
        <Lottie
            animationData={loadingAnim}
            style={{ height, width, filter: 'invert(1)' }}
        />
    );
};

export default Loading;

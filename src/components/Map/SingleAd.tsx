import React, {useEffect} from 'react';
import {AdEntity} from 'types';

interface Props {
    id: string;
}

export const SingleAd = (props: Props) => {
    const [ad, setAd] = React.useState<AdEntity | null>(null);
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/${props.id}`);
            const data = await res.json();
            setAd(data);
        })();
    }, []);

    if (ad === null) {
        return <p>Loading...</p>
    }

    return <>
        <h2>{ad.name}</h2>
        <p>{ad.description}</p>
        {!!ad.price && <p><b>Price: {ad.price} zł</b></p>}
        <hr/>
        <a href={ad.url} target='_blank' rel="noreferrer">Open Ad</a>
        </>
}
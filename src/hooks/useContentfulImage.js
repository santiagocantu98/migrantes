import contentful from '../api/contentful';
import { useState, useEffect} from 'react';

export default ({imageID}) => {
    const [imageURL, setImageURL] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const getSections = async () => {
        try {
            const url = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets/${imageID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`);
            setImageURL(url.data.fields.url)
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    };

    useEffect(() => {
        getSections();
    }, []);

    return [imageURL];
};

    

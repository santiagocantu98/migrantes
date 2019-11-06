import contentful from '../api/contentful';
import { useState, useEffect} from 'react';

export default () => {
    const [responses, setResponses] = useState([]);
    const [assets,setAssests] = useState([]);
    const [languages,setLanguages] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const getSections = async () => {
        try {
            const languages = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU&content_type=languageLogo`);
            const respuesta = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU&include=3`);
            const assets = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`);
            setLanguages(languages.data.items);
            setResponses(respuesta.data.items);
            setAssests(assets.data.items);
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    };
    //https://cdn.contentful.com/spaces/o9fy17dex6yg/entries?access_token=ZtJLoao563qDPhM76O7AGn9B7QT-3G0mhkVMNXlcIOg        
    //https://cdn.contentful.com/spaces/o9fy17dex6yg/content_types?access_token=ZtJLoao563qDPhM76O7AGn9B7QT-3G0mhkVMNXlcIOg
    

    useEffect(() => {
        getSections();
    }, []);

    return [responses, assets, languages];
};

    

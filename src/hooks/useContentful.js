import contentful from '../api/contentful';
import { useState, useEffect} from 'react';

export default () => {
    // variable for the responses of the Contentful entries requests
    const [responses, setResponses] = useState([]);
    // variable for the assets of the Contentful assets requests
    const [assets,setAssests] = useState([]);
    // variable for the languages of the Contentful language entries requests
    const [languages,setLanguages] = useState([]);
    // variable if there is an error in the request
    const [errorMessage,setErrorMessage] = useState('');

    const getSections = async () => {
        try {
            // requests for all the entries that has the content type "LanguageLogo" in Contentful
            const languages = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU&content_type=languageLogo`);
            // requests for all the entries of the space Catholic Charities
            const respuesta = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU&include=3`);
            // requests for all the asset entries
            const assets = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`);
            setLanguages(languages.data.items);
            setResponses(respuesta.data.items);
            setAssests(assets.data.items);
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    };
    
    // renders the component once, if the responses changes, it re-renders
    useEffect(() => {
        getSections();
    }, [responses]);

    // returns all the data
    return [responses, assets, languages];
};

    

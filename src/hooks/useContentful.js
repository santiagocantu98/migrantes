/*
import contentful from '../api/contentful'
import { useState, useEffect} from 'react';

export default () => {
    const [responses, setResponses] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const response = await contentful.get('/spaces'
    });
    /*
    contentful.getSpace()
    .then((space) => console.log(space))
    .catch(console.error)
    
}


axios.get(`${baseURL}/spaces/${space}/environments/master/entries/${entryID}?access_token=${accessToken}`)
.then((entry) => console.log(entry.data.fields.titulo))
.catch(console.error)




*/

    /*
    const searchApi = async (searchTerm) => {
        console.log('Hi there')
        try {
            const response = await client.get('/search', {
                params: {
                    term: searchTerm
                }
            });
            setResponses(response.items);
        } catch (err) {
            setErrorMessage('TE EQUIVOCASTE CARNAL');
        }
    };

    useEffect(() => {
        searchApi('');
    }, []);
    
    return [responses, errorMessage];
};

/*const[response, setResponse] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')}

    const searchApi = async (searchTerm) => {
        console.log('Hello World')
        try {
            const response = await contentful.get('', {
                params: {
                    term: searchTerm
                }
            });
            setResponse(r)
        }
    }
}
*/

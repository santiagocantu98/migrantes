import axios from 'axios';

const space = 'o9fy17dex6yg'
const accessToken = 'ZtJLoao563qDPhM76O7AGn9B7QT-3G0mhkVMNXlcIOg'
const baseURL = 'https://cdn.contentful.com'
const entryID = '5K2hnxJxztffuNGuI6AuHl'

/*
export default axios.create({
    baseURL: 'https://cdn.contentful.com',
    space: 'o9fy17dex6yg',
    accessToken: 'ZtJLoao563qDPhM76O7AGn9B7QT-3G0mhkVMNXlcIOg'

});

*/
// section


axios.get(`${baseURL}/spaces/${space}/entries?access_token=${accessToken}`)
.then((space) => console.log(space.data.items.fields))
.catch(console.error)


// content types

/*
axios.get(`${baseURL}/spaces/${space}/environments/master/content_types?access_token=${accessToken}`)
.then((content_types) => console.log(content_types))
.catch(console.error)
*/
 
// single entry
/*
axios.get(`${baseURL}/spaces/${space}/environments/master/entries/${entryID}?access_token=${accessToken}`)
.then((entry) => console.log(entry.data.fields.titulo))
.catch(console.error)
*/

 /*   const contentfulImport = require('contentful-import');
    const options = {
        spaceId: 'o9fy17dex6yg',
        //environment: '<environment_id>', // defaults to 'master' if not set
        managementToken: 'ZtJLoao563qDPhM76O7AGn9B7QT-3G0mhkVMNXlcIOg'
    }
    contentfulImport(options)
        .then(() => {
            console.log('Data imported successfully')
        })
        .catch((err) => {
            console.log('errorr!!!!')
        })
    client.getSpace()
        .then((space) => console.log(space))
        .catch(console.error)

export default options;


   /* baseURL: 'https://cdn.contentful.com',
    space: 'o9fy17dex6yg',
    accessToken: 'ZtJLoao563qDPhM76O7AGn9B7QT-3G0mhkVMNXlcIOg'
    */
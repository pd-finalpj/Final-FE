const BASE_URL = 'http://localhost:3000/';
const CALENDAR_URL = 'http://localhost:3000/Calendar';


export const fetchCreate = (url, data, type) => {
    fetch(url, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    })
    .then(() => {
        if(type === 'calendar') {
            window.location.href = CALENDAR_URL;
        }

        // window.location.href = BASE_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

export const fetchDelete = (url, id) => {
    fetch(`${url}/${id}`, {
        method: "DELETE",
    })
    .then(() => {
        window.location.href = BASE_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

// export const fetchPatch = (url, id, data) => {
//     fetch(`${url}${id}`, {
//       method : "PATCH",
//       headers: {"Content-Type" : "Application/json"},
//       body: JSON.stringify(data)
//     })
//     .then(() => {
//       // window.location.href = `${BASE_URL}${id}`;
//       window.location.href = BASE_URL;
//     })
//     .catch((error) => {
//       console.error('Error', error);
//     })
// }
export const fetchPatch = (url, id, data) => {
    fetch(`${url}/${id}`, {
        method : "PATCH",
        headers: {"Content-Type" : "Application/json"},
        body: JSON.stringify(data)
    })
    .then(() => {
      // window.location.href = `${BASE_URL}${id}`;
        window.location.href = BASE_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}
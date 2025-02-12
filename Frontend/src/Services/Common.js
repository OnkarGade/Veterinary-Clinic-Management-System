
export function GenerateUrl(path) {

    // return `http://192.168.1.5:8080` + path
    // return `http://localhost:8080` + path
    return `http://192.168.1.4:8080` + path
    
}

export function ApplicationHeader() {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
}

export function MultipartHeader() {
    return {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
}
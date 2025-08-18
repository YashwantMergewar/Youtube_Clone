const convertFormData = async (data) => {
    const formdata= new FormData()
    Object.keys(data).forEach((key) => {
        if(data[key] !== undefined && data[key] !== null){
            formdata.append(key, data[key])
        }
    })
    return formdata
}

export default convertFormData
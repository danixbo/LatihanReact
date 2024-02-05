const Input=({place,type,value})=>{
    return(
        <>
            <input type={type} placeholder={place} value={value}/>
        </>
    )
}

export default Input
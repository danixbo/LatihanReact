const Button=({Nama,Size,kelas})=>{
    return(
        <>
            <button className={kelas} style={{width:Size}}>{Nama}</button>
        </>
    )
}

export default Button
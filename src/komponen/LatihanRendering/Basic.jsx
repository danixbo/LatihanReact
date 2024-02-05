const Basic=()=>{
    const namaSiswa = ['Ipul Jamil','Ucup','Dapul']
    const dataKelas = [
        {namaKelas:'XI-RPL',jurusan:'RPL'},
        {namaKelas:'XI-TP',jurusan:'TEKNIK PEMESINAN'},
        {namaKelas:'XI-AK',jurusan:'AKUTANSI'},
    ]
    return(
        <>
            <h1>
                {namaSiswa[1]}
            </h1>
            <h2>
                Kelas : {dataKelas[2]['namaKelas']} 
                <br />
                Jurusan : {dataKelas[2].jurusan}
            </h2>
        </>
    )
}

export default Basic
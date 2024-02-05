import ButtonShare from "./ButtonShare"

const Medsos=()=>{
    return(
        <>
            <h1>Klik untuk berbagi ke tautan</h1>
            <ButtonShare namaMedsos={'Facebook'  } Warna={'cyan'   } Teks={'white'}/>
            <ButtonShare namaMedsos={'Instagram' } Warna={'purple' } Teks={'red'  }/>
            <ButtonShare namaMedsos={'Tiktok'    } Warna={'black'  } Teks={'white'}/>
        </>
    )
}

export default Medsos
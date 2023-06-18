const subcategorias = [
    {
        id:'1',
        categoriaID:'1',
        categoria:'AGITADORES',
        nombre:'MAGNETICOS',
        imagen:'../demo/img/laboratorioIMG/78-1a.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'2',
        categoriaID:'1',
        nombre:'VORTEX',
        categoria:'AGITADORES',
        imagen:'../demo/img/laboratorioIMG/VM300S.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'3',
        categoriaID:'2',
        nombre:'BAÑOS CON AROS CONCENTRICOS',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'../demo/img/laboratorioIMG/WB100-2F.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'4',
        categoriaID:'2',
        nombre:'BAÑO DE BLOQUE SECO',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'../demo/img/proximamente1.png',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'5',
        categoriaID:'2',
        nombre:'BAÑO CON CIRCULACION',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'../demo/img/laboratorioIMG/TC-800B.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'6',
        categoriaID:'3',
        nombre:'CUBAS DE ELECTROFORESIS',
        categoria:'BIOLOGIA MOLECULAR Y GENETICA',
        imagen:'../demo/img/proximamente1.png',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'7',
        categoriaID:'3',
        nombre:'FUENTES DE PODER',
        categoria:'BIOLOGIA MOLECULAR Y GENETICA',
        imagen:'../demo/img/proximamente1.png', 
        icon:'../demo/img/iconAzul1.png',   
    },
    {
        id:'8',
        categoriaID:'4',
        nombre:'MACRO CENTRIFUGAS',
        categoria:'CENTRIFUGAS',
        imagen:'../demo/img/laboratorioIMG/800D.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'9',
        categoriaID:'4',
        nombre:'DE ALTA VELOCIDAD ',
        categoria:'CENTRIFUGAS',
        imagen:'../demo/img/laboratorioIMG/LC-12S.jpg', 
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'10',
        categoriaID:'4',
        nombre:'MINI CENTRIFUGAS',
        categoria:'CENTRIFUGAS',
        imagen:'../demo/img/laboratorioIMG/MC-12PRO.jpg', 
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'11',
        categoriaID:'5',
        nombre:'ESTUFAS DE CULTIVO',
        categoria:'ESTUFAS',
        imagen:'../demo/img/laboratorioIMG/estufa.jpg', 
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'12',
        categoriaID:'6',
        nombre:'CIRCULAR',
        categoria:'HOMOGENEIZADOR',
        imagen:'../demo/img/laboratorioIMG/RMO-80.jpg', 
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'13',
        categoriaID:'7',
        nombre:'MANTO CALEFACTOR',
        categoria:'MANTOS Y PLANCHAS',
        imagen:'../demo/img/laboratorioIMG/HM.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'14',
        categoriaID:'7',
        nombre:'PLANCHA CALEFACTORA',
        categoria:'MANTOS Y PLANCHAS',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'15',
        categoriaID:'8',
        nombre:'MICROPIPETAS AUTOMATICAS',
        categoria:'MANEJO DE SUSTANCIAS LIQUIDAS',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'16',
        categoriaID:'9',
        nombre:'MICROSCOPIOS BINOCULARES',
        categoria:'MICROSCOPIA',
        imagen:'../demo/img/laboratorioIMG/XSZ107BN.jpg', 
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'17',
        categoriaID:'9',
        nombre:'LUPAS BINOCULARES',
        categoria:'MICROSCOPIA',
        imagen:'../demo/img/laboratorioIMG/lupaSL10.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
    {
        id:'18',
        categoriaID:'10',
        nombre:'CABEZALES TERMOCONTROLADORES',
        categoria:'TERMOCONTROLADORES',
        imagen:'../demo/img/laboratorioIMG/TC-800Ba.jpg',
        icon:'../demo/img/iconAzul1.png',
    },
]


const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('subcategoria');
	

    let bannerSeleccion = document.getElementById('seleccionado');

    let subcategoriasFiltro = subcategorias.filter(sub => sub.categoriaID == myParam)

    bannerSeleccion.innerText = subcategoriasFiltro[0].categoria
    
    
    
      
    let subSection = document.getElementById('subcategorias');
  if(subSection){
    subSection.innerHTML = subcategoriasFiltro.map( subID => (
        `<div class="imgSubcategoria">` +
        `<img src=${subID.imagen} />` + 
           `<p>${subID.nombre}</p>` +
           `<div  class="iconDivisionLab">` +
           `<img src="${subID.icon}" />`+
           `<a href=productosLaboratorio.php?productos=${subID.id}&categoria=${encodeURIComponent(subID.categoria)}> Ver </a>` +
           `</div>`+
        '</div>'
    )).join('');
  }
    
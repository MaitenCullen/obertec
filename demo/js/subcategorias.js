const subcategorias = [
    {
        id:'1',
        categoriaID:'1',
        categoria:'AGITADORES',
        nombre:'MAGNETICOS',
        imagen:'../demo/img/laboratorioIMG/78-1.jpg',
    },
    {
        id:'2',
        categoriaID:'1',
        nombre:'VORTEX',
        categoria:'AGITADORES',
        imagen:'../demo/img/laboratorioIMG/VM300S.jpg',
    },
    {
        id:'3',
        categoriaID:'2',
        nombre:'BAÑOS CON AROS CONCENTRICOS',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'../demo/img/laboratorioIMG/WB100-2F.jpg',
    },
    {
        id:'4',
        categoriaID:'2',
        nombre:'BAÑO DE BLOQUE SECO',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'DRBA-100-NOTIENEAUNIMG',
    },
    {
        id:'5',
        categoriaID:'2',
        nombre:'BAÑO CON CIRCULACION',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'../demo/img/laboratorioIMG/TC-800B.jpg',
    },
    {
        id:'6',
        categoriaID:'3',
        nombre:'CUBAS DE ELECTROFORESIS',
        categoria:'BIOLOGIA MOLECULAR Y GENETICA',
        imagen:'NN',
    },
    {
        id:'7',
        categoriaID:'3',
        nombre:'FUENTES DE PODER',
        categoria:'BIOLOGIA MOLECULAR Y GENETICA',
        imagen:'NN',    
    },
    {
        id:'8',
        categoriaID:'4',
        nombre:'MACRO CENTRIFUGAS',
        categoria:'CENTRIFUGAS',
        imagen:'../demo/img/laboratorioIMG/800D.jpg',
    },
    {
        id:'9',
        categoriaID:'4',
        nombre:'DE ALTA VELOCIDAD ',
        categoria:'CENTRIFUGAS',
        imagen:'../demo/img/laboratorioIMG/LC-12S.jpg', 
    },
    {
        id:'10',
        categoriaID:'4',
        nombre:'MINI CENTRIFUGAS',
        categoria:'CENTRIFUGAS',
        imagen:'../demo/img/laboratorioIMG/MC-12PRO.jpg', 
    },
    {
        id:'11',
        categoriaID:'5',
        nombre:'ESTUFAS DE CULTIVO',
        categoria:'ESTUFAS',
        imagen:'../demo/img/laboratorioIMG/estufa.jpg', 
    },
    {
        id:'12',
        categoriaID:'6',
        nombre:'CIRCULAR',
        categoria:'HOMOGENEIZADOR',
        imagen:'../demo/img/laboratorioIMG/RMO-80.jpg', 
    },
    {
        id:'13',
        categoriaID:'7',
        nombre:'MANTO CALEFACTOR',
        categoria:'MANTOS Y PLANCHAS',
        imagen:'../demo/img/laboratorioIMG/HM.jpg',
    },
    {
        id:'14',
        categoriaID:'7',
        nombre:'PLANCHA CALEFACTIRA',
        categoria:'MANTOS Y PLANCHAS',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
    },
    {
        id:'15',
        categoriaID:'8',
        nombre:'MICROPIPETAS AUTOMATICAS',
        categoria:'MANEJO DE SUSTANCIAS LIQUIDAS',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
    },
    {
        id:'16',
        categoriaID:'9',
        nombre:'MICROSCOPIOS BINOCULARES',
        categoria:'MICROSCOPIA',
        imagen:'../demo/img/laboratorioIMG/XSZ107BN.jpg', 
    },
    {
        id:'17',
        categoriaID:'9',
        nombre:'LUPAS BINOCULARES',
        categoria:'MICROSCOPIA',
        imagen:'../demo/img/laboratorioIMG/lupaSL10.jpg',
    },
    {
        id:'18',
        categoriaID:'10',
        nombre:'CABEZALES TERMOCONTROLADORES',
        categoria:'TERMOCONTROLADORES',
        imagen:'../demo/img/laboratorioIMG/TC-800Ba.jpg',
    },
]


const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('subcategoria');
	console.log(myParam)

    let bannerSeleccion = document.getElementById('seleccionado');

    let subcategoriasFiltro = subcategorias.filter(sub => sub.categoriaID == myParam)
        console.log(subcategoriasFiltro[0], "subcategoria")

 
    bannerSeleccion.innerText = subcategoriasFiltro[0].categoria
    
   
      
    let subSection = document.getElementById('subcategorias');

    subSection.innerHTML = subcategoriasFiltro.map( subID => (
        `<div class="imgSubcategoria">` +
        `<img src=${subID.imagen} />` + 
           `<p>${subID.nombre}</p>` +
           `<a href=productosLaboratorio.php?productos=${subID.id}> Otro Link </a>` +
        '</div>'
    )).join('');
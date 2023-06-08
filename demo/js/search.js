const selectBox = document.querySelector('.select-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('#soValue');
const optionSearch = document.querySelector('#optionSearch');
const options = document.querySelector('.options');
const optionsList = document.querySelectorAll('.options li');




selectOption.addEventListener('click', function(){
    selectBox.classList.toggle('active')
});

optionsList.forEach(function(optionsListSingle){
    optionsListSingle.addEventListener('click', function(){ 
        text = this.textContent;
        soValue.value = text;
        selectBox.classList.remove('active');
    })
});

optionSearch.addEventListener('keyup', function(){
    let filter, li, i, textValue;
    filter = optionSearch.value.toUpperCase();
    li = options.getElementsByTagName('li')
    for(i = 0; i < li.length ; i++){
        liCount = li[i];
        textValue =  liCount.textContent || liCount.innerText;
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
    }
})

// const getValueInput = () =>{
//     let inputValue = document.getElementById("optionSearch").value.toUpperCase(); 
//     const regex = /[A-Z]/g;
//     const found = inputValue.match(regex);
//     let texto = found.join("")
//     console.log(texto)
//     let elProducto = productosLab.includes('AGITADOR')

//     let test = "AGITADOR TEST UNO"

//     console.log("TETS", test.includes("AGITADOR"))
//     console.log(elProducto, productosLab)
    
// }


const productosLab = [
    {
        id:'1',
        subCategoriaID:'1',
        modelo:'78-1',
        nombre:'AGITADOR MAGNÉTICO MARCA OBERTEC MODELO 78-1',
        imagen:'../demo/img/laboratorioIMG/78-1.jpg',
        descripcion:' Características Principales:  <br/> <br/> - Regulación de velocidad: 0-1500 rpm.  <br/> - Rango de temperatura (platina): desde ambiente +5º C hasta 100 ºC. <br/> - Precisión: ±3ºC. <br/> - Diámetro de la placa: 11,5 cm. <br/> - Consumo: 40W en rotación, 250W con temperatura. <br/> - Alimentación: 220v 50hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación'
    },
    {
        id:'2',
        subCategoriaID:'1',
        modelo:'78HW-1',
        nombre:'AGITADOR MAGNÉTICO MARCA OBERTEC MODELO 78HW- 1',
        imagen:'../demo/img/laboratorioIMG/78HW-1.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Placa calefactora: Confeccionada en acero inoxidable. <br/> - Rango de temperatura de funcionamiento: Temperatura ambiente +5°C hasta 100 °C. Precisión: ±3°C. <br/> - Regulación de RPM velocidad: 0-1500 rpm. <br/> - Volumen de agitación de H2O:  2Litros. <br/> - Diámetro de la placa calefactora: 11,5 cm. <br/> - Consumo eléctrico: 40W en rotación, 250W con potencia de temperatura. <br/> - Alimentación: 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'3',
        subCategoriaID:'1',
        modelo:'HS-12',
        nombre:'AGITADOR MAGNETICO MARCA OBERTEC MODELO HS-12.',
        imagen:'../demo/img/laboratorioIMG/HS-12.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Placa calefactora: Confeccionada en aluminio con protección cerámica anticorrosión. <br/> - Medidas de la placa calefactora: 12 x 12cm. <br/> - Rango de temperatura de funcionamiento: Temperatura ambiente +5°C hasta 280 °C. Precisión: ±5°C. <br/> - Regulación de RPM velocidad: 0-1600 rpm. <br/> - Volumen de agitación de H2O: 1Litros. <br/> - Temperatura ambiente y humedad permitidas: 5-40 °C, 80% de humedad relativa Protección. <br/> - Posee circuito de seguridad de sobre temperatura. <br/> - Alimentación: 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'4',
        subCategoriaID:'1',
        modelo:'HS-17',
        nombre:'AGITADOR MAGNETICO MARCA OBERTEC MODELO HS-17.',
        imagen:'../demo/img/laboratorioIMG/HS-17.jpg',
        descripcion:'Principales:Placa calefactora:  <br/> <br/> - Confeccionada en aluminio con protección cerámica anticorrosión. <br/> - Medidas de la placa calefactora: 17 x 17cm. <br/> - Rango de temperatura de funcionamiento: Temperatura ambiente +5°C hasta 300 °C. Precisión: ±5°C. <br/> - Regulación de RPM velocidad: 0-1600 rpm. <br/> - Volumen de agitación de H2O: 3 Litros. <br/> - Protección: Posee circuito de seguridad de sobre temperatura. <br/> - Alimentación: 220V 50Hz. <br/> - Temperatura ambiente y humedad permitidas: 5-40 °C, 80% de humedad relativa. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'5',
        subCategoriaID:'1',
        modelo:'HSC-19T',
        nombre:'AGITADOR MAGNETICO MARCA OBERTEC MODELO HSC-19T.',
        imagen:'../demo/img/laboratorioIMG/HS-19T.png',
        descripcion:'Características Principales:   <br/> <br/> - Placa calefactora: Confeccionada en aluminio con protección cerámica anticorrosión. <br/> - Medidas de la placa calefactora: 19 x 19cm. <br/> - Rango de temperatura de funcionamiento: Temperatura ambiente +5°C hasta 350 °C. Precisión: ±5°C. <br/> - Regulación de RPM velocidad: 200-2000 rpm. <br/> - Volumen de agitación de H2O: 5 Litros. <br/> -  Nivel de protección: IP42. <br/> - Temperatura ambiente y humedad permitidas: 5-40 °C, 80% de humedad relativa. <br/> - Alimentación: 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'6',
        subCategoriaID:'1',
        modelo:'AG-1200',
        nombre:'AGITADOR MAGNETICO MARCA OBERTEC MODELO AG-1200',
        imagen:'../demo/img/laboratorioIMG/AG1200.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Placa de agitación: Confeccionada en Acero inoxidable. <br/> - Medidas de la placa de agitacion: 17 x 23cm.  <br/> - Regulación de RPM velocidad: 0-1200 rpm. <br/> - Volumen de agitación de H2O: 10 Litros. <br/> - Temperatura ambiente y humedad permitidas: 5-40 °C, 80% de humedad relativa. <br/> - Alimentación: 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'7',
        subCategoriaID:'1',
        modelo:'AG-1200C',
        nombre:'AGITADOR MAGNETICO MARCA OBERTEC MODELO AG-1200C',
        imagen:'../demo/img/laboratorioIMG/AG1200C.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Placa calefactora: Confeccionada en Acero inoxidable. <br/> - Medidas de la placa calefactora: 17 x 23cm. <br/> - Rango de temperatura de funcionamiento: Temperatura ambiente +20°C hasta 230 °C. Precisión: ±5°C. <br/> - Regulación de RPM velocidad: 0-1200 rpm. <br/> - Volumen de agitación de H2O: 10 Litros. <br/> - Temperatura ambiente y humedad permitidas: 5-40 °C, 80% de humedad relativa. <br/> - Alimentación: 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'8',
        subCategoriaID:'1',
        modelo:'MS3',
        nombre:'MINI AGITADOR MAGNÉTICO MARCA OBERTEC MODELO MS3',
        imagen:'../demo/img/laboratorioIMG/MS3.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Motor sin escobillas libre de mantenimiento. <br/> - Medidas de la placa de trabajo: 125 mm. <br/> - Volumen de agitación de H2O: 1Litros. <br/> - Regulación de RPM velocidad: 200-1800 rpm. <br/> - Nivel de protección: IP42. <br/> - Temperatura ambiente y humedad permitidas: 5-40 °C, 80% de humedad relativa. <br/> - Potencia: 3W.Alimentación: 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'9',
        subCategoriaID:'1',
        modelo:'MS5',
        nombre:'MINI AGITADOR MAGNÉTICO MARCA OBERTEC MODELO MS5',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Motor sin escobillas libre de mantenimiento. <br/> - Medidas de la placa de trabajo: 135 mm. <br/> - Volumen de agitación de H2O: 2Litros. <br/> - Regulación de RPM velocidad: 350-1800 rpm. <br/> - Nivel de protección: IP42. <br/> - Temperatura ambiente y humedad permitidas: 5-40 °C, 80% de humedad relativa. <br/> - Potencia: 5W.Alimentación: 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'10',
        subCategoriaID:'2',
        modelo:'VM300S',
        nombre:'AGITADOR MINI VORTEX MARCA OBERTEC MODELO VM300S',
        imagen:'../demo/img/laboratorioIMG/VM300S.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Modo de funcionamiento: Touch. <br/> - Tipo de movimiento: OrbitalCapacidad de carga 50ml. <br/> - Velocidad de rotacion: 0-3000 rpm. <br/> - Diámetro orbital: 4,5mm. <br/> - Tipo de motor: sin escobillas libre de mantenimiento. <br/> - Nivel de protección: IP42. <br/> - Temperatura ambiente y humedad permitidas: 5-40 °C, 80% de humedad relativa. <br/> - Potencia: 12W.Volumen de agitación: hasta 50ml. <br/> -  Alimentación: 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación. '
    },
    {
        id:'11',
        subCategoriaID:'3',
        modelo:'WB100-2F',
        nombre:'BAÑO TERMOSTATICO MARCA OBERTEC MODELO WB100-2F',
        imagen:'../demo/img/laboratorioIMG/WB100-2F.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Temperatura máxima: 100°C Variación de la temperatura: ±0.5°C <br/> - Consumo: 600W <br/> -Alimentación: 220V 50Hz <br/> - Tamaño de la cámara de trabajo: 30x150x14cm. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'12',
        subCategoriaID:'4',
        modelo:'DRBA-100',
        nombre:'PROXIMAMENTE',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        descripcion:'FALTAN LOS ARCHIVOS'
    },
    {
        id:'13',
        subCategoriaID:'5',
        modelo:'TC-800B',
        nombre:'CABEZAL TERMOSTATICO MARCA OBERTEC MODELO TC-800B',
        imagen:'../demo/img/laboratorioIMG/TC-800B.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Gabinete: Construido en dos piezas.  <br/> - Base de en acero inoxidable, espesor 1.25mm. <br/> - Tapa de aluminio espesor 2.0 mm con tratamiento de pintura hibrida en polvo Epoxy-Polyester. <br/> - Sistema calefactor: Electrocalefactor blindado compactado, construido en vaina de acero inoxidable AISI 316l diámetro 9 mm formato tipo “rulo” de 4 vueltas. <br/> - Potencia total 800 w 220 v. Control de temperatura. <br/> - Selector de temperatura por puntos fijos: 3 puntos de trabajo 25° - 37° y 56°C. <br/> - Selector de temperatura continúo: temperatura ambiente a 100°C. Estabilidad de temperatura +/- 0,3º C. <br/> - Lectura de la temperatura. <br/> - Termómetro (no incluido). <br/> - Sistema de circulación de agua, Mediante bomba construida totalmente en AC/INOX motor de accionamiento silencioso con su eje montado sobre rodamientos. <br/> - Sistema de alarmas: Alarma lumínico audible por sobre temperatura, con corte automático de potencia. <br/> - Alarma lumínico audible por falta de agua, con corte automático de potencia. <br/> - Sistema de iluminación: Iluminación de la cuba por medio de leds de alto brillo (cuba no incluida). <br/> - Conexión 220V 50HZ <br/> -Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'14',
        subCategoriaID:'5',
        modelo:'TC-800M',
        nombre:'CABEZAL TERMOSTATICO MARCA OBERTEC MODELO TC-800MCaracterísticas ',
        imagen:'../demo/img/laboratorioIMG/TC-800M.jpg',
        descripcion:'Características Principales:  <br/> <br/> - Gabinete: Construido en dos piezas. <br/> - Base de en acero inoxidable, espesor 1.25mm. <br/> - Tapa de aluminio espesor 2.0 mm con tratamiento de pintura hibrida en polvo Epoxy-Polyester. <br/> - Sistema calefactor: Electrocalefactor blindado compactado, construido en vaina de acero inoxidable AISI 316l diámetro 9 mm formato tipo “rulo” de 4 vueltas. <br/> - Potencia total 800 w 220 v. <br/> - Control de temperatura: Control de temperatura electrónico, PID microcontrolador, panel frontal diseñado en POLYCARBONATO con controles SOFT TOUCH. <br/> - Variables de operación <br/> - Funcionamiento: ON/OFF o proporcional derivativo. <br/> - Display de tres dígitos color rojo. <br/> - Indicación de temperatura de proceso. <br/> - Display inferior color verde Indicación de temperatura seleccionada. <br/> - Estabilidad de temperatura +/- 0,3º C. Lectura de la temperatura. <br/> - Sensor PT100.Rango de temperatura. <br/> - Temperatura ambiente a 130°C. <br/> - Sistema de circulación de agua, Mediante bomba construida totalmente en AC/INOX motor de accionamiento silencioso con su eje montado sobre rodamientos. <br/> - Sistema de alarmas: Alarma lumínico audible por sobre temperatura, con corte automático de potencia. <br/> - Alarma lumínico audible por falta de agua, con corte automático de potencia. <br/> - Sistema de iluminación: Iluminación de la cuba por medio de leds de alto brillo (cuba no incluida). <br/> - Conexión 220V 50HZ <br/> -Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'15',
        subCategoriaID:'6',
        modelo:'PROXIMAMENTE',
        nombre:'CUBAS DE ELECTROFORESIS ',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        descripcion:'NO DETERMINADO AUN'
    },
    {
        id:'16',
        subCategoriaID:'7',
        modelo:'PROXIMAMENTE',
        nombre:'FUENTES DE PODER',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        descripcion:'NO DETERMINADO AUN'
    },
    {
        id:'17',
        subCategoriaID:'8',
        modelo:'800D',
        nombre:'CENTRÍFUGA MARCA OBERTEC MODELO 800D',
        imagen:'../demo/img/laboratorioIMG/800D.jpg',
        descripcion:'Características Principales: <br/><br/>- Capacidad: 6 tubos de 10/15 ml. <br/> - Rango de velocidad: 0 a 4000 rpm con variador de velocidad. <br/> - Max. RCF: 1790 x g. <br/> - Temporizador: 0-60 min. <br/> - Con cabezal de ángulo fijo 45º. <br/> - Potencia del motor: 50w. <br/> - Alimentación: 220v 50hz. <br/> - Peso: 3.8 Kg. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'18',
        subCategoriaID:'8',
        modelo:'TDL4',
        nombre:'CENTRÍFUGA MARCA OBERTEC MODELO TDL 4',
        imagen:'../demo/img/laboratorioIMG/TDL4.jpg',
        descripcion:'Características Principales:<br/><br/> - Capacidad: 6 tubos de 10/15ml. <br/> - Rango de velocidad: 0 a 4000 rpm con variador de velocidad. <br/> - Máx. RCF: 1790 xg. <br/> - Temporizador: 0-60 min. <br/> - Con cabezal de ángulo fijo. <br/> - Con carcasa construida en plástico de alto impacto. <br/> - Posee switch de corte contra apertura de tapa. <br/> - Posee llave de encendido y led indicador de línea. <br/> - Alimentación: 220v 50hz. <br/> - Dimensiones (L*W*H): 29x28x26cm. <br/> - Peso: 5Kg. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'19',
        subCategoriaID:'8',
        modelo:'TDL80-2B',
        nombre:'CENTRÍFUGA MARCA OBERTEC MODELO TDL80-2B',
        imagen:'../demo/img/laboratorioIMG/TDL80-2B.jpg',
        descripcion:'Características Principales:<br/><br/> - Capacidad: 12 tubos de 15/20ml. <br/> - Rango de velocidad: 0 a 4000 rpm con variador de velocidad. <br/> - Medidor de RPM: Posee instrumento para visualización de RPM. <br/> - Máx. RCF: 2325 xg. <br/> - Temporizador: 0-60 min. <br/> - Con cabezal de ángulo fijo. <br/> - Con carcasa construida en plástico de alto impacto. <br/> - Posee switch de corte contra apertura de tapa. <br/> - Posee llave de encendido y led indicador de línea. <br/> - Alimentación: 220v 50hz. <br/> - Dimensiones (L*W*H): 29x28x26cm. <br/> - Peso: 8Kg. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'20',
        subCategoriaID:'9',
        modelo:'LC-12S',
        nombre:'CENTRIFUGA DE ALTA VELOCIDAD MARCA OBERTEC MODELO LC-12S.',
        imagen:'../demo/img/laboratorioIMG/LC-12S.jpg',
        descripcion:'Características Principales:<br/><br/> - Regulación de velocidad continua. <br/> - Rango de velocidad: 500 a 5000 rpm. <br/> - Precisión de regulación de rpm: ± 30 r/min. <br/> - FCR máx. 2220xg. <br/> - Rango de tiempo: 10s ~ 99min59s. <br/> - Pantalla LCD: Visualización de RPM y RCF. <br/> - Gran capacidad: 8 o 6 tubos cónicos de 15ml con tapón de rosca. 12*5/10ml. <br/> - Posee switch de corte contra apertura de tapa. <br/> - Ruido:  ≤ 60db(A). <br/> - Potencia: 130w. <br/> - Alimentación: 220v 50hz. <br/> - Dimensiones: 37.5 x 32 x 24cm. (largo x ancho x alto). <br/> - Peso 5,5 kg. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'21',
        subCategoriaID:'9',
        modelo:'MC-12PRO',
        nombre:'CENTRIFUGA DE ALTA VELOCIDAD MARCA OBERTEC MC-12PRO.',
        imagen:'../demo/img/laboratorioIMG/MC-12PRO.jpg',
        descripcion:'Centrifuga microprocesada.<br/><br/> - Pantalla LCD: visualización de RPM, RCF y todos sus parámetros. <br/> - Regulación de velocidad continua. <br/> - Velocidad máxima de rotación: 12000 rpm. <br/> - FCR máx. 9660xg. <br/> - Rango de tiempo: 10seg - 23h59min. <br/> - Apertura de tapa automática. <br/> - Bloqueo de tapa de seguridad. <br/> - Ruido ≤ 46db(A). <br/> - Baja vibración. <br/> - Gran capacidad: 12 tubos de 0,2/0,5/1,5/2,0 ml + 0,2 ml 8PCR tira * 4 <br/> - Voltaje	CA220V / 110V - 50Hz 5ª. <br/> - Poder 45W. <br/> - Dimensiones 270 x 180 x 105mm (largo x ancho x alto). <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'22',
        subCategoriaID:'10',
        modelo:'MC-7PRO',
        nombre:'MINICENTRIFUGA MARCA OBERTEC MODELO MC-7PRO',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        descripcion:'Características Principales:<br/><br/> - Regulación de velocidad continua. <br/> - Rango de velocidad: 0-7000rpm±5%. <br/> - FCR máx. 3286xg. <br/> - Rango de tiempo: 1-99min/1-59seg. <br/> -  Capacidad: Ruido:  ≤ 47db(A). <br/> - Potencia: 25w. <br/> - Alimentación: 220v 50hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'23',
        subCategoriaID:'11',
        modelo:'IS 2300C 30C',
        nombre:'ESTUFA DE CULTIVO MARCA FAETA MODELO IS 2300C 30C',
        imagen:'../demo/img/laboratorioIMG/estufa.jpg',
        descripcion:'Características Principales:<br/><br/> - Construcción: cuerpo externo: chapa de ACERO SAE 1010 esmaltada - Cuerpo interno y contrapuerta: acero inoxidable. <br/> - Pintura: esmaltada, por sistema electrostático. <br/> - Aislación: cámara de circulación de aire caliente (cuerpo interno) y puerta externa aisladas con fibra vegetal. <br/> - Estantes: construidos con varilla de hierro zincado que permiten una adecuada circulación de aire caliente dentro de la cámara de cultivo. <br/> - Calefacción: eléctrica por medio de resistencias de alambre nicrón, montadas sobre aisladores cerámicos. <br/> - Puertas dos: una interna de vidrio transparente, otra externa metálica aislada con lana de vidrio. <br/> - Comando digital para control de temperatura, desde temperatura ambiente hasta 70ºC, con +/-0,5ºC. <br/> - 36 Litros - 2 estantes. <br/> - Medida Externa:44x66x45.'
    },
    {
        id:'24',
        subCategoriaID:'11',
        modelo:'IS 2300C 40C',
        nombre:'ESTUFA DE CULTIVO MARCA FAETA MODELO IS 2300C 40C',
        imagen:'../demo/img/laboratorioIMG/estufa.jpg',
        descripcion:'Características Principales:<br/><br/> - Construcción: cuerpo externo: chapa de ACERO SAE 1010 esmaltada - Cuerpo interno y contrapuerta: acero inoxidable. <br/> - Pintura: esmaltada, por sistema electrostático. <br/> - Aislación: cámara de circulación de aire caliente (cuerpo interno) y puerta externa aisladas con fibra vegetal. <br/> - Estantes: construidos con varilla de hierro zincado que permiten una adecuada circulación de aire caliente dentro de la cámara de cultivo. <br/> - Calefacción: eléctrica por medio de resistencias de alambre nicrón, montadas sobre aisladores cerámicos <br/> - Puertas dos: una interna de vidrio transparente, otra externa metálica aislada con lana de vidrio. <br/> - Comando digital para control de temperatura, desde temperatura ambiente hasta 70ºC, con +/-0,5ºC. <br/> - 95 Litros - 2 estantes. <br/> - Medida Externa: 54 x 76 x 55 cm.'
    },
    {
        id:'25',
        subCategoriaID:'11',
        modelo:'IS 2300C 50C',
        nombre:'ESTUFA DE CULTIVO MARCA FAETA MODELO IS 2300C 50C',
        imagen:'../demo/img/laboratorioIMG/estufa.jpg',
        descripcion:'Características Principales:<br/><br/> - Construcción: cuerpo externo: chapa de ACERO SAE 1010 esmaltada - Cuerpo interno y contrapuerta: acero inoxidable. <br/> - Pintura: esmaltada, por sistema electrostático. <br/> - Aislación: cámara de circulación de aire caliente (cuerpo interno) y puerta externa aisladas con fibra vegetal. <br/> - Estantes: construidos con varilla de hierro zincado que permiten una adecuada circulación de aire caliente dentro de la cámara de cultivo. <br/> - Calefacción: eléctrica por medio de resistencias de alambre nicrón, montadas sobre aisladores cerámicos <br/> - Puertas dos: una interna de vidrio transparente, otra externa metálica aislada con lana de vidrio. <br/> - Comando digital para control de temperatura, desde temperatura ambiente hasta 70ºC, con +/-0,5ºC. <br/> - 175 Litros. <br/> - Medida Externa: 64 x 56 x 65 cm.'
    },
    {
        id:'26',
        subCategoriaID:'12',
        modelo:'RMO-80',
        nombre:'AGITADOR MEZCLADOR GIRATORIO MARCA OBERTEC MODELO RMO-80',
        imagen:'../demo/img/laboratorioIMG/RMO-80.jpg',
        descripcion:'Características Principales:<br/><br/> - Método de operación: rotación circular. <br/> - Combinación de diferentes tubos, tubos de 1,5ml-50ml disponibles. <br/> - Tubo de centrífuga: 50 ml x 8. <br/> - Tubo de centrífuga: 15 ml x 6. <br/> - Tubo de centrífuga: 1,5 ml/2 ml x 24. <br/> - Tubo de recogida de sangre: 10ml x 6. <br/> - Tubo de recogida de sangre: 2ml/5ml x 24. <br/> - Ángulo de inclinación: 40°- 80. <br/> - Rango de velocidad: 20-80rpm. <br/> - Precisión de control de velocidad: ± 1 rpm <br/> - Visualización de velocidad/tiempo: LED <br/> - Rango de ajuste de tiempo: 1min - 23h59min. <br/> - Temperatura ambiente permitida: 5 ~ 40 ℃ 80 % de humedad relativa. <br/> - Humedad relativa permitida:80%. <br/> - Frecuencia:50/ 60Hz. <br/> - Potencia de entrada del equipo:20W. <br/> - Alimentación: 100-220V. <br/> - Dimensión (MM) 230*180*265. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'27',
        subCategoriaID:'13',
        modelo:'HM-1000',
        nombre:'MANTO CALEFACTOR MARCA OBERTEC MODELO HM.',
        imagen:'../demo/img/laboratorioIMG/HM.jpg',
        descripcion:'Características Principales:<br/><br/> - Calentamiento uniforme y rápido con control electrónico de temperatura. <br/> - Control de temperatura preciso. <br/> - Resistente a los agentes corrosivos. <br/> - Capacidad: 50ml, 100ml, 250ml, 500ml, 1000ml, 2000ml, 3000ml, 5000ml, 10000ml, 20000ml. <br/> - Poder de calefacción 100-2400W. <br/> - Temperatura de calentamiento Temperatura ambiente ~ 300 ℃. <br/> - Alimentación 220V 50Hz. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'28',
        subCategoriaID:'14',
        modelo:'C-500',
        nombre:'PROXIMAMENTE',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        descripcion:'FALTA LA DATA'
    },
    {
        id:'29',
        subCategoriaID:'14',
        modelo:'G-1000',
        nombre:'PROXIMAMENTE',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        descripcion:'FALTA LA DATA'
    },
    {
        id:'30',
        subCategoriaID:'15',
        modelo:'P10',
        nombre:'MICROPIPETA AUTOCLAVABLE MARCA OBERTEC MODELO P10.',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
        descripcion:'Características Principales:<br/><br/> - Rango de volumen: 0.5 - 10μl. <br/> - Volumen de prueba: 10μl. (error de precisión ±1,00%). <br/> - Volumen de prueba: 5μl. (error de precisión ±1,50%). <br/> - Volumen de prueba: 1μl. (error de precisión ±2,50%). <br/> - Incremento: 0.1ul. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'31',
        subCategoriaID:'15',
        modelo:'P20',
        nombre:'MICROPIPETA AUTOCLAVABLE MARCA OBERTEC MODELO P20.',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
        descripcion:'Características Principales: <br/><br/> - Rango de volumen: 2 - 20μl. <br/> - Volumen de prueba: 20μl. (error de precisión ±0,90%). <br/> - Volumen de prueba: 10μl. (error de precisión ±1,20%). <br/> - Volumen de prueba: 2μl. (error de precisión ±3,00%). <br/> - Incremento: 0.5ul. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'32',
        subCategoriaID:'15',
        modelo:'P50',
        nombre:'MICROPIPETA AUTOCLAVABLE MARCA OBERTEC MODELO P50.',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
        descripcion:'Características Principales: <br/><br/> - Rango de volumen: 5 - 50μl. <br/> - Volumen de prueba: 50μl. (error de precisión ±0,60%). <br/> - Volumen de prueba: 25μl. (error de precisión ±0,90%). <br/> - Volumen de prueba: 5μl. (error de precisión ±2,00%). <br/> - Incremento: 0.5ul. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'33',
        subCategoriaID:'15',
        modelo:'P100',
        nombre:'MICROPIPETA AUTOCLAVABLE MARCA OBERTEC MODELO P100',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
        descripcion:'Características Principales: <br/><br/> - Rango de volumen: 10 - 100μl. <br/> - Volumen de prueba: 100μl. (error de precisión ±0,60%). <br/> - Volumen de prueba: 50μl. (error de precisión ±0,90%). <br/> - Volumen de prueba: 10μl. (error de precisión ±2,00%). <br/> - Incremento: 1ul. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'34',
        subCategoriaID:'15',
        modelo:'P200',
        nombre:'MICROPIPETA AUTOCLAVABLE MARCA OBERTEC MODELO P200.',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
        descripcion:'Características Principales: <br/><br/> - Rango de volumen: 20 - 200μl. <br/> - Volumen de prueba: 200μl. (error de precisión ±0,15%). <br/> - Volumen de prueba: 100μl. (error de precisión ±0,30%). <br/> - Volumen de prueba: 20μl. (error de precisión ±1,00%). <br/> - Incremento: 1ul. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'35',
        subCategoriaID:'15',
        modelo:'P1000',
        nombre:'MICROPIPETA AUTOCLAVABLE MARCA OBERTEC MODELO P1000.',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
        descripcion:'Características Principales: <br/><br/> - Rango de volumen: 100 - 1000μl. <br/> - Volumen de prueba: 1000μl. (error de precisión ±0,60%). <br/> - Volumen de prueba: 500μl. (error de precisión ±0,70%). <br/> - Volumen de prueba: 100μl. (error de precisión ±1,50%). <br/> - Incremento: 5ul. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'36',
        subCategoriaID:'15',
        modelo:'',
        nombre:'NO VA',
        imagen:'../demo/img/laboratorioIMG/micropipeta.jpg',
        descripcion:'FALTA DATA'
    },
    {
        id:'37',
        subCategoriaID:'16',
        modelo:'XSZ-107 BN LED',
        nombre:'MICROSCOPIO BINOCULAR MARCA OBERTEC MODELO XSZ 107 BN',
        imagen:'../demo/img/laboratorioIMG/XSZ107BN.jpg',
        descripcion:'Características Principales: <br/><br/> - Cabeza binocular tipo sliding con inclinación a 45º, rotatoria 360º. <br/> - Portaoculares con distancia interpupilar variable 55 - 75 mm y regulación dióptrica individual ± 5 d. Oculares 1 par 10x wf. <br/> - Objetivos acromáticos 4x/n.a 0.10,10x/n.a 0.25,40x(r)/n.a 0.65 y 100x (r)/n.a 1.25 oil. <br/> - Aumentos totales 1600x. <br/> - Platina mecánica de 14.8 x 12.3 cm con mando bajo coaxial. Condensador de abbe n.a 1.2 regulable en altura y precentrado con diafragma iris y portafiltro. <br/> - Enfoque macro y macrométrico coaxial bilateral. División mínima 2 micrones. <br/> - Con focus stop y tensión de ajuste en el micrométrico. <br/> - Iluminación a led regulable. <br/> - Incluye: par de oculares 10x wf, 1 par de oculares 16x wf, filtro azul, funda. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'38',
        subCategoriaID:'17',
        modelo:'S10-L',
        nombre:'LUPA BINOCULAR MARCA OBERTEC MODELO S10-P.',
        imagen:'../demo/img/laboratorioIMG/lupaSL10.jpg',
        descripcion:'Características Principales: <br/><br/> - Cabeza binocular recta, con ajuste de distancia interpupilar 55-75 mm. <br/> - Dióptrica en uno de los tubos, ± 5 d. <br/> - Objetivo fijo 2x. <br/> - Par de oculares 10x WF. <br/> - Distancia de trabajo 80 mm. <br/> - Aumentos totales 20x. <br/> - Rotación de la cabeza de 360º. <br/> - Enfoque macrométrico bilateral por piñón y cremallera. <br/> - Par de pinzas de sujeción, con disco portaobjetos blanco/negro de 60 mm de diámetro. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'39',
        subCategoriaID:'17',
        modelo:'ST-302L',
        nombre:'LUPA BINOCULAR MARCA OBERTEC MODELO ST30-2L',
        imagen:'../demo/img/laboratorioIMG/lupaST30.jpg',
        descripcion:'Características Principales: <br/><br/> -  Cabeza binocular con inclinación a 45°. <br/> - Distancia interpupilar variable de 55 - 75 mm. <br/> - Portaocular con ajuste de dioptrías ± 5 d. <br/> - Par de oculares 10x WF incluidos. <br/> - Objetivos de 2x y 4x en torreta giratoria. <br/> - Distancia de trabajo de 80 mm. <br/> - Aumentos totales 40x. <br/> - Enfoque macrométrico bilateral con ajuste de tensión. <br/> - La base contiene dos platinas, blanco/negro y transparente y pinzas de sujeción. <br/> - La iluminación es LED incidente y trasmitida de 12V/10W <br/> - Llave de encendido on-off. <br/> - Ideal para ser utilizada en laboratorio, industria, biología y educación.'
    },
    {
        id:'40',
        subCategoriaID:'18',
        modelo:'TC-800B',
        nombre:'CABEZAL TERMOSTATICO MARCA OBERTEC MODELO TC-800B',
        imagen:'../demo/img/laboratorioIMG/TC-800Ba.jpg',
        descripcion:'Características Principales: <br/><br/> - Gabinete: Construido en dos piezas. Base de en acero inoxidable, espesor 1.25mm. Tapa de aluminio espesor 2.0 mm con tratamiento de pintura hibrida en polvo Epoxy-Polyester <br/> - Sistema calefactor: Electrocalefactor blindado compactado, construido en vaina de acero inoxidable AISI 316l diámetro 9 mm formato tipo “rulo” de 4 vueltas. <br/> - Potencia total 800 w 220 v <br/> - Control de temperatura <br/> - Selector de temperatura por puntos fijos: 3 puntos de trabajo 25° - 37° y 56°C <br/> - Selector de temperatura continúo: temperatura ambiente a 100°C <br/> - Estabilidad de temperatura +/- 0,3º C <br/> - Lectura de la temperatura <br/> - Termómetro (no incluido)  <br/> - Sistema de circulación de agua <br/> - Mediante bomba construida totalmente en AC/INOX motor de accionamiento silencioso con su eje montado sobre rodamientos <br/> - Sistema de alarmas <br/> - Alarma lumínico audible por sobre temperatura, con corte automático de potencia <br/> - Alarma lumínico audible por falta de agua, con corte automático de potencia <br/> - Sistema de iluminación <br/> - Iluminación de la cuba por medio de leds de alto brillo (cuba no incluida) <br/> - Conexión 220V 50HZ <br/> - Para ser utilizada en laboratorio, industria y educación.'
    },
    {
        id:'41',
        subCategoriaID:'18',
        modelo:'TC-800M',
        nombre:'',
        imagen:'../demo/img/laboratorioIMG/TC-800Mb.jpg',
        descripcion:''
    },
    {
        id:'',
        subCategoriaID:'',
        modelo:'',
        nombre:'',
        imagen:'../demo/img/laboratorioIMG/MS5.jpg',
        descripcion:''
    },

]

const categoriasData = [
    {
        id:'1',
        nombre:'AGITADORES',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/agitadores.png',
        categoria:'AGITADORES',
        seccion:'1'
    },
 
    {
        id:'2',
        nombre:'BAÑOS TERMOSTÁTICOS',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/baños.png',
        categoria:'BAÑOS TERMOSTÁTICOS',
        seccion:'2'
    },
    {
        id:'3',
        nombre:'Producto3',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/biologia.png',
        categoria:'BIOLOGÍA MOLECULAR Y GENÉTICA',
        seccion:'3'
    },
    {
        id:'4',
        nombre:'CENTRIFUGAS',
        icon:'../demo/img/iconB.png',
        imagen:  '../demo/img/galeria/centrifugas.png',
        categoria:'CENTRIFUGAS',
        seccion:'4'
    },
    {
        id:'5',
        nombre:'ESTUFAS',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/estufas.png',
        categoria:'ESTUFAS',
        seccion:'5'
    },
    {
        id:'6',
        nombre:'HOMOGENEIZADOR',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/homegenei.png',
        categoria:'HOMOGENEIZADOR',
        seccion:'6'
    },
    {
        id:'7',
        nombre:'MANTOS Y PLANCHAS',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/mantos.png',
        categoria:'MANTOS Y PLANCHAS',
        seccion:'7'
    },
    {
        id:'8',
        nombre:'MANEJO DE SUSTANCIAS LIQUIDAS',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/manejo.png',
        categoria:'MANEJO DE SUSTANCIAS LIQUIDAS',
        seccion:'8'
    },
    {
        id:'9',
        nombre:'MICROSCOPIA',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/microscopia.png',
        categoria:'MICROSCOPIA',
        seccion:'9'
    },
    {
        id:'10',
        nombre:'TERMOCONTROLADORES',
        icon:'../demo/img/iconB.png',
        imagen: '../demo/img/galeria/termocont.png',
        categoria:'TERMOCONTROLADORES',
        seccion:'10'
    },
]



const searchInput = document.querySelector('#searchInput');
const searchResults = document.querySelector('#searchResults');

  const categoriasProductos = categoriasData.map(producto => (producto.categoria))
  const suggestions = productosLab.map(sugerido => (sugerido.modelo));
  const filtrado = categoriasProductos.concat(suggestions)
  console.log(filtrado)

// Inicializa Awesomplete con el campo de entrada y el array de palabras
const awesomplete = new Awesomplete(searchInput, {
  minChars: 1, // Mínimo número de caracteres para mostrar sugerencias
  maxItems: 5, // Número máximo de sugerencias mostradas
  list: filtrado.map(producto => (producto)), // Array de palabras para autocompletado
  filter: Awesomplete.FILTER_CONTAINS // Filtra sugerencias que contengan el texto ingresado
  
});
const regex = /[a-z]/g;


searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value;
  // Filtra las sugerencias por palabras similares al término de búsqueda
  const filteredSuggestions = filtrado.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase().match(regex).map(filtro => (filtro)))
  );
  console.log(filteredSuggestions, "SUGERENCIA")

//   const filteredWords = filtrado.filter(word => {
   
//    return title.includes(searchTerm) && searchTerm.length >= 2;
//   });

//   const resultsHTML = filteredSuggestions.map(suggestion => `<li class="white">${suggestion}</li>`).join('');
//   // Muestra los resultados en el contenedor
//   searchResults.innerHTML = resultsHTML;
});

// Agrega un evento al seleccionar una sugerencia para realizar la búsqueda completa
searchInput.addEventListener('awesomplete-selectcomplete', () => {
  const selectedSuggestion = awesomplete.selected;
  // Realiza la búsqueda completa con la sugerencia seleccionada
  // Aquí puedes implementar la lógica para mostrar los resultados completos de la búsqueda
});






  
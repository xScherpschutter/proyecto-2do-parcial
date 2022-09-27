class calculadora{ 
    campo_vacio(){        
        entrada.value="este campo no puede estar vacio";
        document.getElementById("entrada").style.color="yellow";
        setTimeout(function(){entrada.value="";
        document.getElementById("entrada").style.color="white"},1100);            
        
    }
    
    
    divisores(){
        let num, divisores="",i;
        let entrada= document.getElementById("entrada");
            num= parseInt(entrada.value);
            if(entrada.value==""){
                this.campo_vacio();
                
            }
            else{
                if(isNaN(num)){
                    alert("Ingrese un número");
                }
                for(i=1;i<=num;i++){
                    if(num%i==0){
                        divisores=divisores+i.toString()+", ";
                    }
                }
                entrada.value=`los divisores del número ingresado son: "${divisores}"`   
            }
        
    }

    primos(){
        let num,i,x=0;
        let entrada= document.getElementById("entrada");
        num= parseInt(entrada.value);
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            if(isNaN(num)){
                alert("Ingrese un número");
            }
            for(i=2;i<=num;i++){
                if(num%i==0){
                    x=x+1;
                }
                
            }
            if(x==1){
                entrada.value=`El número ${num} es primo`;
            }else{
                entrada.value=`El número ${num} no es primo`;
            }
        }
        

    }    
    invertirnum(){
        let num, invertido="", resto;
        let entrada= document.getElementById("entrada");
        num= parseInt(entrada.value);
        if(entrada.value==""){
            this.campo_vacio();
            
        }
        else{if(isNaN(num)){
            alert("Ingrese un número");
        }
        while(num>0){
            resto=num%10;
            invertido=invertido+resto.toString();
            num=Math.floor(num/10);
        }
        entrada.value=invertido;}
        
    }

    perfectos(){
        let num, primos=0,i;
        let entrada= document.getElementById("entrada");
        num= parseInt(entrada.value);
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            if(isNaN(num)){
                alert("Ingrese un número");
            }
            for(i=1;i<num;i++){
                if(num%i==0){
                    primos=primos+i
                }
                if(primos==num){
                    entrada.value=`El número ${num} es un número perfecto`;
                }else{
                    entrada.value=`El número ${num} no es un número perfecto`;
                }
            }
        }
        
        
    }

    fibonacci(){
        let num,alm=[],i;
        let entrada= document.getElementById("entrada");
        num= parseInt(entrada.value);
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            if(isNaN(num)){
                alert("Ingrese un número");
            }
            for(i=0;i<num;i++){
                if(i==0){
                    alm.push(0);
                }
                else if(i==1){
                    alm.push(1);
                }
                else{
                    alm.push(alm[i-1]+alm[i-2]);
                }
            }
            entrada.value=alm;
        }
                
        
    }   
    Base10_2(){
        let num,alm=[],i,resto;
        let entrada= document.getElementById("entrada");
        num= parseInt(entrada.value);
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            
        
        }
        





    }
    Base10_8(){
        let alm=[],resto,num,i,x,alm2=[];
        let entrada= document.getElementById("entrada");
        num= parseInt(entrada.value);
        x=num;if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            if(isNaN(num)){
                alert("Ingrese un número");
            }
            for(i=0;num>0;i++){
                resto=num%8;
                alm[i]=resto;
                num=Math.floor(num/8);
            }
            for (let i=alm.length-1;i>=0;i--){
                alm2=alm2+alm[i];
            }
            entrada.value=`el número ${x} transformado en octal es: ${alm2}`
        }      
    }


    Base10_16(){
    }


    Base2_10(){
    }


    Base2_16(){
    }
    contar_palabras(){
        let frase,cont=0;
        let entrada= document.getElementById("entrada");
        frase= entrada.value;
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            for(let i=0;i<frase.length;i++){
                if(frase[i]==" "&&frase[i+1]!=" "){
                    cont=cont+1;
                }
            }
            entrada.value=`La frase tiene ${cont+1} palabras`;
        }
        
    }

    palindromo(){
        let frase,frase2="",frase3="";
        let entrada= document.getElementById("entrada");
        frase= entrada.value;
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            for(let i=frase.length-1;i>=0;i--){
                if(frase[i]!=" "){
                    frase3=frase[i]+frase3;
                    frase2=frase2+frase[i];
                    console.log(frase2);
                }
            }
            if(frase3==frase2){
                entrada.value=`La frase "${frase}" es un palíndromo`;
            }
            else{
                entrada.value=`La frase "${frase}" no es un palíndromo`;
            }
        }
        
    }

    invertir_frase(){
        let frase,frase2="";
        let entrada= document.getElementById("entrada");
        frase= entrada.value;
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            for(let i=frase.length-1;i>=0;i--){
                frase2=frase2+frase[i];
            }
            entrada.value=frase2;
        }
        
    }
    
    contar_caracteres(){
        let frase,cont=0;
        let entrada= document.getElementById("entrada");
        frase= entrada.value;
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            for(let i=0;i<frase.length;i++){
                if(frase[i]!=" "){
                    cont=cont+1;
                }
            }
            entrada.value=`La frase tiene ${cont} caracteres`;
        }
        
    }

    buscar_cadena(){
        let frase,frase2,cont=0;
        let entrada= document.getElementById("entrada");
        frase= entrada.value;
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            frase2= prompt("Ingrese la palabra a buscar");
        for(let i=0;i<frase.length;i++){
            if(frase[i]==frase2[0]){
                for(let j=0;j<frase2.length;j++){
                    if(frase[i+j]==frase2[j]){
                        cont=cont+1;
                    }
                }
                if(cont==frase2.length){
                    entrada.value=`La frase si contiene la palabra o caracter "${frase2}"`;
                }
                else{
                    entrada.value=`La frase no contiene la palabrao caracter "${frase2}"`;
                }
            }
        }
        }
        

    }
    //!xd
    mayor_de_arreglo(){
        let arreglo=[],mayor;
        let entrada= document.getElementById("entrada");
        arreglo= entrada.value.split(",");
        mayor=0;
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            for(let i=0;i<=arreglo.length;i++){
                if(mayor<arreglo[i]){
                    mayor=arreglo[i];
                    console.log(arreglo[i])
                }
            }
            entrada.value=`El mayor de los números es: ${mayor}`;
        }
        

    }


    
    promedio_arreglo(){
        let arreglo,acumulador,promedio,contador;
        let entrada = document.getElementById("entrada")
        arreglo = entrada.value
        arreglo = arreglo.split(",")
        acumulador = 0
        contador = 0
        promedio = 0
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            for (let x = 0; x <= arreglo.length-1; x++) {
                acumulador = acumulador + parseFloat(arreglo[x])
                contador = contador + 1    
                
            }
            promedio = parseFloat(acumulador/contador)
            entrada.value=`El promedio del arreglo es: ${promedio}`
        }
        
    }

    insertar_arreglo(){
    } 

    buscar_arreglo(){
        let num,cont,pos;
        let entrada = document.getElementById("entrada")
        let arreglo = entrada.value.split(",")
        if(entrada.value==""){
            this.campo_vacio();
        }
        else{
            num = prompt("Ingrese el número a buscar")
        for(let i=0; i<=arreglo.length-1; i++){
            if(arreglo[i]==num){
                cont=cont+1
                pos=[i+1]
            }            
        }
        if(cont==0){
            entrada.value=`El elemento ${num} no se encuentra en el arreglo`
        }
        else{
            entrada.value=`El elemento ${num} se encuentra en el arreglo en la posición ${pos}`
        }     
        }
    }


    eliminar_arreglo(){      

    }





}
let calc= new calculadora();
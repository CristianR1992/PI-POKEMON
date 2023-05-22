const validation =(form)=>{
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    let error ={};
if(!form.name){
        error.name="Este campo es obligatorio"
    }
if(!form.image){
        error.image="Este campo es obligatorio"
    }

if(form.name.length >20){
    error.name ="El nombre no puede superar los 20 caracteres"
}
if(form.types.length>2){
    error.types ="Solo dos types maximos"
}
if(form.types.length=== 0){
    error.types ="Seleccione al menos un type"
}


if(!urlRegex.test(form.image)){
    error.image="Se requiere una URL correcta" }


    return error;

}

export default validation;
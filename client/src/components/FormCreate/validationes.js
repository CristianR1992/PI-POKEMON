const validation =(form)=>{
    let error ={};
if(!form.name){
        error.name="Este campo es obligatorio"
    }
 if(!form.image){
    error.image="Seleccione una imagen"
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

 return error;

}

export default validation;
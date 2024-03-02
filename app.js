function ProcesarPago(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const exito=Math.random()<0.8;
        //Simulo el 80% de un caso exitoso de pago
        if(exito){
            /*El parametro resolve me indica que la peticio fue exitosa */
            resolve("Pago exitoso");
        }
        else{
            /**El parametro reject me va a indicar que hubo un error en la peticion */
            reject(new Error("Error en el pago"));
        }
      },1000);
      //**Los 5000 milisegundos representan 5 segundos */
    });
}
const totalAPagar=100;
ProcesarPago(totalAPagar).then(resultado=>{
    console.log(resultado);
    /*En caso el pago fue realizado de manera exitosa lo va a mostrar*/
})
.catch(error =>{
    console.error(error.message);
    /*En caso que el pago fue erroneo va a mostrar un mensaje de error al usuario* */
})
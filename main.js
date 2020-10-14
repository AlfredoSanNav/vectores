class Vector{
    constructor(){
        this.vector = new Array ()
    }
    llenar(){
        let valor = 2
        for(let i = 0 ; i < 10 ; i++){
            this.vector[i] = valor
            valor = valor + 2
        }
    }

    mostrar(){
        console.log(this.vector)
    }

    girarDerecha(){
        let contador = 10
        
        for(let i = 0; i < 10 ; i++ ) { 
            this.vector[contador] = this.vector[contador - 1]
            contador--
            if(contador == 0){
                this.vector[0] = this.vector[10]
                delete this.vector[10]
            }
        }
       
    }

    girarIzquierda(){
        this.vector[10] = this.vector[0]
        let contador = 0
        for(let i = 0; i < 10 ; i++ ) { 
            this.vector[contador] = this.vector[contador + 1]
            contador++
        }
        delete this.vector[10]
    }

    invertir(){
        
    }
}

let prueba = new Vector()
prueba.llenar()
prueba.girarIzquierda()
prueba.mostrar()
class Cpf {
    constructor(cpf) {
        this.cpf = cpf;

        
        if (this.validaCpf(cpf)) {
            this.valido = true; 
        } else {
            this.valido = false;
        }
    }

    validaCpf(cpf) {
        let arrayCpf = [];
        const cpfMultiplicadoUm = [];
        const cpfMultiplicadoDois = [];
        for (let c = 0; c < cpf.length; c++) {
            arrayCpf[c] = Number(cpf[c])
        };
        let i = 0;
        for (let c = 10; c > 1; c--) {
            cpfMultiplicadoUm[i] = arrayCpf[i] * c;
            i++
        }
        let contaUm = cpfMultiplicadoUm.reduce((acumulador, valor) => {
            acumulador += valor;
            return acumulador;
        })

        contaUm = 11 - (contaUm % 11);
        contaUm > 9 ? 0 : contaUm;

        i = 0;
        for (let c = 11; c > 1; c--) {
            cpfMultiplicadoDois[i] = arrayCpf[i] * c;
            i++
        }

        let contaDois = cpfMultiplicadoDois.reduce((acumulador, valor) => {
            acumulador += valor;
            return acumulador;
        })

        contaDois = 11 - (contaDois % 11);
        contaDois > 9 ? 0 : contaDois;
        let newCpf = [];
        newCpf[9] = contaUm;
        newCpf[10] = contaDois;
        for (let c = 0; c < cpf.length - 2; c++) {
            newCpf[c] = Number(cpf[c])
        };

        let stringNewCpf = newCpf.join('')


        function isSequencia() {
            const sequencia = stringNewCpf[0].repeat(11);
            return sequencia === stringNewCpf;
        }



        if (stringNewCpf === cpf && !isSequencia()) {
            return true;
            console.log('CPF válido')
            console.log(stringNewCpf)
        } else {
            return false;
            console.log('CPF inválido')
        }
    }


}

const cpf1 = new Cpf('09762714512');
const cpf2 = new Cpf('11111111111'); 

console.log(cpf1, cpf2)

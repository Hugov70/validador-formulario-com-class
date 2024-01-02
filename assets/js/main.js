


class ValidaForm {
    constructor() {
        this.nome = document.getElementById('txtnome');
        this.sobrenome = document.getElementById('txtsobrenome');
        this.cpf = document.getElementById('inputcpf');
        this.usuario = document.getElementById('txtusuario');
        this.senha = document.getElementById('txtsenha');
        this.senharepitida = document.getElementById('txtsenharepitida');
        this.erros = document.getElementById('erros');
        this.formulario = document.getElementById('formulario')
        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        this.erros.innerHTML = ''
        e.preventDefault();
        if (this.sequenciaUsuarioCorreta() && this.allCamposPreenchidos() && this.tamanhoUsuarioCorreto() && this.tamanhoSenhaCorreto() && this.senhasIguais() && this.cpfValido()) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }

    }




    cpfValido() {
        this.cpfValid = new Cpf(this.cpf.value);
        if (this.cpfValid.valido === true) return true;
        this.erros.innerHTML += `<p>Cpf inválido</p>`
        return false;
    }
    
    tamanhoSenhaCorreto() {
    if (this.senha.value.length >= 6 && this.senha.value.length <= 12) return true;
    this.erros.innerHTML += `<p>A senha deve ter entre 6 e 12 caracteres</p>`
    return false;
}

 senhasIguais() {
    if (this.senha.value === this.senharepitida.value) return true;
    this.erros.innerHTML += `<p>As senhas devem ser iguais </p>`
    return false;
}

 tamanhoUsuarioCorreto() {
    if (this.usuario.value.length >= 3 && this.usuario.value.length <= 12) return true;
    this.erros.innerHTML += `<p>Usuário deve ter entre 3 e 12 caracteres </p>`
    return false;
}

allCamposPreenchidos() {
    if (this.nome.value === '') {
        erros.innerHTML += `<p>Todos os campos devem estar preenchidos</p>`
        return false;
    }
    if (this.sobrenome.value === '') {
        erros.innerHTML += `<p>Todos os campos devem estar preenchidos</p>`
        return false;
    }
    if (this.cpf.value === '') {
        erros.innerHTML += `<p>Todos os campos devem estar preenchidos</p>`
        return false;
    }
    if (this.usuario.value === '') {
        erros.innerHTML += `<p>Todos os campos devem estar preenchidos</p>`
        return false;
    }
    if (this.senha.value === '') {
        erros.innerHTML += `<p>Todos os campos devem estar preenchidos</p>`
        return false;
    }
    if (this.senharepitida.value === '') {
        erros.innerHTML += `<p>Todos os campos devem estar preenchidos</p>`
        return false;
    }

    return true
};

 sequenciaUsuarioCorreta() {
    this.arrayUsuario = [];
    for (let c = 0; c < this.usuario.value.length; c++) {
        if (this.eNaN(Number(this.usuario.value[c]))) {
            this.arrayUsuario[c] = String(this.usuario.value[c]);
        } else {
            this.arrayUsuario[c] = Number(this.usuario.value[c]);
        }
    }
    console.log(this.arrayUsuario)

    if (this.isDiferente()) {
        this.erros.innerHTML += `<p>O nome de usuário deve conter apenas letras ou apenas números</p>`
        return false;
    } else {
        return true;
    }



}

isDiferente() {
    for (let c = 1; c < this.arrayUsuario.length; c++) {
        if (typeof this.arrayUsuario[0] !== typeof this.arrayUsuario[c]) {
            return true;
        }
    }
    return false;
}

 eNaN(valor) {
    this.val = valor;
    if (this.val === valor) return false;
    else return true;

}
    };


const valida = new ValidaForm()










var basico = document.querySelector('#basico')
var basicoItens = document.querySelector('.basico-itens')
var padrao = document.querySelector('#padrao')
var padraoItens = document.querySelector('.padrao-itens')
var premium = document.querySelector('#premium')
var premiumItens = document.querySelector('.premium-itens')
var preco01 = document.querySelector('#preco-01')
var preco02 = document.querySelector('#preco-02')
var preco03 = document.querySelector('#preco-03')
var quali01 = document.querySelector('#quali-01')
var quali02 = document.querySelector('#quali-02')
var quali03 = document.querySelector('#quali-03')
var resul01 = document.querySelector('#resul-01')
var resul02 = document.querySelector('#resul-02')
var resul03 = document.querySelector('#resul-03')
var ver01 = document.querySelector('#ver-01')
var ver02 = document.querySelector('#ver-02')
var ver03 = document.querySelector('#ver-03')
var ver11 = document.querySelector('#ver-11')
var ver12 = document.querySelector('#ver-12')
var ver13 = document.querySelector('#ver-13')
var buttonB = document.querySelector('#buttonB')
var buttonP = document.querySelector('#buttonP')
var buttonPR = document.querySelector('#buttonPR')

    basico.addEventListener('click', () =>{
        basico.setAttribute('style','background : red')
        basicoItens.style.display = 'flex'
        preco01.setAttribute('style','color : red')
        quali01.setAttribute('style', 'color : red')
        resul01.setAttribute('style', 'color : red')
        ver01.style.display = 'none'
        ver11.style.display = 'flex'
        buttonB.style.display = 'flex'

        premium.setAttribute('style','background : #e0454d')
        premiumItens.style.display = 'none'
        preco03.setAttribute('style', 'color : #737373')
        quali03.setAttribute('style', 'color : #737373')
        resul03.setAttribute('style', 'color : #737373')
        ver03.style.display = 'none'
        ver13.style.display = 'flex'
        buttonPR.style.display = 'none'

        padrao.setAttribute('style','background : #e0454d')
        padraoItens.style.display = 'none'
        preco02.setAttribute('style', 'color : #737373')
        quali02.setAttribute('style', 'color : #737373')
        resul02.setAttribute('style', 'color : #737373')
        ver02.style.display = 'flex'
        ver12.style.display = 'none'
        buttonP.style.display = 'none'
    })

    padrao.addEventListener('click',() =>{
        padrao.setAttribute('style', 'background : red')
        padraoItens.style.display = 'flex'
        preco02.setAttribute('style' , 'color : red')
        quali02.setAttribute('style', 'color : red')
        resul02.setAttribute('style', 'color : red')
        ver02.style.display = 'none'
        ver12.style.display = 'flex'
        buttonP.style.display = 'flex'

        premium.setAttribute('style','background : #e0454d')
        premiumItens.style.display = 'none'
        preco03.setAttribute('style', 'color : #737373')
        quali03.setAttribute('style', 'color : #737373')
        resul03.setAttribute('style', 'color : #737373')
        ver03.style.display = 'none'
        ver13.style.display = 'flex'
        buttonPR.style.display = 'none'

        basico.setAttribute('style', 'background : #e0454d')
        basicoItens.style.display = 'none'
        preco01.setAttribute('style', 'color : #737373')
        quali01.setAttribute('style', 'color : #737373')
        resul01.setAttribute('style', 'color : #737373')
        ver01.style.display = 'flex'
        ver11.style.display = 'none'
        buttonB.style.display = 'none'
    })

    premium.addEventListener('click', () =>{
        premium.setAttribute('style', 'background : red')
        premiumItens.style.display = 'flex'
        preco03.setAttribute('style', 'color : red')
        quali03.setAttribute('style', 'color : red')
        resul03.setAttribute('style', 'color : red')
        ver03.style.display = 'flex'
        ver13.style.display = 'none'
        buttonPR.style.display = 'flex'

        padrao.setAttribute('style','background : #e0454d')
        padraoItens.style.display = 'none'
        preco02.setAttribute('style', 'color : #737373')
        quali02.setAttribute('style', 'color : #737373')
        resul02.setAttribute('style', 'color : #737373')
        ver02.style.display = 'flex'
        ver12.style.display = 'none'
        buttonP.style.display = 'none'

        basico.setAttribute('style', 'background : #e0454d')
        basicoItens.style.display = 'none'
        preco01.setAttribute('style', 'color : #737373')
        quali01.setAttribute('style', 'color : #737373')
        resul01.setAttribute('style', 'color : #737373')
        ver01.style.display = 'flex'
        ver11.style.display = 'none'
        buttonB.style.display = 'none'
  })

  buttonB.addEventListener('click',() =>{
    let confirmacao = confirm('Deseja prosseguir com o plano basico?')
        if(confirmacao){
            setTimeout(() =>{
                window.location.replace('tela_de_pagamento.html')
            })
        }
  })
  buttonP.addEventListener('click',() =>{
    let confirmacion = confirm('Deseja prosseguir com o plano padrão?')
        if(confirmacion){
            setTimeout(() =>{
                window.location.replace('tela_de_pagamento.html')
            })
        }
  })
  buttonPR.addEventListener('click', () =>{
    let confirmacaoo = confirm('Deseja prosseguir com o plano premium?')
        if(confirmacaoo){
            setTimeout(() =>{
                window.location.replace('tela_de_pagamento.html')
            })
        }
  })
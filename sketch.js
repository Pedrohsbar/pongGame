//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ;

//variaveis da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBordas();
  mostraRaquete(xRaquete, yRaquete);
  movimentarRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
}

function mostraBolinha(){
  circle( xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBordas(){
  if ( xBolinha + raio > width || xBolinha - raio < 0 ) { velocidadeXBolinha *= -1 }
  
  if ( yBolinha + raio > height || yBolinha - raio < 0 ) { velocidadeYBolinha *= -1 }
}

function mostraRaquete(x ,y ){
  rect( x, y, comprimentoRaquete, alturaRaquete );
}

function movimentarRaquete(){
  if ( keyIsDown (UP_ARROW) ){
    yRaquete -= 10;
  }
  if ( keyIsDown (DOWN_ARROW) ){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if ( xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete ){ 
  velocidadeXBolinha *= -1
  }
}

function movimentaRaqueteOponente(){
velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
yRaqueteOponente += velocidadeYOponente
}

//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//variaveis da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0; 

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBordas();
  mostraRaquete(xRaquete, yRaquete);
  movimentarRaquete();
  movimentarSegundaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  //movimentaRaqueteOponenteAutonoma();
  verificaColisaoRaqueteOponente();
  incluiPlancar();
  marcaPonto();
  colisaoRaqueteBorda();
}

function mostraBolinha(){
  circle( xBolinha, yBolinha, diametro);
}

function mostraRaquete(x, y ){
  rect( x, y, comprimentoRaquete, alturaRaquete );
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentarRaquete(){
  if ( keyIsDown (UP_ARROW) ){
    yRaquete -= 10;
  }
  if ( keyIsDown (DOWN_ARROW) ){
    yRaquete += 10;
  }
}

function movimentarSegundaRaquete(){
  if ( keyIsDown (87) ){
    yRaqueteOponente -= 10;
  }
  if ( keyIsDown (83) ){
    yRaqueteOponente += 10;
  }
}

function movimentaRaqueteOponenteAutonoma(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
  }

function verificaColisaoBordas(){
  if ( xBolinha + raio > width || xBolinha - raio < 0 ) { velocidadeXBolinha *= -1 }
  
  if ( yBolinha + raio > height || yBolinha - raio < 0 ) { velocidadeYBolinha *= -1 }
}

function verificaColisaoRaquete(){
  if ( xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete ){ 
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaqueteOponente(){
  if ( xBolinha + raio > xRaqueteOponente && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente ){ 
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluiPlancar(){
  stroke( 255 )
  textAlign(CENTER);
  textSize( 17 );
  fill( color ( 255, 140, 0));
    rect( 150, 10, 40, 20 );
  fill( 255 );
    text( meusPontos, 170, 26 );
  fill( color ( 255, 140, 0));
    rect( 450, 10, 40, 20 );
  fill( 255 )
    text( pontosOponente, 470, 26 );
}

function marcaPonto(){
  if ( xBolinha > 590 ){
    meusPontos += 1;
    ponto.play();
  }
  if ( xBolinha < 10 ){
    pontosOponente += 1;
    ponto.play();
  }
}

function colisaoRaqueteBorda(){
  if ( yRaquete + alturaRaquete > height ) { yRaquete = 310 };
  if ( yRaqueteOponente + alturaRaquete > height ) { yRaqueteOponente = 310 };
  if ( yRaquete - alturaRaquete < -80 ) { yRaquete = 1 };
  if ( yRaqueteOponente - alturaRaquete < -80 ) { yRaqueteOponente = 1 };
}
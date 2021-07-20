let walls = [];
let ray;
let particle;
// let particle1;
let xoff = 0;
let yoff = 10000;

function preload() {
    f = loadFont('./resources/fonts/Staatliches-Regular.ttf');
}


function setup() {
    createCanvas(1520, 730);
    // for (let i = 0; i < 5; i++) {
    //     let x1 = random(width);
    //     let x2 = random(width);
    //     let y1 = random(height);
    //     let y2 = random(height);
    //     walls[i] = new Boundary(x1, y1, x2, y2);
    // }
    i = 0;
    walls[i++] = new Boundary(50, 50, 50, 350); // K
    walls[i++] = new Boundary(150, 50, 50, 215);
    walls[i++] = new Boundary(50, 215, 150, 350);
    walls[i++] = new Boundary(250, 50, 190, 350); // A
    walls[i++] = new Boundary(250, 50, 320, 350);
    walls[i++] = new Boundary(185, 215, 320, 215);
    walls[i++] = new Boundary(370, 50, 370, 350); // R
    walls[i++] = new Boundary(370, 50, 475, 150);
    walls[i++] = new Boundary(475, 150, 370, 215);
    walls[i++] = new Boundary(370, 215, 500, 350);
    walls[i++] = new Boundary(520, 50, 680, 50); // T
    walls[i++] = new Boundary(600, 50, 600, 350);
    walls[i++] = new Boundary(720, 50, 720, 350); // H
    walls[i++] = new Boundary(850, 50, 850, 350);
    walls[i++] = new Boundary(720, 215, 850, 215);
    walls[i++] = new Boundary(890, 50, 970, 50); // I
    walls[i++] = new Boundary(890, 350, 970, 350);
    walls[i++] = new Boundary(930, 50, 930, 350);
    walls[i++] = new Boundary(1010, 50, 1010, 350); // K
    walls[i++] = new Boundary(1090, 50, 1010, 215);
    walls[i++] = new Boundary(1010, 215, 1090, 350);
    walls[i++] = new Boundary(370, 400, 370, 700); // E
    walls[i++] = new Boundary(370, 400, 500, 400);
    walls[i++] = new Boundary(370, 550, 500, 550);
    walls[i++] = new Boundary(370, 700, 500, 700);
    walls[i++] = new Boundary(610, 400, 540, 480); // S
    walls[i++] = new Boundary(610, 400, 680, 480);
    walls[i++] = new Boundary(540, 620, 610, 700);
    walls[i++] = new Boundary(610, 700, 680, 620);
    walls[i++] = new Boundary(680, 620, 540, 480);
    walls[i++] = new Boundary(720, 400, 720, 700); // H
    walls[i++] = new Boundary(850, 400, 850, 700);
    walls[i++] = new Boundary(720, 550, 850, 550);
    walls[i++] = new Boundary(890, 400, 890, 700); // W
    walls[i++] = new Boundary(1070, 400, 1070, 700);
    walls[i++] = new Boundary(890, 700, 980, 550);
    walls[i++] = new Boundary(980, 550, 1070, 700);
    walls[i++] = new Boundary(1170, 400, 1110, 700); // A
    walls[i++] = new Boundary(1170, 400, 1230, 700);
    walls[i++] = new Boundary(1110, 550, 1230, 550);
    walls[i++] = new Boundary(1270, 400, 1270, 700); // R
    walls[i++] = new Boundary(1270, 400, 1375, 500);
    walls[i++] = new Boundary(1375, 500, 1270, 565);
    walls[i++] = new Boundary(1270, 565, 1400, 700);

    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));
    particle = new Particle();
    // particle1 = new Particle();
    noCursor();


    let home_button = createA('./index.html', 'HOME');
    home_button.position(1300, 70);
    home_button.style('color', '#1f1f1f')
    home_button.style('font-size', '46px');
    home_button.style('text-decoration', 'none');
    home_button.style('font-family', 'Staatliches-Regular');

    let works_button = createA('./projects.html', 'PROJECTS');
    works_button.position(1300, 130);
    works_button.style('color', '#1f1f1f')
    works_button.style('font-size', '46px');
    works_button.style('text-decoration', 'none');
    works_button.style('font-family', 'Staatliches-Regular');

    let bio_button = createA('./bio.html', 'BIO');
    bio_button.position(1300, 190);
    bio_button.style('color', '#1f1f1f')
    bio_button.style('font-size', '46px');
    bio_button.style('text-decoration', 'none');
    bio_button.style('font-family', 'Staatliches-Regular');

    // p.style('font-family' "Qahiri");
}

function draw() {

    background(0);
    for (let wall of walls) {
        wall.show();
    }
    // particle.update(noise(xoff) * width, noise(yoff) * height);
    particle.update(mouseX, mouseY);

    particle.look(walls);
    particle.show();

    // particle1.update(noise(xoff) * width, noise(yoff) * height);
    // particle1.update(mouseX, mouseY);
    // particle1.show();
    // particle1.look(walls);

    xoff += 0.01;
    yoff += 0.01;
}
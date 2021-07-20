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

    // Project bars
    walls[i++] = new Boundary(150, 90, 150, 235);
    walls[i++] = new Boundary(150, 90, 650, 90);

    walls[i++] = new Boundary(750, 90, 750, 235);
    walls[i++] = new Boundary(750, 90, 1150, 90);

    walls[i++] = new Boundary(150, 290, 150, 435);
    walls[i++] = new Boundary(150, 290, 650, 290);

    walls[i++] = new Boundary(750, 290, 750, 435);
    walls[i++] = new Boundary(750, 290, 1150, 290);

    // The bar beside navigation area
    walls[i++] = new Boundary(1250, 73, 1250, 400);


    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));
    particle = new Particle();
    // particle1 = new Particle();
    noCursor();


    let home_button = createA('./index.html', 'HOME');
    home_button.position(1300, 70);
    home_button.style('color', '#878787')
    home_button.style('font-size', '46px');
    home_button.style('text-decoration', 'none');
    home_button.style('font-family', 'Staatliches-Regular');

    let works_button = createA('./projects.html', 'PROJECTS');
    works_button.position(1300, 130);
    works_button.style('color', '#878787')
    works_button.style('font-size', '46px');
    works_button.style('text-decoration', 'none');
    works_button.style('font-family', 'Staatliches-Regular');

    let bio_button = createA('./bio.html', 'BIO');
    bio_button.position(1300, 190);
    bio_button.style('color', '#cccccc')
    bio_button.style('font-size', '46px');
    bio_button.style('text-decoration', 'none');
    bio_button.style('font-family', 'Staatliches-Regular');

    // Projects
    let img_araam = createImg('./images/araam-icon-s.png', 'Araam icon');
    img_araam.position(190, 130);
    let label_araam = createA('https://github.com/Karthikeshwar1/Araam', 'Araam');
    label_araam.position(273, 120);
    label_araam.style('color', '#1f1f1f');
    label_araam.style('text-decoration', 'none');
    label_araam.style('font-family', 'Staatliches-Regular');
    label_araam.style('font-size', '36px');
    let label_araam_info = createA('https://github.com/Karthikeshwar1/Araam',
        'Control your PC with just a controller!');
    label_araam_info.position(273, 180);
    label_araam_info.style('color', '#878787');
    label_araam_info.style('text-decoration', 'none');
    label_araam_info.style('font-family', 'Staatliches-Regular');
    label_araam_info.style('font-size', '23px');

    let img_tabfye = createImg('./images/tabfye-icon.png', 'TABFYE icon');
    img_tabfye.position(190, 330);
    let label_tabfye = createA('https://github.com/Karthikeshwar1/TABFYE', 'TABFYE');
    label_tabfye.position(273, 320);
    label_tabfye.style('color', '#1f1f1f');
    label_tabfye.style('text-decoration', 'none');
    label_tabfye.style('font-family', 'Staatliches-Regular');
    label_tabfye.style('font-size', '36px');
    let label_tabfye_info = createA('https://github.com/Karthikeshwar1/TABFYE',
        'Take-A-Break-For-Your-Eyes!');
    label_tabfye_info.position(273, 380);
    label_tabfye_info.style('color', '#878787');
    label_tabfye_info.style('text-decoration', 'none');
    label_tabfye_info.style('font-family', 'Staatliches-Regular');
    label_tabfye_info.style('font-size', '23px');

    let img_jumpg = createImg('./images/JumpG.png', 'JumpG icon');
    img_jumpg.position(790, 330);
    let label_jumpg = createA('https://github.com/Karthikeshwar1/JumpG', 'JumpG');
    label_jumpg.position(873, 320);
    label_jumpg.style('color', '#1f1f1f');
    label_jumpg.style('text-decoration', 'none');
    label_jumpg.style('font-family', 'Staatliches-Regular');
    label_jumpg.style('font-size', '36px');
    let label_jumpg_info = createA('https://github.com/Karthikeshwar1/JumpG',
        "A Windows console game");
    label_jumpg_info.position(873, 380);
    label_jumpg_info.style('color', '#878787');
    label_jumpg_info.style('text-decoration', 'none');
    label_jumpg_info.style('font-family', 'Staatliches-Regular');
    label_jumpg_info.style('font-size', '23px');

    let label_coming_soon = createP('Coming soon')
    label_coming_soon.position(900, 160);
    label_coming_soon.style('color', 'black');
    label_coming_soon.style('font-family', 'Staatliches-Regular');
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
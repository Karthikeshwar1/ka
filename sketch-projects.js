let walls = [];
// let black_walls = [];
let ray;
let particle;
// let particle_1;
// let particle1;
let xoff = 0;
let yoff = 10000;

function preload() {
    f = loadFont('./resources/fonts/Staatliches-Regular.ttf');
}


function setup() {
    createCanvas(1520, 1530);
    // for (let i = 0; i < 5; i++) {
    //     let x1 = random(width);
    //     let x2 = random(width);
    //     let y1 = random(height);
    //     let y2 = random(height);
    //     walls[i] = new Boundary(x1, y1, x2, y2);
    // }
    i = 0;
    // j = 0;

    // Project bars
    walls[i++] = new Boundary(150, 90, 150, 235);
    walls[i++] = new Boundary(150, 90, 650, 90);

    walls[i++] = new Boundary(750, 90, 750, 235);
    walls[i++] = new Boundary(750, 90, 1150, 90);

    walls[i++] = new Boundary(150, 290, 150, 435);
    walls[i++] = new Boundary(150, 290, 650, 290);

    walls[i++] = new Boundary(750, 290, 750, 435);
    walls[i++] = new Boundary(750, 290, 1150, 290);

    walls[i++] = new Boundary(150, 490, 150, 635);
    walls[i++] = new Boundary(150, 490, 650, 490);

    walls[i++] = new Boundary(750, 490, 750, 635);
    walls[i++] = new Boundary(750, 490, 1150, 490);

    // slant line
    walls[i++] = new Boundary(125, 720, 1150, 790);

    walls[i++] = new Boundary(150, 750, 150, 870); // M
    walls[i++] = new Boundary(150, 750, 190, 870);
    walls[i++] = new Boundary(190, 870, 220, 755);
    walls[i++] = new Boundary(220, 755, 220, 870);

    walls[i++] = new Boundary(245, 759, 245, 870); // I

    walls[i++] = new Boundary(265, 761, 265, 870); // N
    walls[i++] = new Boundary(265, 761, 310, 870);
    walls[i++] = new Boundary(310, 764, 310, 870);

    walls[i++] = new Boundary(330, 765, 330, 870); // I

    walls[i++] = new Boundary(370, 769, 370, 870); // P
    walls[i++] = new Boundary(370, 769, 425, 774);
    walls[i++] = new Boundary(370, 825, 425, 774);

    walls[i++] = new Boundary(440, 779, 440, 870); // R
    walls[i++] = new Boundary(440, 775, 490, 779);
    walls[i++] = new Boundary(440, 825, 490, 779);
    walls[i++] = new Boundary(440, 825, 490, 870);

    walls[i++] = new Boundary(505, 781, 505, 870); // O
    walls[i++] = new Boundary(545, 784, 545, 870);
    walls[i++] = new Boundary(545, 784, 505, 781);
    walls[i++] = new Boundary(545, 870, 505, 870);

    walls[i++] = new Boundary(567, 787, 595, 789); // J
    walls[i++] = new Boundary(595, 789, 595, 870);
    walls[i++] = new Boundary(560, 870, 595, 870);

    walls[i++] = new Boundary(613, 791, 613, 870); // E
    walls[i++] = new Boundary(613, 791, 647, 793);
    walls[i++] = new Boundary(613, 825, 647, 825);
    walls[i++] = new Boundary(613, 870, 647, 870);

    walls[i++] = new Boundary(665, 795, 665, 870); // C
    walls[i++] = new Boundary(665, 795, 699, 797);
    walls[i++] = new Boundary(665, 870, 699, 870);

    walls[i++] = new Boundary(714, 798, 765, 800); // T
    walls[i++] = new Boundary(737, 799, 737, 870);

    walls[i++] = new Boundary(779, 801, 825, 803); // S
    walls[i++] = new Boundary(779, 834, 825, 834);
    walls[i++] = new Boundary(779, 870, 825, 870);
    walls[i++] = new Boundary(779, 801, 779, 834);
    walls[i++] = new Boundary(825, 834, 825, 870);

    walls[i++] = new Boundary(90, 900, 1350, 900);
    walls[i++] = new Boundary(140, 1000, 1250, 1000);
    walls[i++] = new Boundary(140, 1100, 1250, 1100);
    walls[i++] = new Boundary(140, 1200, 1250, 1200);
    walls[i++] = new Boundary(140, 1300, 1250, 1300);







    // The bar beside navigation area
    walls[i++] = new Boundary(1250, 73, 1250, 400);


    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));
    // black_walls.push(new BoundaryBlack(0, 0, width, 0));
    // black_walls.push(new BoundaryBlack(width, 0, width, height));
    // black_walls.push(new BoundaryBlack(width, height, 0, height));
    // black_walls.push(new BoundaryBlack(0, height, 0, 0));
    particle = new Particle();
    // particle_1 = new Particle();
    noCursor();


    let home_button = createA('./index.html', 'HOME');
    home_button.position(1300, 70);
    home_button.style('color', '#878787')
    home_button.style('font-size', '46px');
    home_button.style('text-decoration', 'none');
    home_button.style('font-family', 'Staatliches-Regular');

    let works_button = createA('./projects.html', 'PROJECTS');
    works_button.position(1300, 130);
    works_button.style('color', '#cccccc')
    works_button.style('font-size', '46px');
    works_button.style('text-decoration', 'none');
    works_button.style('font-family', 'Staatliches-Regular');

    let bio_button = createA('./bio.html', 'BIO');
    bio_button.position(1300, 190);
    bio_button.style('color', '#878787')
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

    // Mini projects
    let label_e_a_s = createA('https://github.com/Karthikeshwar1/Etcch-A-Sketch', 'Etcch-A-Sketch');
    label_e_a_s.position(190, 930);
    label_e_a_s.style('color', '#1f1f1f');
    label_e_a_s.style('text-decoration', 'none');
    label_e_a_s.style('font-family', 'Staatliches-Regular');
    label_e_a_s.style('font-size', '36px');
    let label_e_a_s_info = createA('https://github.com/Karthikeshwar1/Etcch-A-Sketch',
        "Drawing app inspired from the popular toy Etch A Sketch");
    label_e_a_s_info.position(420, 940);
    label_e_a_s_info.style('color', '#878787');
    label_e_a_s_info.style('text-decoration', 'none');
    label_e_a_s_info.style('font-family', 'Staatliches-Regular');
    label_e_a_s_info.style('font-size', '23px');

}

function draw() {

    background(0);

    for (let wall of walls) {
        wall.show();
    }

    // for (let black_wall of black_walls) {
    //     black_wall.show();
    // }




    // particle.update(noise(xoff) * width, noise(yoff) * height);
    particle.update(mouseX, mouseY);
    // particle_1.update(mouseX + 10, mouseY + 10);

    particle.look(walls);
    // particle_1.look(black_walls);
    // particle_1.show();
    particle.show();

    // particle1.update(noise(xoff) * width, noise(yoff) * height);
    // particle1.update(mouseX, mouseY);
    // particle1.show();
    // particle1.look(walls);

    // xoff += 0.01;
    // yoff += 0.01;


}
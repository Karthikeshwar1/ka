const _0x3ea0=['1ApdqyT','font-size','footer','298596zTlwmV','#454545','#1f1f1f','show','look','./resources/fonts/Staatliches-Regular.ttf','BebasNeue-Regular','Staatliches-Regular','update','80926gkbMeU','#787878','font-family','8mopASm','#4f4f4f','position','color','9871nrWxgJ','sideMenu','281365LVvAly','style','994327fUiKOz','188UvMaSv','push','1481deVnzh','4rjHFVD','text-decoration','846921qSFVnM'];const _0x33ccf7=_0x4edb;(function(_0x36e784,_0x179123){const _0x258396=_0x4edb;while(!![]){try{const _0xbb1250=-parseInt(_0x258396(0x88))+-parseInt(_0x258396(0x8c))+parseInt(_0x258396(0x77))+parseInt(_0x258396(0x82))*parseInt(_0x258396(0x89))+-parseInt(_0x258396(0x85))*-parseInt(_0x258396(0x7a))+parseInt(_0x258396(0x80))*-parseInt(_0x258396(0x86))+-parseInt(_0x258396(0x83))*-parseInt(_0x258396(0x7e));if(_0xbb1250===_0x179123)break;else _0x36e784['push'](_0x36e784['shift']());}catch(_0x53c3bf){_0x36e784['push'](_0x36e784['shift']());}}}(_0x3ea0,0xa4080));let walls=[],ray,particle,xoff=0x0,yoff=0x2710;const font_p='Lato-Regular',font_1=_0x33ccf7(0x75),font_2=_0x33ccf7(0x74),color_dark_1=_0x33ccf7(0x8d),color_dark_2=_0x33ccf7(0x78),color_1f=_0x33ccf7(0x8e),color_4f=_0x33ccf7(0x7b);function preload(){const _0x57d2e7=_0x33ccf7;loadFont(_0x57d2e7(0x73)),loadFont('./resources/fonts/BebasNeue-Regular.ttf');}function _0x4edb(_0x104715,_0x3a5618){return _0x4edb=function(_0x3ea043,_0x4edbaf){_0x3ea043=_0x3ea043-0x72;let _0x14577a=_0x3ea0[_0x3ea043];return _0x14577a;},_0x4edb(_0x104715,_0x3a5618);}function setup(){const _0x3d45a1=_0x33ccf7,_0x307f92=0x384;createCanvas(0x5e6,_0x307f92),i=0x0,walls[i++]=new Boundary(0x32,0x32,0x32,0x15e),walls[i++]=new Boundary(0x37,0x32,0x37,0x15e),walls[i++]=new Boundary(0x34,0x32,0x34,0x15e),walls[i++]=new Boundary(0x96,0x32,0x32,0xd7),walls[i++]=new Boundary(0x9b,0x32,0x37,0xd7),walls[i++]=new Boundary(0x98,0x32,0x34,0xd7),walls[i++]=new Boundary(0x32,0xd7,0x96,0x15e),walls[i++]=new Boundary(0x37,0xd7,0x9b,0x15e),walls[i++]=new Boundary(0x37,0xd4,0x98,0x15e),walls[i++]=new Boundary(0xfa,0x32,0xbe,0x15e),walls[i++]=new Boundary(0xff,0x32,0xc3,0x15e),walls[i++]=new Boundary(0xfa,0x32,0x140,0x15e),walls[i++]=new Boundary(0xff,0x32,0x145,0x15e),walls[i++]=new Boundary(0xfc,0x32,0x142,0x15e),walls[i++]=new Boundary(0xb9,0xd7,0x140,0xd7),walls[i++]=new Boundary(0xb9,0xdc,0x140,0xdc),walls[i++]=new Boundary(0xb9,0xd9,0x140,0xd9),walls[i++]=new Boundary(0x172,0x32,0x172,0x15e),walls[i++]=new Boundary(0x174,0x32,0x174,0x15e),walls[i++]=new Boundary(0x177,0x32,0x177,0x15e),walls[i++]=new Boundary(0x172,0x32,0x1db,0x96),walls[i++]=new Boundary(0x174,0x32,0x1dd,0x96),walls[i++]=new Boundary(0x177,0x32,0x1e0,0x96),walls[i++]=new Boundary(0x1db,0x96,0x172,0xd7),walls[i++]=new Boundary(0x1dd,0x96,0x174,0xd7),walls[i++]=new Boundary(0x1e0,0x96,0x177,0xd7),walls[i++]=new Boundary(0x172,0xd7,0x1f4,0x15e),walls[i++]=new Boundary(0x174,0xd7,0x1f6,0x15e),walls[i++]=new Boundary(0x177,0xd7,0x1f9,0x15e),walls[i++]=new Boundary(0x208,0x32,0x2a8,0x32),walls[i++]=new Boundary(0x208,0x34,0x2a8,0x34),walls[i++]=new Boundary(0x208,0x37,0x2a8,0x37),walls[i++]=new Boundary(0x258,0x32,0x258,0x15e),walls[i++]=new Boundary(0x25a,0x32,0x25a,0x15e),walls[i++]=new Boundary(0x25d,0x32,0x25d,0x15e),walls[i++]=new Boundary(0x2d0,0x32,0x2d0,0x15e),walls[i++]=new Boundary(0x2d2,0x32,0x2d2,0x15e),walls[i++]=new Boundary(0x2d5,0x32,0x2d5,0x15e),walls[i++]=new Boundary(0x352,0x32,0x352,0x15e),walls[i++]=new Boundary(0x354,0x32,0x354,0x15e),walls[i++]=new Boundary(0x357,0x32,0x357,0x15e),walls[i++]=new Boundary(0x2d0,0xd7,0x352,0xd7),walls[i++]=new Boundary(0x2d0,0xd9,0x352,0xd9),walls[i++]=new Boundary(0x2d0,0xdc,0x352,0xdc),walls[i++]=new Boundary(0x37a,0x32,0x3ca,0x32),walls[i++]=new Boundary(0x37a,0x34,0x3ca,0x34),walls[i++]=new Boundary(0x37a,0x37,0x3ca,0x37),walls[i++]=new Boundary(0x37a,0x15e,0x3ca,0x15e),walls[i++]=new Boundary(0x37a,0x160,0x3ca,0x160),walls[i++]=new Boundary(0x37a,0x163,0x3ca,0x163),walls[i++]=new Boundary(0x3a2,0x32,0x3a2,0x15e),walls[i++]=new Boundary(0x3a4,0x32,0x3a4,0x15e),walls[i++]=new Boundary(0x3a7,0x32,0x3a7,0x15e),walls[i++]=new Boundary(0x3f2,0x32,0x3f2,0x15e),walls[i++]=new Boundary(0x3f4,0x32,0x3f4,0x15e),walls[i++]=new Boundary(0x3f7,0x32,0x3f7,0x15e),walls[i++]=new Boundary(0x44c,0x32,0x3f2,0xd7),walls[i++]=new Boundary(0x44e,0x32,0x3f4,0xd7),walls[i++]=new Boundary(0x451,0x32,0x3f7,0xd7),walls[i++]=new Boundary(0x3f2,0xd7,0x456,0x15e),walls[i++]=new Boundary(0x3f4,0xd7,0x458,0x15e),walls[i++]=new Boundary(0x3f7,0xd7,0x45b,0x15e),walls[i++]=new Boundary(0x172,0x190,0x172,0x2bc),walls[i++]=new Boundary(0x174,0x190,0x174,0x2bc),walls[i++]=new Boundary(0x177,0x190,0x177,0x2bc),walls[i++]=new Boundary(0x172,0x190,0x1f4,0x190),walls[i++]=new Boundary(0x172,0x192,0x1f4,0x192),walls[i++]=new Boundary(0x172,0x195,0x1f4,0x195),walls[i++]=new Boundary(0x172,0x226,0x1f4,0x226),walls[i++]=new Boundary(0x172,0x228,0x1f4,0x228),walls[i++]=new Boundary(0x172,0x22b,0x1f4,0x22b),walls[i++]=new Boundary(0x172,0x2bc,0x1f4,0x2bc),walls[i++]=new Boundary(0x172,0x2be,0x1f4,0x2be),walls[i++]=new Boundary(0x172,0x2c1,0x1f4,0x2c1),walls[i++]=new Boundary(0x262,0x190,0x21c,0x1e0),walls[i++]=new Boundary(0x264,0x190,0x21e,0x1e0),walls[i++]=new Boundary(0x267,0x190,0x221,0x1e0),walls[i++]=new Boundary(0x267,0x190,0x2ad,0x1e0),walls[i++]=new Boundary(0x269,0x190,0x2af,0x1e0),walls[i++]=new Boundary(0x26c,0x190,0x2b2,0x1e0),walls[i++]=new Boundary(0x21c,0x26c,0x262,0x2bc),walls[i++]=new Boundary(0x21e,0x26c,0x264,0x2bc),walls[i++]=new Boundary(0x221,0x26c,0x267,0x2bc),walls[i++]=new Boundary(0x262,0x2bc,0x2a8,0x26c),walls[i++]=new Boundary(0x264,0x2bc,0x2aa,0x26c),walls[i++]=new Boundary(0x267,0x2bc,0x2ad,0x26c),walls[i++]=new Boundary(0x2a8,0x26c,0x21c,0x1e0),walls[i++]=new Boundary(0x2aa,0x26c,0x21e,0x1e0),walls[i++]=new Boundary(0x2ad,0x26c,0x221,0x1e0),walls[i++]=new Boundary(0x2d0,0x190,0x2d0,0x2bc),walls[i++]=new Boundary(0x2d2,0x190,0x2d2,0x2bc),walls[i++]=new Boundary(0x2d5,0x190,0x2d5,0x2bc),walls[i++]=new Boundary(0x352,0x190,0x352,0x2bc),walls[i++]=new Boundary(0x354,0x190,0x354,0x2bc),walls[i++]=new Boundary(0x357,0x190,0x357,0x2bc),walls[i++]=new Boundary(0x2d0,0x226,0x352,0x226),walls[i++]=new Boundary(0x2d0,0x228,0x352,0x228),walls[i++]=new Boundary(0x2d0,0x22b,0x352,0x22b),walls[i++]=new Boundary(0x37a,0x190,0x37a,0x2bc),walls[i++]=new Boundary(0x37c,0x190,0x37c,0x2bc),walls[i++]=new Boundary(0x37f,0x190,0x37f,0x2bc),walls[i++]=new Boundary(0x42e,0x190,0x42e,0x2bc),walls[i++]=new Boundary(0x430,0x190,0x430,0x2bc),walls[i++]=new Boundary(0x433,0x190,0x433,0x2bc),walls[i++]=new Boundary(0x37a,0x2bc,0x3d4,0x226),walls[i++]=new Boundary(0x37c,0x2bc,0x3d6,0x226),walls[i++]=new Boundary(0x37f,0x2bc,0x3d9,0x226),walls[i++]=new Boundary(0x3d4,0x226,0x42e,0x2bc),walls[i++]=new Boundary(0x3d6,0x226,0x430,0x2bc),walls[i++]=new Boundary(0x3d9,0x226,0x433,0x2bc),walls[i++]=new Boundary(0x492,0x190,0x456,0x2bc),walls[i++]=new Boundary(0x494,0x190,0x458,0x2bc),walls[i++]=new Boundary(0x497,0x190,0x45b,0x2bc),walls[i++]=new Boundary(0x492,0x190,0x4ce,0x2bc),walls[i++]=new Boundary(0x494,0x190,0x4d0,0x2bc),walls[i++]=new Boundary(0x497,0x190,0x4d3,0x2bc),walls[i++]=new Boundary(0x456,0x226,0x4ce,0x226),walls[i++]=new Boundary(0x456,0x228,0x4ce,0x228),walls[i++]=new Boundary(0x456,0x22b,0x4ce,0x22b),walls[i++]=new Boundary(0x4f6,0x190,0x4f6,0x2bc),walls[i++]=new Boundary(0x4f8,0x190,0x4f8,0x2bc),walls[i++]=new Boundary(0x4fb,0x190,0x4fb,0x2bc),walls[i++]=new Boundary(0x4f6,0x190,0x55f,0x1f4),walls[i++]=new Boundary(0x4f8,0x190,0x561,0x1f4),walls[i++]=new Boundary(0x4fb,0x190,0x564,0x1f4),walls[i++]=new Boundary(0x55f,0x1f4,0x4f6,0x235),walls[i++]=new Boundary(0x561,0x1f4,0x4f8,0x235),walls[i++]=new Boundary(0x564,0x1f4,0x4fb,0x235),walls[i++]=new Boundary(0x4f6,0x235,0x578,0x2bc),walls[i++]=new Boundary(0x4f8,0x235,0x57a,0x2bc),walls[i++]=new Boundary(0x4fb,0x235,0x57d,0x2bc),walls[i++]=new Boundary(0x10e,_0x307f92-0x64,0x4e2,_0x307f92-0x64),walls[_0x3d45a1(0x84)](new Boundary(0x0,0x0,width,0x0)),walls[_0x3d45a1(0x84)](new Boundary(width,0x0,width,_0x307f92)),walls[_0x3d45a1(0x84)](new Boundary(width,_0x307f92,0x0,_0x307f92)),walls[_0x3d45a1(0x84)](new Boundary(0x0,_0x307f92,0x0,0x0)),particle=new Particle(),noCursor(),c=new Commons(),c[_0x3d45a1(0x7f)](0x1),c[_0x3d45a1(0x8b)](_0x307f92);}function create_a(_0x58fe04,_0x339367,_0xce116d,_0x34eb0e,_0x41f1ef,_0x33b1f4,_0x21e558=null,_0x133c60=null){const _0x1dd9a7=_0x33ccf7;let _0x1de3b1=createA(_0x58fe04,_0x339367);_0x1de3b1[_0x1dd9a7(0x7c)](_0xce116d,_0x34eb0e),_0x1de3b1[_0x1dd9a7(0x81)](_0x1dd9a7(0x8a),_0x41f1ef),_0x1de3b1[_0x1dd9a7(0x81)](_0x1dd9a7(0x7d),_0x33b1f4),_0x21e558&&_0x1de3b1[_0x1dd9a7(0x81)](_0x1dd9a7(0x79),_0x21e558),_0x133c60&&_0x1de3b1[_0x1dd9a7(0x81)](_0x1dd9a7(0x87),_0x133c60);}function draw(){const _0x11cc46=_0x33ccf7;background(0x0);for(let _0x3e2fad of walls){_0x3e2fad[_0x11cc46(0x8f)]();}particle[_0x11cc46(0x76)](mouseX,mouseY),particle[_0x11cc46(0x72)](walls),particle[_0x11cc46(0x8f)](),xoff+=0.01,yoff+=0.01;}
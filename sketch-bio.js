const _0x2564=['I\x20try\x20to\x20see\x20the\x20world\x20in\x20black\x20and\x20white.','show','53089MIYoRR','BebasNeue-Regular','328213DJAsQg','6428lGQGQb','1jjXBec','20px','push','663818TDdxPa','./resources/fonts/BebasNeue-Regular.ttf','are\x20my\x20fields\x20of\x20study.','Roboto-Medium','#454545','look','black','495933TqFJJT','83DfaRlB','update','Because\x20that\x20makes\x20the\x20world\x20simpler\x20to\x20understand.','footer','207778AIakgj','./resources/fonts/Roboto-Medium.ttf','1GVFKvd','165247PptMeZ','I\x20am\x20Karthikeswar.','Artificial\x20Intelligence,\x20Machine\x20Learning\x20and\x20Human-Computer\x20Interaction','sideMenu','7ZmphDP'];const _0xb01e8e=_0x3efe;(function(_0x355328,_0x1ec561){const _0x4e7df2=_0x3efe;while(!![]){try{const _0x1902cc=parseInt(_0x4e7df2(0xb8))*-parseInt(_0x4e7df2(0xba))+-parseInt(_0x4e7df2(0xb9))*parseInt(_0x4e7df2(0xc5))+parseInt(_0x4e7df2(0xb3))*parseInt(_0x4e7df2(0xb6))+-parseInt(_0x4e7df2(0xcc))+parseInt(_0x4e7df2(0xc4))+-parseInt(_0x4e7df2(0xc9))*parseInt(_0x4e7df2(0xcb))+parseInt(_0x4e7df2(0xbd));if(_0x1902cc===_0x1ec561)break;else _0x355328['push'](_0x355328['shift']());}catch(_0x129467){_0x355328['push'](_0x355328['shift']());}}}(_0x2564,0x486a4));let walls=[],ray,particle,particle1,particle2,particle3,particle4,particle5,particle6,xoff=0x0,yoff=0x2710,frame_lights=0x14;const font_p=_0xb01e8e(0xc0),font_1='Staatliches-Regular',font_2=_0xb01e8e(0xb7),color_dark_1=_0xb01e8e(0xc1),color_dark_2='#787878',stroke_weight_lines=0x7;function preload(){const _0x4d4757=_0xb01e8e;loadFont(_0x4d4757(0xca)),loadFont(_0x4d4757(0xbe));}function _0x3efe(_0x445cd1,_0x101a03){return _0x3efe=function(_0x2564c8,_0x3efee8){_0x2564c8=_0x2564c8-0xb2;let _0x316a4a=_0x2564[_0x2564c8];return _0x316a4a;},_0x3efe(_0x445cd1,_0x101a03);}function setup(){const _0x3b3b69=_0xb01e8e,_0x4e2f92=0x514;createCanvas(0x5f0,_0x4e2f92),i=0x0;const _0x5e950d=0x96,_0x21dabc=0x96,_0x363522=0x208;walls[i++]=new Boundary(0x10e,0x49,0x10e,0x122,stroke_weight_lines),walls[i++]=new Boundary(0x10e,0x49,0x30c,0x49,stroke_weight_lines),walls[i++]=new Boundary(0x30c,0x49,0x4e2,0x49,stroke_weight_lines),walls[i++]=new Boundary(0x10e,0x122,0x10e,0x190,stroke_weight_lines),walls[i++]=new Boundary(0x10e,0x190,0x208,0x190,stroke_weight_lines),walls[i++]=new Boundary(0x208,0x190,0x4e2,0x190,stroke_weight_lines),walls[i++]=new Boundary(0x4e2,0x49,0x4e2,0x190,stroke_weight_lines),walls[i++]=new Boundary(0x10e,_0x4e2f92-0x64,0x4e2,_0x4e2f92-0x64),walls[_0x3b3b69(0xbc)](new Boundary(0x0,0x0,width,0x0)),walls['push'](new Boundary(width,0x0,width,_0x4e2f92)),walls[_0x3b3b69(0xbc)](new Boundary(width,_0x4e2f92,0x0,_0x4e2f92)),walls['push'](new Boundary(0x0,_0x4e2f92,0x0,0x0)),particle=new Particle(),c=new Commons(),c[_0x3b3b69(0xb2)](0x3),c[_0x3b3b69(0xc8)](_0x4e2f92);const _0x250ad4=_0x3b3b69(0xbb);c['p'](_0x3b3b69(0xcd),0x172,0x75,_0x250ad4,_0x3b3b69(0xc3),font_p),c['p'](_0x3b3b69(0xb4),0x172,0x9a,_0x250ad4,_0x3b3b69(0xc3),font_p),c['p'](_0x3b3b69(0xc7),0x172,0xb4,_0x250ad4,_0x3b3b69(0xc3),font_p),c['p'](_0x3b3b69(0xce),0x172,0xde,_0x250ad4,_0x3b3b69(0xc3),font_p),c['p'](_0x3b3b69(0xbf),0x172,0xf7,_0x250ad4,_0x3b3b69(0xc3),font_p),stroke_weight=0x11,alpha=0x14,particle1=new Particle(0x0,0x5a,alpha,stroke_weight),particle2=new Particle(0x10e,0x168,alpha,stroke_weight),particle3=new Particle(0xb4,0x168,alpha,stroke_weight),particle4=new Particle(0xb4,0x10e,alpha,stroke_weight),particle5=new Particle(0x0,0xb4,alpha,stroke_weight),particle6=new Particle(0x5a,0xb4,alpha,stroke_weight),particle1[_0x3b3b69(0xc6)](0x122,0x5a),particle1[_0x3b3b69(0xb5)](),particle2[_0x3b3b69(0xc6)](0x122,0x17d),particle2[_0x3b3b69(0xb5)](),particle3[_0x3b3b69(0xc6)](0x2f8,0x17d),particle3[_0x3b3b69(0xb5)](),particle4[_0x3b3b69(0xc6)](0x4c4,0x17d),particle4[_0x3b3b69(0xb5)](),particle5[_0x3b3b69(0xc6)](0x2f8,0x5a),particle5[_0x3b3b69(0xb5)](),particle6[_0x3b3b69(0xc6)](0x4ce,0x5a),particle6[_0x3b3b69(0xb5)]();}function draw(){const _0x2e42f0=_0xb01e8e;background(0x0);for(let _0x20598d of walls){_0x20598d[_0x2e42f0(0xb5)]();}particle1[_0x2e42f0(0xc2)](walls),particle2['look'](walls),particle3[_0x2e42f0(0xc2)](walls),particle4[_0x2e42f0(0xc2)](walls),particle5[_0x2e42f0(0xc2)](walls),particle6['look'](walls),particle[_0x2e42f0(0xc6)](mouseX,mouseY),particle[_0x2e42f0(0xc2)](walls),particle[_0x2e42f0(0xb5)](),xoff+=0.01,yoff+=0.01;}
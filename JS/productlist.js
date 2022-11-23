var data = [
    // source fujifilm
    {"id":"f01","name":"fujifilm-xt4", "pic":"fujifilm-Xt4-$1604.png","price":1604,"description":"Large format mirrorless digital camera system with the world's highest image quality", "cat":"fujifilm","rate":4,"type":"csc"},
    {"id":"f02","name":"fujifilm-a7", "pic":"fujifilm a7 kit 15-45mm-$643.png","price":643, "description":"Large format mirrorless digital camera system with the world's highest image quality","cat":"fujifilm","rate":4,"type":"csc"},
    {"id":"f03","name":"fujifilm-gfx50s mark ii kit", "pic":"fujifilm gfx50s mark ii kit $4098.png","price":4098, "description":"Large format mirrorless digital camera system with the world's highest image quality","cat":"fujufilm","rate":4,"type":"dslr"},
    {"id":"f04","name":"fujifilm x t3 kit xf18 55mm", "pic":"fujifilm x t3 kit xf18 55mm-$1242.png","price":1242, "description":"Large format mirrorless digital camera system with the world's highest image quality","cat":"fujifilm","rate":4,"type":"dslr"},
    {"id":"f05","name":"fujifilm-xh2", "pic":"fujifilm xh2-$2006.png","price":2006,"description":"Large format mirrorless digital camera system with the world's highest image quality", "cat":"fujifilm","rate":5,"type":"dslr"},
    {"id":"f06","name":"fujifilm xt200 15 45mm", "pic":"fujifilm xt200 15 45mm-$701.png","price":701,"description":"Large format mirrorless digital camera system with the world's highest image quality", "cat":"fujifilm","rate":5,"type":"compact"},
    {"id":"f07","name":"fujifilm xt4 kit xf18 55mm", "pic":"fujifilm xt4 kit xf18 55mm-$1970.png","price":1970, "description":"Large format mirrorless digital camera system with the world's highest image quality","cat":"fujifilm","rate":5,"type":"csc"},
   
    // source canon
    {"id":"c01","name":"canon -eos m50 mark ii", "pic":"canon -eos m50 mark ii-$602.png","price":602,"description":"The Canon EOS 750D is an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":5,"type":"csc"},
    {"id":"c02","name":"canon-eos 2000d", "pic":"canon-eos 2000d-$382.png","price":382,"description":"Megapixels: Camera manufacturers often advertise Megapixels for their DSRL cameras and make us think that the higher a camera has, the better.", "cat":"canon","rate":2,"type":"dslr"},
    {"id":"c03","name":"canon-eos m200", "pic":"canon-eos m200-$462.png","price":462,"description":"an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":2,"type":"compact"},
    {"id":"c04","name":"canon-eos r10", "pic":"canon-eos r10-$1001.png","price":1001,"description":"an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":2,"type":"csc"},
    {"id":"c05","name":"canon-eos r7", "pic":"canon-eos r7-$1950.png","price":1950,"description":"an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":2,"type":"dslr"},
    {"id":"c06","name":"canon-eos rp", "pic":"canon-eos rp-$917.png","price":917,"description":"an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":3,"type":"csc"},
    {"id":"c07","name":"canon-powershot g7x mark ii", "pic":"canon-powershot g7x mark ii-$574.png","price":574,"description":"an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":3,"type":"compact"},
    {"id":"c08","name":"canon-powershot sx620 hs", "pic":"canon-powershot sx620 hs-$482.png","price":482,"description":"an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":3,"type":"compact"},
    {"id":"c09","name":"canon-eos 250d", "pic":"canon-eos 250d-$559.png","price":559,"description":"an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":3,"type":"dslr"},
    {"id":"c10","name":"canon-eos 90d", "pic":"canon-eos 90d-$462.png","price":462,"description":"an entry-level DSLR aimed at first-timers and long-term oriented towards mechanical cameras.", "cat":"canon","rate":4,"type":"compact"},
    
    // source nikon
    {"id":"n01","name":"nikon-coolpix b500", "pic":"nikon-coolpix b500-$228.png","price":228,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":4,"type":"csc"},
    {"id":"n02","name":"nikon-coolpix d3500", "pic":"nikon-coolpix d3500-$438.png","price":438,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":4,"type":"dslr"},
    {"id":"n03","name":"nikon-coolpix p1000", "pic":"nikon-coolpix p1000-$924.png","price":924,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":4,"type":"compact"},
    {"id":"n04","name":"nikon-coolpix w300", "pic":"nikon-coolpix w300-$374.png","price":374,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":1,"type":"compact"},
    {"id":"n05","name":"nikon-d5", "pic":"nikon-d5-$2990.png","price":2990,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":1,"type":"dslr"},
    {"id":"n06","name":"nikon-d7200", "pic":"nikon-d7200-$602.png","price":602,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":1,"type":"csc"},
    {"id":"n07","name":"nikon-d750", "pic":"nikon-d750-$985.png","price":985,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":1,"type":"csc"},
    {"id":"n08","name":"nikon-d850", "pic":"nikon-d850-$2373.png","price":2373,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":5,"type":"compact"},
    {"id":"n08","name":"nikon-d850", "pic":"nikon-d850-$2373.png","price":2373,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":5,"type":"compact"},
    {"id":"n09","name":"nikon-z50", "pic":"nikon-z50-$820.png","price":820,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":5,"type":"csc"},
    {"id":"n10","name":"nikon-z6", "pic":"nikon-z6-$1548.png","price":1548,"description":"Info: It seems that Nikon wants to dominate the camera market when it decides to launch a series of 3 new compact cameras. One of them is the Nikon Coolpix B500 model", "cat":"nikon","rate":5,"type":"csc"},
    
    // source panasonic
    {"id":"p01","name":"panasonic-lumix dc fz1000 ii", "pic":"panasonic-lumix dc fz1000 ii-$749.png","price":749,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":2,"type":"compact"},
    {"id":"p02","name":"panasonic-lumix dc fz82", "pic":"panasonic-lumix dc fz82-$329.png","price":329,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":2,"type":"compact"},
    {"id":"p03","name":"panasonic-lumix dc lx100 ii", "pic":"panasonic-lumix dc lx100 ii-$890.png","price":890,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":2,"type":"dslr"},
    {"id":"p04","name":"panasonic-lumix dc tz200-", "pic":"panasonic-lumix dc tz200-$690.png","price":690,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":2,"type":"dslr"},
    {"id":"p05","name":"panasonic-lumix dc tz90", "pic":"panasonic-lumix dc tz90-$359.png","price":359,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":2,"type":"compact"},
    {"id":"p06","name":"panasonic-lumix dmc fz2000", "pic":"panasonic-lumix dmc fz2000-$899.png","price":899,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":5,"type":"csc"},
    {"id":"p07","name":"panasonic-lumix dmc tz100", "pic":"panasonic-lumix dmc tz100-$499.png","price":499,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":5,"type":"dslr"},
    {"id":"p08","name":"panasonic-lumix dmc tz8", "pic":"panasonic-lumix dmc tz8-$309.png","price":309,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":5,"type":"compact"},
    {"id":"p09","name":"panasonic-lumix dmc fz300", "pic":"panasonic-lumix dmc fz300-$489.png","price":489,"description":"Lumix compact camera owns a 28mm lens with 8x optical zoom that gives users a focal length of 28 - 224mm", "cat":"panasonic","rate":5,"type":"csc"},

    // source sony
    {"id":"s01","name":"sony-cyber shot dsc hx400v", "pic":"sony-cyber shot dsc hx400v-$469.png","price":469,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":4,"type":"dslr"},
    {"id":"s02","name":"sony-cyber shot dsc hx90 đen", "pic":"sony-cyber shot dsc hx90 đen-$369.png","price":369,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":4,"type":"compact"},
    {"id":"s03","name":"sony-cyber shot dsc rx10 iv", "pic":"sony-cyber shot dsc rx10 iv-$1890.png","price":1890,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":4,"type":"dslr"},
    {"id":"s04","name":"sony-cyber shot dsc rx100 v", "pic":"sony-cyber shot dsc rx100 v -$899.png","price":899,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":4,"type":"compact"},
    {"id":"s05","name":"sony-cyber shot dsc rx100 đen", "pic":"sony-cyber shot dsc rx100 đen-$299.png","price":299,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":3,"type":"compact"},
    {"id":"s06","name":"sony-cyber shot dsc rx100iv", "pic":"sony-cyber shot dsc rx100iv-$699.png","price":699,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":4,"type":"compact"},
    {"id":"s07","name":"sony-cyber shot dsc rx100v", "pic":"sony-cyber shot dsc rx100v-$499.png","price":499,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":3,"type":"compact"},
    {"id":"s08","name":"sony-cyber shot hx99-", "pic":"sony-cyber shot hx99-$489.png","price":489,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":3,"type":"csc"},
    {"id":"s09","name":"sony-cyber shot rx100 vii", "pic":"sony-cyber shot rx100 vii-$1199.png","price":1199,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":5,"type":"csc"},
    {"id":"s10","name":"sony-zv", "pic":"sony-zv-$719.png","price":719,"description":"The Sony HX400V Camera is a premium zoom lens travel camera with the design and quality of a DSLR. 20.4MP Exmor R CMOS sensor and a BIONZ X Image processor for smooth lighting effects", "cat":"sony","rate":4,"type":"csc"},
    
    // source lens nikon
    {"id":"ln1","name":"nikon af s 35mm", "pic":"nikon af s 35mm-$162.png","price":162,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":5,"type":"none"},
    {"id":"ln2","name":"nikon nikkor z 2470mm", "pic":"nikon nikkor z 2470mm-$2111.png","price":2111,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":3,"type":"none"},
    {"id":"ln3","name":"nikon-af s 50mm", "pic":"nikon-af s 50mm-$168.png","price":168,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":3,"type":"none"},
    {"id":"ln4","name":"nikon-afs nikkor-18140mm", "pic":"nikon-afs nikkor-18140mm-$269.png","price":269,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":3,"type":"none"},
    {"id":"ln5","name":"nikon-nikkor 24120mm", "pic":"nikon-nikkor 24120mm-$583.png","price":583,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":3,"type":"none"},
    {"id":"ln6","name":"nikon-nikkor 24mm", "pic":"nikon-nikkor 24mm-$2414.png","price":2414,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":4,"type":"none"},
    {"id":"ln7","name":"nikon-nikkor 40mm", "pic":"nikon-nikkor 40mm-$233.png","price":233,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":4,"type":"none"},
    {"id":"ln8","name":"nikon-nikkor dx 8300", "pic":"nikon-nikkor dx 8300-mm-$623.png","price":623,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":4,"type":"none"},
    {"id":"ln9","name":"nikon-nikkor z 28mm", "pic":"nikon-nikkor z 28mm-$265.png","price":265,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":3,"type":"none"},
    {"id":"ln0","name":"nikon-nikkor z 50 250mm", "pic":"nikon-nikkor z 50 250mm-$354.png","price":354,"description":"The Nikon Z 24-70mm f/2.8 S Lens is a 24-70mm standard zoom lens that lets you capture every creative perspective. With a constant maximum aperture of f/2.8, the lens is capable of capturing clear images in a variety of bright conditions, even in low light", "cat":"lensn","rate":4,"type":"none"},

    // source lens panasonic
    {"id":"lp1","name":"panasonic-leica dg macroelmarit 45mm", "pic":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"Optimized for close-ups, the Leica DG Macro-Elmarit 45mm f/2.8 ASPH. Panasonic's MEGA OIS is a short, 90mm-equivalent telephoto for Micro Four Thirds mirrorless cameras", "cat":"lensp","rate":2,"type":"none"},
    {"id":"lp2","name":"panasonic-leica dg summilux 10 25mm", "pic":"panasonic-leica dg summilux 10 25mm-$1728.png","price":1728,"description":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"Optimized for close-ups, the Leica DG Macro-Elmarit 45mm f/2.8 ASPH. Panasonic's MEGA OIS is a short, 90mm-equivalent telephoto for Micro Four Thirds mirrorless cameras", "cat":"lensp","rate":2,"type":"none"},
    {"id":"lp3","name":"panasonic-leica dg summilux-12mm", "pic":"panasonic-leica dg summilux-12mm-$1286.png","price":1286,"description":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"Optimized for close-ups, the Leica DG Macro-Elmarit 45mm f/2.8 ASPH. Panasonic's MEGA OIS is a short, 90mm-equivalent telephoto for Micro Four Thirds mirrorless cameras", "cat":"lensp","rate":2,"type":"none"},
    {"id":"lp4","name":"panasonic-lumix g 425mm", "pic":"panasonic-lumix g 425mm-$361.png","price":361,"description":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"Optimized for close-ups, the Leica DG Macro-Elmarit 45mm f/2.8 ASPH. Panasonic's MEGA OIS is a short, 90mm-equivalent telephoto for Micro Four Thirds mirrorless cameras", "cat":"lensp","rate":2,"type":"none"},
    {"id":"lp5","name":"panasonic-lumix g macro-30mm", "pic":"panasonic-lumix g macro-30mm-$329.png","price":329,"description":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"Optimized for close-ups, the Leica DG Macro-Elmarit 45mm f/2.8 ASPH. Panasonic's MEGA OIS is a short, 90mm-equivalent telephoto for Micro Four Thirds mirrorless cameras", "cat":"lensp","rate":3,"type":"none"},
    {"id":"lp6","name":"panasonic-lumix g x vario 12-35mm", "pic":"panasonic-lumix g x vario 12-35mm-$651.png","price":651,"description":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"Optimized for close-ups, the Leica DG Macro-Elmarit 45mm f/2.8 ASPH. Panasonic's MEGA OIS is a short, 90mm-equivalent telephoto for Micro Four Thirds mirrorless cameras", "cat":"lensp","rate":5,"type":"none"},
    {"id":"lp7","name":"panasonic-lumix s 85mm", "pic":"panasonic-lumix s 85mm-$490.png","price":490,"description":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"Optimized for close-ups, the Leica DG Macro-Elmarit 45mm f/2.8 ASPH. Panasonic's MEGA OIS is a short, 90mm-equivalent telephoto for Micro Four Thirds mirrorless cameras", "cat":"lensp","rate":4,"type":"none"},
    {"id":"lp8","name":"panasonic-lumix s pro-70-200mm", "pic":"panasonic-lumix s pro-70-200mm-$752.png","price":752,"description":"panasonic-leica dg macroelmarit 45mm-$683.png","price":683,"description":"Optimized for close-ups, the Leica DG Macro-Elmarit 45mm f/2.8 ASPH. Panasonic's MEGA OIS is a short, 90mm-equivalent telephoto for Micro Four Thirds mirrorless cameras", "cat":"lensp","rate":4,"type":"none"},

    // source lens sony
    {"id":"ls1","name":"sony-e pz 105mm", "pic":"sony-e pz 105mm-$482.png","price":482,"description":"The Sony E PZ 18-105mm F/4.0 G OSS is considered the best lens for video recording on APS-C sensor Sony cameras. Possessing a versatile focal length range of 18-105mm, this lens is very versatile for many situations from photography to video recording", "cat":"lenss","rate":4,"type":"none"},
    {"id":"ls2","name":"sony-e-1018mm", "pic":"sony-e-1018mm-$716.png","price":716,"description":"The Sony E PZ 18-105mm F/4.0 G OSS is considered the best lens for video recording on APS-C sensor Sony cameras. Possessing a versatile focal length range of 18-105mm, this lens is very versatile for many situations from photography to video recording", "cat":"lenss","rate":4,"type":"none"},
    {"id":"ls3","name":"sony-fe 50mm", "pic":"sony-fe 50mm-$224.png","price":224,"description":"The Sony E PZ 18-105mm F/4.0 G OSS is considered the best lens for video recording on APS-C sensor Sony cameras. Possessing a versatile focal length range of 18-105mm, this lens is very versatile for many situations from photography to video recording", "cat":"lenss","rate":3,"type":"none"},
    {"id":"ls4","name":"sony-fe 85mm", "pic":"sony-fe 85mm-$482.png","price":482,"description":"The Sony E PZ 18-105mm F/4.0 G OSS is considered the best lens for video recording on APS-C sensor Sony cameras. Possessing a versatile focal length range of 18-105mm, this lens is very versatile for many situations from photography to video recording", "cat":"lenss","rate":3,"type":"none"},
    {"id":"ls5","name":"sony-fe-1635mm", "pic":"sony-fe-1635mm-$2051.png","price":2051,"description":"The Sony E PZ 18-105mm F/4.0 G OSS is considered the best lens for video recording on APS-C sensor Sony cameras. Possessing a versatile focal length range of 18-105mm, this lens is very versatile for many situations from photography to video recording", "cat":"lenss","rate":3,"type":"none"},
    {"id":"ls6","name":"sony-fe-1635mm", "pic":"sony-fe-1635mm-$965.png","price":965,"description":"The Sony E PZ 18-105mm F/4.0 G OSS is considered the best lens for video recording on APS-C sensor Sony cameras. Possessing a versatile focal length range of 18-105mm, this lens is very versatile for many situations from photography to video recording", "cat":"lenss","rate":3,"type":"none"},
    {"id":"ls7","name":"sony-fe-24105mm", "pic":"sony-fe-24105mm-$1206.png","price":1206,"description":"The Sony E PZ 18-105mm F/4.0 G OSS is considered the best lens for video recording on APS-C sensor Sony cameras. Possessing a versatile focal length range of 18-105mm, this lens is very versatile for many situations from photography to video recording", "cat":"lenss","rate":3,"type":"none"},
    {"id":"ls8","name":"sony-fe-2470mm", "pic":"sony-fe-2470mm-$844.png","price":844,"description":"The Sony E PZ 18-105mm F/4.0 G OSS is considered the best lens for video recording on APS-C sensor Sony cameras. Possessing a versatile focal length range of 18-105mm, this lens is very versatile for many situations from photography to video recording", "cat":"lenss","rate":2,"type":"none"},

    // source lens canon
    {"id":"lc1","name":"canon-ef-50mm", "pic":"canon-ef-50mm-$372.png","price":372,"description":"Canon 50mm f/1.8 STM lens designed with a focal length similar to that of the human eye, suitable for portrait photography, everyday photography", "cat":"lensc","rate":2,"type":"none"},
    {"id":"lc2","name":"canon-ef1740mm", "pic":"canon-ef1740mm-$688.png","price":688,"description":"Canon 50mm f/1.8 STM lens designed with a focal length similar to that of the human eye, suitable for portrait photography, everyday photography", "cat":"lensc","rate":2,"type":"none"},
    {"id":"lc3","name":"canon-ef50mm", "pic":"canon-ef50mm-$375.png","price":375,"description":"Canon 50mm f/1.8 STM lens designed with a focal length similar to that of the human eye, suitable for portrait photography, everyday photography", "cat":"lensc","rate":2,"type":"none"},
    {"id":"lc4","name":"canon-efm 1545mm", "pic":"canon-efm 1545mm-$82.png","price":82,"description":"Canon 50mm f/1.8 STM lens designed with a focal length similar to that of the human eye, suitable for portrait photography, everyday photography", "cat":"lensc","rate":2,"type":"none"},
    {"id":"lc5","name":"canon-efm-22mm", "pic":"canon-efm-22mm-$412.png","price":412,"description":"Canon 50mm f/1.8 STM lens designed with a focal length similar to that of the human eye, suitable for portrait photography, everyday photography", "cat":"lensc","rate":2,"type":"none"},
    {"id":"lc6","name":"canon-efs-18135mm", "pic":"canon-efs-18135mm-$726.png","price":726,"description":"Canon 50mm f/1.8 STM lens designed with a focal length similar to that of the human eye, suitable for portrait photography, everyday photography", "cat":"lensc","rate":5,"type":"none"},
    {"id":"lc7","name":"canon-efs1018mm", "pic":"canon-efs1018mm-$478.png","price":478,"description":"Canon 50mm f/1.8 STM lens designed with a focal length similar to that of the human eye, suitable for portrait photography, everyday photography", "cat":"lensc","rate":5,"type":"none"},
    {"id":"lc8","name":"canon-efs1855mm", "pic":"canon-efs1855mm-$115.png","price":115,"description":"Canon 50mm f/1.8 STM lens designed with a focal length similar to that of the human eye, suitable for portrait photography, everyday photography", "cat":"lensc","rate":5,"type":"none"},

    //source accessories backpack
    {"id":"bp1","name":"backpack-lowepro dashpoint 10gray", "pic":"backpack-lowepro dashpoint 10gray-$159.png","price":159,"description":"Colorful and lightweight. Versatile and protective. These pouches feature a flexible attachment system so you can carry your camera, smartphone or GPS lots of ways", "cat":"backpack","rate":4,"type":"none"},
    {"id":"bp3","name":"backpack-lowepro nova 200 aw ll black", "pic":"backpack-lowepro nova 200 aw ll black-$89.png","price":89,"description":"Colorful and lightweight. Versatile and protective. These pouches feature a flexible attachment system so you can carry your camera, smartphone or GPS lots of ways", "cat":"backpack","rate":4,"type":"none"},
    {"id":"bp5","name":"backpack-lowepro pro tactic 120 aw black", "pic":"backpack-lowepro pro tactic 120 aw black-$59.png","price":59,"description":"Colorful and lightweight. Versatile and protective. These pouches feature a flexible attachment system so you can carry your camera, smartphone or GPS lots of ways", "cat":"backpack","rate":4,"type":"none"},
    {"id":"bp6","name":"backpack-manfroto off road stunt", "pic":"backpack-manfroto off road stunt-$89.png","price":89,"description":"Colorful and lightweight. Versatile and protective. These pouches feature a flexible attachment system so you can carry your camera, smartphone or GPS lots of ways", "cat":"backpack","rate":3,"type":"none"},
    {"id":"bp7","name":"backpack-peak design everyday tote 20l ash", "pic":"backpack-peak design everyday tote 20l ash-$159.png","price":159,"description":"Colorful and lightweight. Versatile and protective. These pouches feature a flexible attachment system so you can carry your camera, smartphone or GPS lots of ways", "cat":"backpack","rate":4,"type":"none"},
    {"id":"bp8","name":"backpack-peak design everyday tote 20l chocolate", "pic":"backpack-peak design everyday tote 20l chocolate-$159.png","price":159,"description":"Colorful and lightweight. Versatile and protective. These pouches feature a flexible attachment system so you can carry your camera, smartphone or GPS lots of ways", "cat":"backpack","rate":4,"type":"none"},

    //source accessories tripod
    {"id":"tp1","name":"tripod-hama star 63", "pic":"tripod-hama star 63-$29.jpg","price":29,"description":"This sturdy but nevertheless lightweight tripod is distinguished by all-weather reliability and the perfect choice for eliminating camera shaking that can otherwise cause blurring", "cat":"tripod","rate":4,"type":"none"},
    {"id":"tp2","name":"tripod-manfrottio element mll aluminium", "pic":"tripod-manfrottio element mll aluminium -$129.jpg","price":129,"description":"This sturdy but nevertheless lightweight tripod is distinguished by all-weather reliability and the perfect choice for eliminating camera shaking that can otherwise cause blurring", "cat":"tripod","rate":5,"type":"none"},
    {"id":"tp3","name":"tripod-manfrotto pixi evo", "pic":"tripod-manfrotto pixi evo -$37.jpg","price":37,"description":"This sturdy but nevertheless lightweight tripod is distinguished by all-weather reliability and the perfect choice for eliminating camera shaking that can otherwise cause blurring", "cat":"tripod","rate":5,"type":"none"},
    {"id":"tp4","name":"tripod-sirui sh-05", "pic":"tripod-sirui sh-05-$179.jpg","price":179,"description":"This sturdy but nevertheless lightweight tripod is distinguished by all-weather reliability and the perfect choice for eliminating camera shaking that can otherwise cause blurring", "cat":"tripod","rate":2,"type":"none"},
    {"id":"tp5","name":"tripod-vanguard alta pro 263ap", "pic":"tripod-vanguard alta pro 263ap-149.jpg","price":149,"description":"This sturdy but nevertheless lightweight tripod is distinguished by all-weather reliability and the perfect choice for eliminating camera shaking that can otherwise cause blurring", "cat":"tripod","rate":5,"type":"none"},
    {"id":"tp6","name":"tripod-vanguirs vesta 203ap", "pic":"tripod-vanguirs vesta 203ap-$37.jpg","price":37,"description":"This sturdy but nevertheless lightweight tripod is distinguished by all-weather reliability and the perfect choice for eliminating camera shaking that can otherwise cause blurring", "cat":"tripod","rate":5,"type":"none"},

    //source accessories studio equipments
    {"id":"st1","name":"fomei led ring 32 muah indoor kit", "pic":"fomei led ring 32 muah indoor kit-$269.jpg","price":269,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":3,"type":"none"},
    {"id":"st2","name":"fomei reflector board 120x180cm 5in1", "pic":"fomei reflector board 120x180cm 5in1-$51.jpg","price":51,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":3,"type":"none"},
    {"id":"st3","name":"fomei reflector board 80cm 5in1", "pic":"fomei reflector board 80cm 5in1-$20.jpg","price":20,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":3,"type":"none"},
    {"id":"st4","name":"olympus lg 1 led", "pic":"olympus lg 1 led-$35.jpg","price":35,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":3,"type":"none"},
    {"id":"st5","name":"starblitz led 440 photo cub", "pic":"starblitz led 440 photo cub-$109.jpg","price":109,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":3,"type":"none"},
    {"id":"st6","name":"studio king ls ff60", "pic":"studio king ls ff60-$39.jpg","price":39,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":3,"type":"none"},
    {"id":"st7","name":"fomei led mini 15w", "pic":"fomei led mini 15w-$162.jpg","price":162,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":3,"type":"none"},
    {"id":"st8","name":"fomei led mini 30w", "pic":"fomei led mini 30w -$289.jpg","price":289,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":3,"type":"none"},
    {"id":"st9","name":"nanlite light stand lg l186", "pic":"nanlite light stand lg l186-$55.jpg","price":55,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":2,"type":"none"},
    {"id":"st0","name":"nanlite litolite 28f led", "pic":"nanlite litolite 28f led -$87.jpg","price":87,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography", "cat":"studio","rate":2,"type":"none"},
   
//source general accessories 
    {"id":"ac1","name":"accessori-canon lp e17", "pic":"accessori-canon lp e17-$45.jpg","price":45,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":2,"type":"none"},
    {"id":"ac2","name":"accessori-canon rc 6 remote control", "pic":"accessori-canon rc 6 remote control-$16.jpg","price":16,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":4,"type":"none"},
    {"id":"ac3","name":"accessori-canon rs 60 e3", "pic":"accessori-canon rs 60 e3-$15.jpg","price":15,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":4,"type":"none"},
    {"id":"ac4","name":"accessori-caon rc 6", "pic":"accessori-caon rc 6 -$16.jpg","price":16,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":4,"type":"none"},
    {"id":"ac5","name":"accessori-hama cleanong ballon dust ex", "pic":"accessori-hama cleanong ballon dust ex-$7.jpg","price":7,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":4,"type":"none"},
    {"id":"ac6","name":"accessori-larmor screen protector for nikon", "pic":"accessori-larmor screen protector for nikon-$9.png","price":9,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":4,"type":"none"},
    {"id":"ac7","name":"accessori-larmor screen protector for nikon", "pic":"accessori-larmor screen protector for nikon -$8.jpg","price":8,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":2,"type":"none"},
    {"id":"ac8","name":"accessori-nikon ml l3 remote control", "pic":"accessori-nikon ml l3 remote control-$35.jpg","price":35,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":5,"type":"none"},
    {"id":"ac9","name":"accessori-sony 256gb g series", "pic":"accessori-sony 256gb g series-$349.png","price":349,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":3,"type":"none"},
	    {"id":"ac0","name":"accessori-sony np fz100", "pic":"accessori-sony np fz100-$895.jpg","price":89,"description":"The unique circular LED light provides perfectly even illumination with minimal shadows. Suitable for portrait and product photography-----accessories studio equipments", "cat":"accessory","rate":3,"type":"none"},

    // source instax
    {"id":"in1","name":"fujifilm-mini11", "pic":"fujifilm-mini11-$78.png","price":78,"description":"Newly released in early 2020, the Fujifilm Instax Mini 11 camera has made people crazy with its cute appearance and the most optimal feature improvements for an instant camera", "cat":"instax","rate":3,"type":"none"},
    {"id":"in2","name":"fujifilm-mini40", "pic":"fujifilm-mini40-$108.png","price":108,"description":"Newly released in early 2020, the Fujifilm Instax Mini 11 camera has made people crazy with its cute appearance and the most optimal feature improvements for an instant camera", "cat":"instax","rate":2,"type":"none"},
    {"id":"in3","name":"fujifilm-mini90", "pic":"fujifilm-mini90-$167.png","price":167,"description":"Newly released in early 2020, the Fujifilm Instax Mini 11 camera has made people crazy with its cute appearance and the most optimal feature improvements for an instant camera", "cat":"instax","rate":4,"type":"none"},
    {"id":"in4","name":"fujifilm-minihelloKitty", "pic":"fujifilm-minihelloKitty-$100.png","price":100,"description":"Newly released in early 2020, the Fujifilm Instax Mini 11 camera has made people crazy with its cute appearance and the most optimal feature improvements for an instant camera", "cat":"instax","rate":3,"type":"none"},
    {"id":"in5","name":"fujifilm-oneStep2", "pic":"fujifilm-oneStep2-$178.png","price":178,"description":"Newly released in early 2020, the Fujifilm Instax Mini 11 camera has made people crazy with its cute appearance and the most optimal feature improvements for an instant camera", "cat":"instax","rate":5,"type":"none"}

];

displayImages(data);

//Search event
$("#formSearch").submit(function (e) {
    e.preventDefault();

    let search = $("#search").val();
    let re = new RegExp(search, "ig");
    let subdata = data.filter(item => item.name.search(re) >= 0);

    displayImages(subdata);
});




// filter event
$(".chk-sort").click(function () {

   

    let cats1 = $(".chk-sort:checked").map(function () { return $(this).val() }).toArray().toString();
   
    
    let subdata1 = (cats1.length==0)?data: data.filter(item => cats1.search(item.cat) >= 0);
    
    
    
    displayImages(subdata1);
  
   


});

$(".chk-sort1").click(function () {

   

  let cats2 = $(".chk-sort1:checked").map(function () { return $(this).val() }).toArray().toString();
  
  
  let subdata2 = (cats2.length==0)?data: data.filter(item => cats2.search(item.type) >= 0);
  
  displayImages(subdata2);
 


});


   

 

 



// show product
function displayImages(items) {
    let s = ``;
	
	$.each(items, function (k, v) {

        s += `<div class="col-sm-6 col-md-4 divImage">
                <div class="selectProduct" data-id="${v.id}" data-name="${v.name}" data-price="${v.price}" data-description="${v.description}">
                    <a class="addButtonCircular addToCompare" style="text-align:center;"> + </a>
                    <a href="product-detail.html?id=${v.id}" class="productImg"><img src="../IMAGE/${v.pic}" alt="" class="productImage"></a>
                    <h3>${v.name.toUpperCase()} </h3>
                    <h4>Price: ${v.price}</h4>
                </div>
               
            </div>`;
    });
    
    $("#products").html(s);
}


// product detail event
var res = '';
function getUrlID(){
    var urlID = window.location.href;
    res = urlID.slice(-3);
   
}

function productDetail(){
    var d = ``;
    var i = 0;
    for (var v of data){
    
        if (v.id == res){
            i++;
            switch(v.rate){
              case 0:{
                d += `
            <div class="row" id="productDetail" style="color:white ;"> </div>
  
            <div class="container-fluid mt-3">
               
              <div class="row">
                <div class="col-sm-6 bg-dark text-white p-3">
                  <div class="product-image">
                      <img id="expandedImg" style="width:50%">
                    </div>
		    <img src="../IMAGE/${v.pic}" alt="Nature" style="width:30%" onclick="myFunction(this);" class="productImage"><br>
		    <h4>${v.name.toUpperCase()}</h4><br>
                    <span class="fa fa-star " style="font-size: 15px;"></span>
                        <span class="fa fa-star" style="font-size: 15px;"></span>
                        <span class="fa fa-star" style="font-size: 15px;"></span>
                        <span class="fa fa-star" style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        
                        <div>
                        <div class="tab">
                          <button class="tablinks" onclick="openCity(event, 'Price')">$ ${v.price}</button>
                          <button class="tablinks" onclick="openCity(event, 'Discription')">Description</button>
                          <button class="tablinks" onclick="openCity(event, 'Specification')">Specification</button>
                          
                          
                         </div>  
                         
                              
            
            <div id="Price" class="tabcontent">
              <h3>Price</h3>
              <p>$ ${v.price}</p>
            </div>
            
            <div id="Discription" class="tabcontent">
              <h3>Description</h3>
              <p>${v.description}</p> 
            </div>
            
            <div id="Specification" class="tabcontent">
              <h3>Specification</h3>
              <p>${v.description}</p> 
            </div>
           
             
                        <!-- <a href="#">
                          <button class="btn" style="width:100%"><i class="fa fa-download"></i> Download</button>
                          </a>
                         -->
                        <div class="row">
                          <div class="column">
                            <img src="../IMAGE/${v.pic}" alt="Nature" style="width:50%" onclick="myFunction(this);" class="productImage">
                          </div>
                        </div>
                        
                  </div>
                </div>
                <div class="col-sm-6 bg-dark text-white p-3">
                 
                    <h2>${v.name.toUpperCase()}</h2>
                    <p>${v.description}</p>            
                    <table class="table"  style="color:#fff ; ">
                      <thead>
                        <tr>
                          <th>ID: </th>
                          <th></th>
                          <th>${v.id}</th>
                          </tr>
                      </thead>
                      <thead>
                       
                      </thead>
                      <thead>
                        <tr>
                          <th>PRODUCT PRICE</th>
                          <th></th>
                          <th>$ ${v.price}</th>
                          </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>RATE:</th>
                          
                          <th></th>
                          <th><span class="fa fa-star"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            </th>
                          </tr>
                          <tr>
                          </tr>
                      </thead>
                    </table>
                    <a href="#" data-name="${v.name}" data-price="${v.price}" data-pic="${v.pic}" class="add-to-cart btn" style="color:white;background-color:red;width:25%;height:5%;margin-right:12px">Add to cart</a> 
                    <a href="../HTML/buynow.html" class="buy-now btn " style="color:white;background-color:red;width:25%;height:5%"">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            
            
                `;
            break;
              }
              case 1:{
                d += `
            <div class="row" id="productDetail" style="color:white ;"> </div>
  
            <div class="container-fluid mt-3">
               
              <div class="row">
                <div class="col-sm-6 bg-dark text-white p-3">
                  <div class="product-image">
                      <img id="expandedImg" style="width:50%">
                    </div>
                    <img src="../IMAGE/${v.pic}" alt="Nature" style="width:30%" onclick="myFunction(this);" class="productImage"><br>
		    <h4>${v.name.toUpperCase()}</h4><br>
                    <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        <span class="fa fa-star" style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        
                        <div>
                        <div class="tab">
                          <button class="tablinks" onclick="openCity(event, 'Price')">$ ${v.price}</button>
                          <button class="tablinks" onclick="openCity(event, 'Discription')">Description</button>
                          <button class="tablinks" onclick="openCity(event, 'Specification')">Specification</button>
                          
                          
                         </div>  
                         
                              
            
            <div id="Price" class="tabcontent">
              <h3>Price</h3>
              <p>$ ${v.price}</p>
            </div>
            
            <div id="Discription" class="tabcontent">
              <h3>Description</h3>
              <p>${v.description}</p> 
            </div>
            
            <div id="Specification" class="tabcontent">
              <h3>Specification</h3>
              <p>${v.description}</p> 
            </div>
           
             
                        <!-- <a href="#">
                          <button class="btn" style="width:100%"><i class="fa fa-download"></i> Download</button>
                          </a>
                         -->
                        <div class="row">
                          <div class="column">
                            <img src="../IMAGE/${v.pic}" alt="Nature" style="width:50%" onclick="myFunction(this);">
                          </div>
                        </div>
                        
                  </div>
                </div>
                <div class="col-sm-6 bg-dark text-white p-3">
                 
                    <h2>${v.name.toUpperCase()}</h2>
                    <p>${v.description}</p>            
                    <table class="table"  style="color:#fff ; ">
                      <thead>
                        <tr>
                          <th>ID: </th>
                          <th></th>
                          <th>${v.id}</th>
                          </tr>
                      </thead>
                      <thead>
                       
                      </thead>
                      <thead>
                        <tr>
                          <th>PRODUCT PRICE</th>
                          <th></th>
                          <th>$ ${v.price}</th>
                          </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>RATE:</th>
                          
                          <th></th>
                          <th><span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            </th>
                          </tr>
                          <tr>
                          </tr>
                      </thead>
                    </table>
                    <a href="#" data-name="${v.name}" data-price="${v.price}" data-pic="${v.pic}" class="add-to-cart btn" style="color:white;background-color:red;width:25%;height:5%;margin-right:12px">Add to cart</a> 
                    <a href="../HTML/buynow.html" class="buy-now btn " style="color:white;background-color:red;width:25%;height:5%"">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            
            
                `;
            break;
              }
              case 2:{
                d += `
            <div class="row" id="productDetail" style="color:white ;"> </div>
  
            <div class="container-fluid mt-3">
               
              <div class="row">
                <div class="col-sm-6 bg-dark text-white p-3">
                  <div class="product-image">
                      <img id="expandedImg" style="width:50%">
                    </div>
                    <img src="../IMAGE/${v.pic}" alt="Nature" style="width:30%" onclick="myFunction(this);" class="productImage"><br>
		    <h4>${v.name.toUpperCase()}</h4><br>
                    <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        
                        <div>
                        <div class="tab">
                          <button class="tablinks" onclick="openCity(event, 'Price')">$ ${v.price}</button>
                          <button class="tablinks" onclick="openCity(event, 'Discription')">Description</button>
                          <button class="tablinks" onclick="openCity(event, 'Specification')">Specification</button>
                          
                          
                         </div>  
                         
                              
            
            <div id="Price" class="tabcontent">
              <h3>Price</h3>
              <p>$ ${v.price}</p>
            </div>
            
            <div id="Discription" class="tabcontent">
              <h3>Description</h3>
              <p>${v.description}</p> 
            </div>
            
            <div id="Specification" class="tabcontent">
              <h3>Specification</h3>
              <p>${v.description}</p> 
            </div>
           
             
                        <!-- <a href="#">
                          <button class="btn" style="width:100%"><i class="fa fa-download"></i> Download</button>
                          </a>
                         -->
                        <div class="row">
                          <div class="column">
                            <img src="../IMAGE/${v.pic}" alt="Nature" style="width:50%" onclick="myFunction(this);">
                          </div>
                        </div>
                        
                  </div>
                </div>
                <div class="col-sm-6 bg-dark text-white p-3">
                  
                    <h2>${v.name.toUpperCase()}</h2>
                    <p>${v.description}</p>            
                    <table class="table"  style="color:#fff ; ">
                      <thead>
                        <tr>
                          <th>ID: </th>
                          <th></th>
                          <th>${v.id}</th>
                          </tr>
                      </thead>
                      <thead>
                       
                      </thead>
                      <thead>
                        <tr>
                          <th>PRODUCT PRICE</th>
                          <th></th>
                          <th>$ ${v.price}</th>
                          </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>RATE:</th>
                          
                          <th></th>
                          <th><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            </th>
                          </tr>
                          <tr>
                          </tr>
                      </thead>
                    </table>
                    <a href="#" data-name="${v.name}" data-price="${v.price}" data-pic="${v.pic}" class="add-to-cart btn" style="color:white;background-color:red;width:25%;height:5%;margin-right:12px">Add to cart</a> 
                    <a href="../HTML/buynow.html" class="buy-now btn " style="color:white;background-color:red;width:25%;height:5%"">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
           
                `;
            break;
              }
              case 3:{
                d += `
            <div class="row" id="productDetail" style="color:white ;"> </div>
  
            <div class="container-fluid mt-3">
               
              <div class="row">
                <div class="col-sm-6 bg-dark text-white p-3">
                  <div class="product-image">
                      <img id="expandedImg" style="width:50%">
                    </div>
                     <img src="../IMAGE/${v.pic}" alt="Nature" style="width:30%" onclick="myFunction(this);" class="productImage"><br>
		    <h4>${v.name.toUpperCase()}</h4><br>
                    <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        
                        <div>
                        <div class="tab">
                          <button class="tablinks" onclick="openCity(event, 'Price')">$ ${v.price}</button>
                          <button class="tablinks" onclick="openCity(event, 'Discription')">Description</button>
                          <button class="tablinks" onclick="openCity(event, 'Specification')">Specification</button>
                          
                          
                         </div>  
                         
                              
            
            <div id="Price" class="tabcontent">
              <h3>Price</h3>
              <p>$ ${v.price}</p>
            </div>
            
            <div id="Discription" class="tabcontent">
              <h3>Description</h3>
              <p>${v.description}</p> 
            </div>
            
            <div id="Specification" class="tabcontent">
              <h3>Specification</h3>
              <p>${v.description}</p> 
            </div>
           
             
                        <!-- <a href="#">
                          <button class="btn" style="width:100%"><i class="fa fa-download"></i> Download</button>
                          </a>
                         -->
                        <div class="row">
                          <div class="column">
                            <img src="../IMAGE/${v.pic}" alt="Nature" style="width:50%" onclick="myFunction(this);">
                          </div>
                        </div>
                        
                  </div>
                </div>
                <div class="col-sm-6 bg-dark text-white p-3">
                 
                    <h2>${v.name.toUpperCase()}</h2>
                    <p>${v.description}</p>            
                    <table class="table"  style="color:#fff ; ">
                      <thead>
                        <tr>
                          <th>ID: </th>
                          <th></th>
                          <th>${v.id}</th>
                          </tr>
                      </thead>
                      <thead>
                       
                      </thead>
                      <thead>
                        <tr>
                          <th>PRODUCT PRICE</th>
                          <th></th>
                          <th>$ ${v.price}</th>
                          </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>RATE:</th>
                          
                          <th></th>
                          <th><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked "></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            </th>
                          </tr>
                          <tr>
                          </tr>
                      </thead>
                    </table>
                    <a href="#" data-name="${v.name}" data-price="${v.price}" data-pic="${v.pic}" class="add-to-cart btn" style="color:white;background-color:red;width:25%;height:5%;margin-right:12px">Add to cart</a> 
                    <a href="../HTML/buynow.html" class="buy-now btn " style="color:white;background-color:red;width:25%;height:5%"">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          
                `;
            break;
              }
              case 4:{
                d += `
            <div class="row" id="productDetail" style="color:white ;"> </div>
  
            <div class="container-fluid mt-3">
               
              <div class="row">
                <div class="col-sm-6 bg-dark text-white p-3">
                  <div class="product-image">
                      <img id="expandedImg" style="width:50%">
                    </div>
                    <img src="../IMAGE/${v.pic}" alt="Nature" style="width:30%" onclick="myFunction(this);" class="productImage"><br>
		    <h4>${v.name.toUpperCase()}</h4><br>
                    <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star " style="font-size: 15px;"></span>
                        
                        <div>
                        <div class="tab">
                          <button class="tablinks" onclick="openCity(event, 'Price')">$ ${v.price}</button>
                          <button class="tablinks" onclick="openCity(event, 'Discription')">Description</button>
                          <button class="tablinks" onclick="openCity(event, 'Specification')">Specification</button>
                          
                          
                         </div>  
                         
                              
            
            <div id="Price" class="tabcontent">
              <h3>Price</h3>
              <p>$ ${v.price}</p>
            </div>
            
            <div id="Discription" class="tabcontent">
              <h3>Description</h3>
              <p>${v.description}</p> 
            </div>
            
            <div id="Specification" class="tabcontent">
              <h3>Specification</h3>
              <p>${v.description}</p> 
            </div>
           
             
                        <!-- <a href="#">
                          <button class="btn" style="width:100%"><i class="fa fa-download"></i> Download</button>
                          </a>
                         -->
                        <div class="row">
                          <div class="column">
                            <img src="../IMAGE/${v.pic}" alt="Nature" style="width:50%" onclick="myFunction(this);">
                          </div>
                        </div>
                        
                  </div>
                </div>
                <div class="col-sm-6 bg-dark text-white p-3">
                 
                    <h2>${v.name.toUpperCase()}</h2>
                    <p>${v.description}</p>            
                    <table class="table"  style="color:#fff ; ">
                      <thead>
                        <tr>
                          <th>ID: </th>
                          <th></th>
                          <th>${v.id}</th>
                          </tr>
                      </thead>
                      <thead>
                       
                      </thead>
                      <thead>
                        <tr>
                          <th>PRODUCT PRICE</th>
                          <th></th>
                          <th>$ ${v.price}</th>
                          </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>RATE:</th>
                          
                          <th></th>
                          <th><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            </th>
                          </tr>
                          <tr>
                          </tr>
                      </thead>
                    </table>
                    <a href="#" data-name="${v.name}" data-price="${v.price}" data-pic="${v.pic}" class="add-to-cart btn" style="color:white;background-color:red;width:25%;height:5%;margin-right:12px">Add to cart</a> 
                    <a href="../HTML/buynow.html" class="buy-now btn " style="color:white;background-color:red;width:25%;height:5%"">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
         
                `;
            break;
              }
              case 5:{
                d += `
            <div class="row" id="productDetail" style="color:white ;"> </div>
  
            <div class="container-fluid mt-3">
               
              <div class="row">
                <div class="col-sm-6 bg-dark text-white p-3">
                  <div class="product-image">
                      <img id="expandedImg" style="width:50%">
                    </div>
                    <img src="../IMAGE/${v.pic}" alt="Nature" style="width:30%" onclick="myFunction(this);" class="productImage"><br>
		    <h4>${v.name.toUpperCase()}</h4><br>
                    <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        <span class="fa fa-star checked" style="font-size: 15px;"></span>
                        
                        <div>
                        <div class="tab">
                          <button class="tablinks" onclick="openCity(event, 'Price')">$ ${v.price}</button>
                          <button class="tablinks" onclick="openCity(event, 'Discription')">Description</button>
                          <button class="tablinks" onclick="openCity(event, 'Specification')">Specification</button>
                          
                          
                         </div>  
                         
                              
            
            <div id="Price" class="tabcontent">
              <h3>Price</h3>
              <p>$ ${v.price}</p>
            </div>
            
            <div id="Discription" class="tabcontent">
              <h3>Description</h3>
              <p>${v.description}</p> 
            </div>
            
            <div id="Specification" class="tabcontent">
              <h3>Specification</h3>
              <p>${v.description}</p> 
            </div>
           
             
                        <!-- <a href="#">
                          <button class="btn" style="width:100%"><i class="fa fa-download"></i> Download</button>
                          </a>
                         -->
                        <div class="row">
                          <div class="column">
                            <img src="../IMAGE/${v.pic}" alt="Nature" style="width:50%" onclick="myFunction(this);">
                          </div>
                        </div>
                        
                  </div>
                </div>
                <div class="col-sm-6 bg-dark text-white p-3">
                  
                    <h2>${v.name.toUpperCase()}</h2>
                    <p>${v.description}</p>            
                    <table class="table"  style="color:#fff ; ">
                      <thead>
                        <tr>
                          <th>ID: </th>
                          <th></th>
                          <th>${v.id}</th>
                          </tr>
                      </thead>
                      <thead>
                       
                      </thead>
                      <thead>
                        <tr>
                          <th>PRODUCT PRICE</th>
                          <th></th>
                          <th>$ ${v.price}</th>
                          </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>RATE:</th>
                          
                          <th></th>
                          <th><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            </th>
                          </tr>
                          <tr>
                          </tr>
                      </thead>
                    </table>
                    <a href="#" data-name="${v.name}" data-price="${v.price}" data-pic="${v.pic}" class="add-to-cart btn" style="color:white;background-color:red;width:25%;height:5%;margin-right:12px">Add to cart</a> 
                    <a href="../HTML/buynow.html" class="buy-now btn " style="color:white;background-color:red;width:25%;height:5%"">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            
                `;
            break;
              }
            }
            
        }
    }
    if (i == 0){
        d += `404 Not Found`;
    }
    $("#productDetail").html(d);
}




// nav icon dropdown
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

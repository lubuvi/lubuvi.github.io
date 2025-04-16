document.addEventListener('DOMContentLoaded', function () {
  // detect user is on mobile based on viewport width
  const isMobile = window.innerWidth <= 800;

  const biolumiImage = document.getElementById('biolumiImage');
  const cospImage = document.getElementById('cospImage');
  const allnightImage = document.getElementById('allnightImage');
  const kaimenImage = document.getElementById('kaimenImage');
  const seaImage = document.getElementById('seaImage');
  const booksImage = document.getElementById('booksImage');
  const greenImage = document.getElementById('greenImage');
  const eeaImage = document.getElementById('eeaImage');
  const stacImage = document.getElementById('stacImage');
  const hubinImage = document.getElementById('hubinImage');
  const twinImage = document.getElementById('twinImage');
  const coeImage = document.getElementById('coeImage');

  let biolumiTimers = [];
  let biolumiOriginalImage = biolumiImage.src;

  let cospTimers = [];
  let cospOriginalImage = cospImage.src;

  let allnightTimers = [];
  let allnightOriginalImage = allnightImage.src;

  let kaimenTimers = [];
  let kaimenOriginalImage = kaimenImage.src;

  let seaTimers = [];
  let seaOriginalImage = seaImage.src;

  let booksTimers = [];
  let booksOriginalImage = booksImage.src;

  let greenTimers = [];
  let greenOriginalImage = greenImage.src;

  let eeaTimers = [];
  let eeaOriginalImage = eeaImage.src;

  let stacTimers = [];
  let stacOriginalImage = stacImage.src;

  let hubinTimers = [];
  let hubinOriginalImage = hubinImage.src;

  let twinTimers = [];
  let twinOriginalImage = twinImage.src;

  let coeTimers = [];
  let coeOriginalImage = coeImage.src;


  // === Biolumi Image Logic ===
function startBiolumiImageCycle() {
    console.log('Starting Biolumi Image Cycle...');
    stopBiolumiCycle(); // Clear existing timers
  
    biolumiTimers.push(setTimeout(() => {
        biolumiImage.src = 'img/insectes.png';
    }, 100));
  
    biolumiTimers.push(setTimeout(() => {
        biolumiImage.src = 'img/biolumi.png';
    }, 1000));
  
    biolumiTimers.push(setTimeout(() => {
        startBiolumiImageCycle(); // loop
    }, 3000));
  }
  
  function stopBiolumiCycle() {
    console.log('Stopping Biolumi Cycle...');
    biolumiTimers.forEach(timer => clearTimeout(timer));
    biolumiTimers = [];
    biolumiImage.style.transition = 'none';
    biolumiImage.src = biolumiOriginalImage;
    setTimeout(() => {
        biolumiImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
    }, 50);
  }

   // === Cosp Image Logic ===
   function startCospImageCycle() {
    console.log('Starting Cosp Image Cycle...');
    stopCospCycle(); // Clear existing timers

    cospTimers.push(setTimeout(() => {
        cospImage.src = 'img/cosp3.png';
    }, 100));

    cospTimers.push(setTimeout(() => {
        cospImage.src = 'img/cosp2.png';
    }, 1000));

    cospTimers.push(setTimeout(() => {
        cospImage.src = 'img/cosp1.png';
    }, 1900));

    cospTimers.push(setTimeout(() => {
        startCospImageCycle(); // loop
    }, 2800));
}

function stopCospCycle() {
    console.log('Stopping Cosp Cycle...');
    cospTimers.forEach(timer => clearTimeout(timer));
    cospTimers = [];
    cospImage.style.transition = 'none';
    cospImage.src = cospOriginalImage;
    setTimeout(() => {
        cospImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
    }, 50);
}


  
  // === Allnight Image Logic ===
  function startAllnightImageCycle() {
      console.log('Starting Allnight Image Cycle...');
      stopAllnightCycle(); // Clear existing timers

      allnightTimers.push(setTimeout(() => {
          allnightImage.src = 'img/flyer2.jpg';
      }, 100));

      allnightTimers.push(setTimeout(() => {
          allnightImage.src = 'img/bracelets2.jpg';
      }, 1000));

      allnightTimers.push(setTimeout(() => {
          allnightImage.src = 'img/allnight1.jpg';
      }, 1900));

      allnightTimers.push(setTimeout(() => {
          startAllnightImageCycle(); // loop
      }, 2800));
  }

  function stopAllnightCycle() {
      console.log('Stopping Allnight Cycle...');
      allnightTimers.forEach(timer => clearTimeout(timer));
      allnightTimers = [];
      allnightImage.style.transition = 'none';
      allnightImage.src = allnightOriginalImage;
      setTimeout(() => {
          allnightImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
      }, 50);
  }


  // === Sea Image Logic ===
  function startSeaImageCycle() {
    console.log('Starting Sea Image Cycle...');
    stopSeaCycle(); // Clear existing timers

    seaTimers.push(setTimeout(() => {
        seaImage.src = 'img/adv2.png';
    }, 100));

    seaTimers.push(setTimeout(() => {
        seaImage.src = 'img/adv.png';
    }, 1000));

    seaTimers.push(setTimeout(() => {
        startSeaImageCycle(); // loop
    }, 3000));
}

function stopSeaCycle() {
    console.log('Stopping Sea Cycle...');
    seaTimers.forEach(timer => clearTimeout(timer));
    seaTimers = [];
    seaImage.style.transition = 'none';
    seaImage.src = seaOriginalImage;
    setTimeout(() => {
        seaImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
    }, 50);
}

// === Books Image Logic ===
function startBooksImageCycle() {
  console.log('Starting Books Image Cycle...');
  stopBooksCycle(); // Clear existing timers

  booksTimers.push(setTimeout(() => {
      booksImage.src = 'img/verso.jpg';
  }, 100));

  booksTimers.push(setTimeout(() => {
      booksImage.src = 'img/recto.jpg';
  }, 1000));

  booksTimers.push(setTimeout(() => {
      startBooksImageCycle(); // loop
  }, 3000));
}

function stopBooksCycle() {
  console.log('Stopping Books Cycle...');
  booksTimers.forEach(timer => clearTimeout(timer));
  booksTimers = [];
  booksImage.style.transition = 'none';
  booksImage.src = booksOriginalImage;
  setTimeout(() => {
      booksImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
  }, 50);
}

// === Green Image Logic ===
function startGreenImageCycle() {
  console.log('Starting Green Image Cycle...');
  stopGreenCycle(); // Clear existing timers

  greenTimers.push(setTimeout(() => {
      greenImage.src = 'img/grme3.png';
  }, 100));

  greenTimers.push(setTimeout(() => {
      greenImage.src = 'img/grme.png';
  }, 1000));

  greenTimers.push(setTimeout(() => {
      startGreenImageCycle(); // loop
  }, 3000));
}

function stopGreenCycle() {
  console.log('Stopping Green Cycle...');
  greenTimers.forEach(timer => clearTimeout(timer));
  greenTimers = [];
  greenImage.style.transition = 'none';
  greenImage.src = greenOriginalImage;
  setTimeout(() => {
      greenImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
  }, 50);
}

    // === Kaimen Image Logic ===
    function startKaimenImageCycle() {
      console.log('Starting Kaimen Image Cycle...');
      stopKaimenCycle(); // Clear existing timers

      kaimenTimers.push(setTimeout(() => {
          kaimenImage.src = 'img/kaimen1.jpg';
      }, 100));

      kaimenTimers.push(setTimeout(() => {
          kaimenImage.src = 'img/paper1.png';
      }, 1000));

      kaimenTimers.push(setTimeout(() => {
          kaimenImage.src = 'img/paper2.png';
      }, 1900));

      kaimenTimers.push(setTimeout(() => {
          startKaimenImageCycle(); // loop
      }, 2800));
  }

  function stopKaimenCycle() {
      console.log('Stopping Kaimen Cycle...');
      kaimenTimers.forEach(timer => clearTimeout(timer));
      kaimenTimers = [];
      kaimenImage.style.transition = 'none';
      kaimenImage.src = kaimenOriginalImage;
      setTimeout(() => {
          kaimenImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
      }, 50);
  }

  // === Eea Image Logic ===
  function startEeaImageCycle() {
    console.log('Starting Eea Image Cycle...');
    stopEeaCycle(); // Clear existing timers

    eeaTimers.push(setTimeout(() => {
        eeaImage.src = 'img/interface_eea5.jpg';
    }, 100));

    eeaTimers.push(setTimeout(() => {
        eeaImage.src = 'img/interface_eea4.jpg';
    }, 1000));

    eeaTimers.push(setTimeout(() => {
        eeaImage.src = 'img/interface_eea1.png';
    }, 1900));

    eeaTimers.push(setTimeout(() => {
        eeaImage.src = 'img/interface_eea.png';
    }, 2800));

    eeaTimers.push(setTimeout(() => {
        startEeaImageCycle(); // loop
    }, 3700));
}

function stopEeaCycle() {
    console.log('Stopping Eea Cycle...');
    eeaTimers.forEach(timer => clearTimeout(timer));
    eeaTimers = [];
    eeaImage.style.transition = 'none';
    eeaImage.src = eeaOriginalImage;
    setTimeout(() => {
        eeaImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
    }, 50);
}

 // === Stac Image Logic ===
 function startStacImageCycle() {
    console.log('Starting Stac Image Cycle...');
    stopStacCycle(); // Clear existing timers

    stacTimers.push(setTimeout(() => {
        stacImage.src = 'img/interface_stac4.png';
    }, 100));

    stacTimers.push(setTimeout(() => {
        stacImage.src = 'img/interface_stac5.png';
    }, 1000));

    stacTimers.push(setTimeout(() => {
        stacImage.src = 'img/interface_stac6.png';
    }, 1900));

    stacTimers.push(setTimeout(() => {
        stacImage.src = 'img/interface_stac3.png';
    }, 2800));

    stacTimers.push(setTimeout(() => {
        startStacImageCycle(); // loop
    }, 3700));
}

function stopStacCycle() {
    console.log('Stopping Stac Cycle...');
    stacTimers.forEach(timer => clearTimeout(timer));
    stacTimers = [];
    stacImage.style.transition = 'none';
    stacImage.src = stacOriginalImage;
    setTimeout(() => {
        stacImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
    }, 50);
}

// === Hubin Image Logic ===
function startHubinImageCycle() {
    console.log('Starting Hubin Image Cycle...');
    stopHubinCycle(); // Clear existing timers

   

    hubinTimers.push(setTimeout(() => {
        hubinImage.src = 'img/interface_hubin_2.jpg';
    }, 100));

    hubinTimers.push(setTimeout(() => {
        hubinImage.src = 'img/interface_hubin_3.jpg';
    }, 1000));

    hubinTimers.push(setTimeout(() => {
        hubinImage.src = 'img/interface_hubin.png';
    }, 1900));

    hubinTimers.push(setTimeout(() => {
        startHubinImageCycle(); // loop
    }, 2800));
}

function stopHubinCycle() {
    console.log('Stopping Hubin Cycle...');
    hubinTimers.forEach(timer => clearTimeout(timer));
    hubinTimers = [];
    hubinImage.style.transition = 'none';
    hubinImage.src = hubinOriginalImage;
    setTimeout(() => {
        hubinImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
    }, 50);
}

// === Twin Image Logic ===
function startTwinImageCycle() {
    console.log('Starting Twin Image Cycle...');
    stopTwinCycle(); // Clear existing timers

    twinTimers.push(setTimeout(() => {
        twinImage.src = 'img/interface_twinseeds_2.jpg';
    }, 100));

    twinTimers.push(setTimeout(() => {
        twinImage.src = 'img/interface_twinseeds_3.jpg';
    }, 1000));

    twinTimers.push(setTimeout(() => {
        twinImage.src = 'img/interface_twinseeds_4.jpg';
    }, 1900));

    twinTimers.push(setTimeout(() => {
        twinImage.src = 'img/interface_twinseeds.png';
    }, 2800));

    twinTimers.push(setTimeout(() => {
        startTwinImageCycle(); // loop
    }, 3700));
}

function stopTwinCycle() {
    console.log('Stopping Twin Cycle...');
    twinTimers.forEach(timer => clearTimeout(timer));
    twinTimers = [];
    twinImage.style.transition = 'none';
    twinImage.src = twinOriginalImage;
    setTimeout(() => {
        twinImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
    }, 50);
}

// === Coe Image Logic ===
function startCoeImageCycle() {
    console.log('Starting Coe Image Cycle...');
    stopCoeCycle(); // Clear existing timers

    coeTimers.push(setTimeout(() => {
        coeImage.src = 'img/coe_2.jpg';
    }, 100));

    coeTimers.push(setTimeout(() => {
        coeImage.src = 'img/coe_3.jpg';
    }, 1000));

    coeTimers.push(setTimeout(() => {
        coeImage.src = 'img/coe_4.jpg';
    }, 1900));

    coeTimers.push(setTimeout(() => {
        coeImage.src = 'img/coe_1.jpg';
    }, 2800));

    coeTimers.push(setTimeout(() => {
        startCoeImageCycle(); // loop
    }, 3700));
}

function stopCoeCycle() {
    console.log('Stopping Coe Cycle...');
    coeTimers.forEach(timer => clearTimeout(timer));
    coeTimers = [];
    coeImage.style.transition = 'none';
    coeImage.src = coeOriginalImage;
    setTimeout(() => {
        coeImage.style.transition = 'opacity 0.5s ease, visibility 0s ease 0.5s';
    }, 50);
}

  // === Desktop Hover Behavior ===
  if (!isMobile) {
      // biolumi
      biolumiImage.addEventListener('mouseenter', () => {
        biolumiOriginalImage = biolumiImage.src;
        biolumiImage.src = 'img/insectes.png';
        startBiolumiImageCycle(); // <-- correct this line
    });
    
  
  biolumiImage.addEventListener('mouseleave', () => {
    stopBiolumiCycle();
  });
  

      // cosp
      cospImage.addEventListener('mouseenter', () => {
        cospOriginalImage = cospImage.src;
        cospImage.src = 'img/cosp2.png';
        startCospImageCycle();
    });

    cospImage.addEventListener('mouseleave', () => {
        stopCospCycle();
    });

         


      // allnight
      allnightImage.addEventListener('mouseenter', () => {
          allnightOriginalImage = allnightImage.src;
          allnightImage.src = 'img/flyer2.jpg';
          startAllnightImageCycle();
      });

      allnightImage.addEventListener('mouseleave', () => {
          stopAllnightCycle();
      });

       // books
       booksImage.addEventListener('mouseenter', () => {
        booksOriginalImage = booksImage.src;
        booksImage.src = 'img/verso.jpg';
        startBooksImageCycle();
    });

    booksImage.addEventListener('mouseleave', () => {
        stopBooksCycle();
    });

// green
greenImage.addEventListener('mouseenter', () => {
  greenOriginalImage = greenImage.src;
  greenImage.src = 'img/grme3.png';
  startGreenImageCycle();
});

greenImage.addEventListener('mouseleave', () => {
  stopGreenCycle();
});


           // sea
           seaImage.addEventListener('mouseenter', () => {
            seaOriginalImage = seaImage.src;
            seaImage.src = 'img/adv2.png';
            startSeaImageCycle();
        });
  
        seaImage.addEventListener('mouseleave', () => {
            stopSeaCycle();
        });
  

      // kaimen
      kaimenImage.addEventListener('mouseenter', () => {
        kaimenOriginalImage = kaimenImage.src;
        kaimenImage.src = 'img/kaimen1.jpg';
        startKaimenImageCycle();
    });

    kaimenImage.addEventListener('mouseleave', () => {
        stopKaimenCycle();
    });

    // eea
    eeaImage.addEventListener('mouseenter', () => {
        eeaOriginalImage = eeaImage.src;
        eeaImage.src = 'img/interface_eea5.jpg';
        startEeaImageCycle();
    });

    eeaImage.addEventListener('mouseleave', () => {
        stopEeaCycle();
    });

     // stac
     stacImage.addEventListener('mouseenter', () => {
        stacOriginalImage = stacImage.src;
        stacImage.src = 'img/interface_stac3.png';
        startStacImageCycle();
    });

    stacImage.addEventListener('mouseleave', () => {
        stopStacCycle();
    });

    // hubin
    hubinImage.addEventListener('mouseenter', () => {
        hubinOriginalImage = hubinImage.src;
        hubinImage.src = 'img/interface_hubin.png';
        startHubinImageCycle();
    });

    hubinImage.addEventListener('mouseleave', () => {
        stopHubinCycle();
    });

    // twin
    twinImage.addEventListener('mouseenter', () => {
        twinOriginalImage = twinImage.src;
        twinImage.src = 'img/interface_twinseeds.png';
        startTwinImageCycle();
    });

    twinImage.addEventListener('mouseleave', () => {
        stopTwinCycle();
    });

    // coe
    coeImage.addEventListener('mouseenter', () => {
        coeOriginalImage = coeImage.src;
        coeImage.src = 'img/coe_1.jpg';
        startCoeImageCycle();
    });

    coeImage.addEventListener('mouseleave', () => {
        stopCoeCycle();
    });
      
   
  }

  // === Mobile Scroll Behavior (Intersection Observer) ===
  if (isMobile) {
      console.log("Mobile Device Detected: Scroll Activation will be used.");

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
             // Check if the biolumiImage is in view
             if (entry.target === biolumiImage) {
                console.log('Biolumi Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    biolumiOriginalImage = biolumiImage.src;
                    biolumiImage.src = 'img/biolumi.png';
                    startBiolumiImageCycle();
                } else {
                    stopBiolumiCycle();
                }
            }

              // Check if the cospImage is in view
              if (entry.target === cospImage) {
                console.log('Cosp Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    cospOriginalImage = cospImage.src;
                    cospImage.src = 'img/cosp2.png';
                    startCospImageCycle();
                } else {
                    stopCospCycle();
                }
            }
             
              // Check if the allnightImage is in view
              if (entry.target === allnightImage) {
                  console.log('Allnight Image - In View:', entry.isIntersecting);
                  if (entry.isIntersecting) {
                      allnightOriginalImage = allnightImage.src;
                      allnightImage.src = 'img/flyer2.jpg';
                      startAllnightImageCycle();
                  } else {
                      stopAllnightCycle();
                  }
              }

                // Check if the booksImage is in view
                if (entry.target === booksImage) {
                  console.log('Books Image - In View:', entry.isIntersecting);
                  if (entry.isIntersecting) {
                      booksOriginalImage = booksImage.src;
                      booksImage.src = 'img/verso.jpg';
                      startBooksImageCycle();
                  } else {
                      stopBooksCycle();
                  }
              }
  
               // Check if the greenImage is in view
               if (entry.target === greenImage) {
                console.log('Green Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    greenOriginalImage = greenImage.src;
                    greenImage.src = 'img/grme3.png';
                    startGreenImageCycle();
                } else {
                    stopGreenCycle();
                }
            }


               // Check if the seaImage is in view
               if (entry.target === seaImage) {
                console.log('Sea Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    seaOriginalImage = seaImage.src;
                    seaImage.src = 'img/adv2.png';
                    startSeaImageCycle();
                } else {
                    stopSeaCycle();
                }
            }

               // Check if the kaimenImage is in view
               if (entry.target === kaimenImage) {
                console.log('Kaimen Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    kaimenOriginalImage = kaimenImage.src;
                    kaimenImage.src = 'img/kaimen1.jpg';
                    startKaimenImageCycle();
                } else {
                    stopKaimenCycle();
                }
            }

            // Check if the eeaImage is in view
            if (entry.target === eeaImage) {
                console.log('Eea Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    eeaOriginalImage = eeaImage.src;
                    eeaImage.src = 'img/interface_eea5.jpg';
                    startEeaImageCycle();
                } else {
                    stopEeaCycle();
                }
            }

            // Check if the stacImage is in view
            if (entry.target === stacImage) {
                console.log('Stac Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    stacOriginalImage = stacImage.src;
                    stacImage.src = 'img/interface_stac3.png';
                    startStacImageCycle();
                } else {
                    stopStacCycle();
                }
            }

             // Check if the hubinImage is in view
             if (entry.target === hubinImage) {
                console.log('Hubin Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    hubinOriginalImage = hubinImage.src;
                    hubinImage.src = 'img/interface_hubin.png';
                    startHubinImageCycle();
                } else {
                    stopHubinCycle();
                }
            }

             // Check if the twinImage is in view
             if (entry.target === twinImage) {
                console.log('Twin Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    twinOriginalImage = twinImage.src;
                    twinImage.src = 'img/interface_twinseeds.png';
                    startTwinImageCycle();
                } else {
                    stopTwinCycle();
                }
            }

            // Check if the coeImage is in view
            if (entry.target === coeImage) {
                console.log('Coe Image - In View:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    coeOriginalImage = coeImage.src;
                    coeImage.src = 'img/coe_1.jpg';
                    startCoeImageCycle();
                } else {
                    stopCoeCycle();
                }
            }
          });
      }, {
          root: null,
          threshold: 1, // Trigger when 50% of the image is in view
      });

      // Observe both images
      observer.observe(biolumiImage);
      observer.observe(booksImage);
      observer.observe(greenImage);
      observer.observe(seaImage);
      observer.observe(cospImage);
      observer.observe(allnightImage);
      observer.observe(kaimenImage);
      observer.observe(eeaImage);
      observer.observe(stacImage);
      observer.observe(hubinImage);
      observer.observe(twinImage);
      observer.observe(coeImage);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const figures = document.querySelectorAll(".figure");

  // Only run this on mobile (adjust breakpoint as needed)
  if (window.innerWidth <= 768) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-caption");
        } else {
          entry.target.classList.remove("show-caption");
        }
      });
    }, {
      threshold: 0.5 // Adjust if needed
    });

    figures.forEach(figure => {
      observer.observe(figure);
    });
  }
   
    
});

 

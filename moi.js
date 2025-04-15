document.addEventListener('DOMContentLoaded', function () {
  // Detect if the user is on a mobile device based on viewport width
  const isMobile = window.innerWidth <= 800;

  const biolumiImage = document.getElementById('biolumiImage');
  const cospImage = document.getElementById('cospImage');
  const allnightImage = document.getElementById('allnightImage');
  const kaimenImage = document.getElementById('kaimenImage');
  const seaImage = document.getElementById('seaImage');
  const booksImage = document.getElementById('booksImage');
  const greenImage = document.getElementById('greenImage');

  let biolumiHoverTimer = null;
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


  

  // === Biolumi Image Logic ===
  function startBiolumiImageCycle() {
      console.log('Starting Biolumi Image Cycle...');
      clearTimeout(biolumiHoverTimer);
      biolumiHoverTimer = setTimeout(() => {
          biolumiImage.src = 'img/insectes.png';
      }, 1000);
  }

  function stopBiolumiCycle() {
      console.log('Stopping Biolumi Cycle...');
      clearTimeout(biolumiHoverTimer);
      biolumiHoverTimer = null;
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
    }, 1000));

    cospTimers.push(setTimeout(() => {
        cospImage.src = 'img/cosp2.png';
    }, 2000));

    cospTimers.push(setTimeout(() => {
        cospImage.src = 'img/cosp1.png';
    }, 3000));

    cospTimers.push(setTimeout(() => {
        startCospImageCycle(); // loop
    }, 4000));
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
      }, 1000));

      allnightTimers.push(setTimeout(() => {
          allnightImage.src = 'img/bracelets2.jpg';
      }, 2000));

      allnightTimers.push(setTimeout(() => {
          allnightImage.src = 'img/allnight1.jpg';
      }, 3000));

      allnightTimers.push(setTimeout(() => {
          startAllnightImageCycle(); // loop
      }, 4000));
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
    }, 1000));

    seaTimers.push(setTimeout(() => {
        seaImage.src = 'img/adv.png';
    }, 2000));

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
  }, 1000));

  booksTimers.push(setTimeout(() => {
      booksImage.src = 'img/recto.jpg';
  }, 2000));

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
  }, 1000));

  greenTimers.push(setTimeout(() => {
      greenImage.src = 'img/grme.png';
  }, 2000));

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
      }, 1000));

      kaimenTimers.push(setTimeout(() => {
          kaimenImage.src = 'img/paper1.png';
      }, 2000));

      kaimenTimers.push(setTimeout(() => {
          kaimenImage.src = 'img/paper2.png';
      }, 3000));

      kaimenTimers.push(setTimeout(() => {
          startKaimenImageCycle(); // loop
      }, 4000));
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

  // === Desktop Hover Behavior ===
  if (!isMobile) {
      // biolumi
      biolumiImage.addEventListener('mouseenter', () => {
          biolumiOriginalImage = biolumiImage.src;
          biolumiImage.src = 'img/insectes.png';
          startBiolumiImageCycle();
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
                      biolumiImage.src = 'img/insectes.png';
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
          });
      }, {
          root: null,
          threshold: 0.5, // Trigger when 50% of the image is in view
      });

      // Observe both images
      observer.observe(biolumiImage);
      observer.observe(booksImage);
      observer.observe(greenImage);
      observer.observe(seaImage);
      observer.observe(cospImage);
      observer.observe(allnightImage);
      observer.observe(kaimenImage);
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

 
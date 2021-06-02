var bar = new ProgressBar.Line(splash_text, {
    easing: 'easeInOut',
    duration: 1000,
    strokeWidth: 0.2,
    color: '#555',
    trailWidth: 0.2,
    trailColor: '#bbb',
    text: {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '0',
        margin: '-30px 0 0 0',
        transform:'translate(-50%,-50%)',
        'font-size':'1rem',
        color: '#fff',
      },
      autoStyleContainer: false
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});

bar.animate(1.0, function () {
    $("#splash").delay(500).fadeOut(800);
});

particlesJS("particles-js",{
	"particles": {
	  "number": {
		"value": 80,
		"density": {
		  "enable": true,
		  "value_area": 800
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		}
	  },
	  "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 3,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 6,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "repulse"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 400,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  });
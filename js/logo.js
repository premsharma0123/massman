const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let particleArray = [];
let imageData = [];

// mouse
let mouse = {
  x: null,
  y: null,
  radius: 40
};

window.addEventListener("mousemove", (e) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

function drawImage(width, height) {
  let imageWidth = width;
  let imageHeight = height;
  const data = ctx.getImageData(0, 0, imageWidth, imageHeight);

  class Particle {
    constructor(x, y, color, size = 2) {
      this.x = Math.round(x + canvas.width / 2 - imageWidth * 2);
      this.y = Math.round(y + canvas.height / 2 - imageHeight * 2);
      this.color = color;
      this.size = size;

      // Records base and previous positions to repaint the canvas to its original background color
      this.baseX = Math.round(x + canvas.width / 2 - imageWidth * 2);
      this.baseY = Math.round(y + canvas.height / 2 - imageHeight * 2);
      this.previousX = null;
      this.previousY = null;
      this.density = Math.random() * 100 + 2;
    }

    stringifyColor() {
      return `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a}`;
    }

    update() {
      ctx.fillStyle = this.stringifyColor();

      // collision detection
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;

      // max distance, past that the force will be 0
      const maxDistance = 100;
      let force = (maxDistance - distance) / maxDistance;
      if (force < 0) force = 0;

      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;

      this.previousX = this.x;
      this.previousY = this.y;
      if (distance < mouse.radius + this.size) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        // Rounded to one decimal number to as x and y cannot be the same (whole decimal-less integer)
        // as baseX and baseY by decreasing using a random number / 20
        if (Math.round(this.x) !== this.baseX) {
          let dx = this.x - this.baseX;
          this.x -= dx / 20;
        }
        if (Math.round(this.y) !== this.baseY) {
          let dy = this.y - this.baseY;
          this.y -= dy / 20;
        }
      }
    }
  }

  function createParticle(x, y, size) {
    if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
      let positionX = x;
      let positionY = y;
      let offset = y * 4 * data.width + x * 4;
      let color = {
        r: data.data[offset],
        g: data.data[offset + 1],
        b: data.data[offset + 2],
        a: data.data[offset + 3]
      };

      return new Particle(positionX * 4, positionY * 4, color, size);
    }
  }

  // Instead of drawing each Particle one by one, construct an ImageData that can be
  // painted into the canvas at once using putImageData()
  function updateImageDataWith(particle) {
    let x = particle.x;
    let y = particle.y;
    let prevX = particle.previousX;
    let prevY = particle.previousY;
    let size = particle.size;

    if (prevX || prevY) {
      let prevMinY = Math.round(prevY - size);
      let prevMaxY = Math.round(prevY + size);
      let prevMinX = Math.round(prevX - size);
      let prevMaxX = Math.round(prevX + size);

      for (let y = prevMinY; y < prevMaxY; y++) {
        for (let x = prevMinX; x < prevMaxX; x++) {
          if (y < 0 || y > canvasHeight) continue;
          else if (x < 0 || x > canvasWidth) continue;
          else {
            let offset = y * 4 * canvasWidth + x * 4;
            imageData.data[offset] = 255;
            imageData.data[offset + 1] = 255;
            imageData.data[offset + 2] = 255;
            imageData.data[offset + 3] = 255;
          }
        }
      }
    }

    let minY = Math.round(y - size);
    let maxY = Math.round(y + size);
    let minX = Math.round(x - size);
    let maxX = Math.round(x + size);

    for (let y = minY; y < maxY; y++) {
      for (let x = minX; x < maxX; x++) {
        if (y < 0 || y > canvasHeight) continue;
        else if (x < 0 || x > canvasWidth) continue;
        else {
          let offset = y * 4 * canvasWidth + x * 4;
          imageData.data[offset] = particle.color.r;
          imageData.data[offset + 1] = particle.color.g;
          imageData.data[offset + 2] = particle.color.b;
          imageData.data[offset + 3] = particle.color.a;
        }
      }
    }
  }

  function init() {
    particleArray = [];
    imageData = ctx.createImageData(canvasWidth, canvasHeight);
    // Initializing imageData to a blank white "page"
    for (let data = 1; data <= canvasWidth * canvasHeight * 4; data++) {
      imageData.data[data - 1] = data % 4 === 0 ? 255 : 255;
    }

    const size = 2; // Min size is 2
    const step = Math.floor(size / 2);
    for (let y = 0, y2 = data.height; y < y2; y += step) {
      for (let x = 0, x2 = data.width; x < x2; x += step) {
        // If particle's alpha value is too low, don't record it
        if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
          let newParticle = createParticle(x, y, size);
          particleArray.push(newParticle);
          updateImageDataWith(newParticle);
        }
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);

    for (let i = 0; i < particleArray.length; i++) {
      let imageDataCanUpdateKey = `${Math.round(
        particleArray[i].x
      )}${Math.round(particleArray[i].y)}`;
      particleArray[i].update();

      updateImageDataWith(particleArray[i]);
    }
    ctx.putImageData(imageData, 0, 0);
  }

  init();
  animate();

  window.addEventListener("resize", (e) => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    init();
  });
}

const png = new Image();
png.src =
  "data:image/png;base64,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";

window.addEventListener("load", (e) => {
  // Ensuring height of image is always 100px
  let pngWidth = png.width;
  let pngHeight = png.height;

  let divisor = pngHeight / 100;
  let finalWidth = pngWidth / divisor;
  let finalHeight = pngHeight / divisor;

  ctx.drawImage(png, 0, 0, finalWidth, finalHeight);
  drawImage(finalWidth, finalHeight);
});

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player
let player = {
  x: 100,
  y: 100,
  width: 30,
  height: 30,
  color: 'green',
  speed: 3,
  hp: 5
};

// Movement
let keys = {};
document.addEventListener('keydown', (e) => keys[e.key.toLowerCase()] = true);
document.addEventListener('keyup', (e) => keys[e.key.toLowerCase()] = false);

// Bullets
let bullets = [];
document.addEventListener('click', () => {
  bullets.push({
    x: player.x + player.width / 2,
    y: player.y + player.height / 2,
    radius: 5,
    speed: 6
  });
});

// Enemies
let enemies = [
  { x: 500, y: 100, width: 30, height: 30, color: 'red', hp: 3, cooldown: 0 }
];

let enemyBullets = [];

function movePlayer() {
  if (keys['w'] || keys['arrowup']) player.y -= player.speed;
  if (keys['s'] || keys['arrowdown']) player.y += player.speed;
  if (keys['a'] || keys['arrowleft']) player.x -= player.speed;
  if (keys['d'] || keys['arrowright']) player.x += player.speed;
}

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBullets() {
  ctx.fillStyle = 'yellow';
  bullets.forEach((b, i) => {
    b.y -= b.speed;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fill();

    // Remove if off screen
    if (b.y < 0) bullets.splice(i, 1);
  });
}

function drawEnemies() {
  enemies.forEach((e) => {
    ctx.fillStyle = e.color;
    ctx.fillRect(e.x, e.y, e.width, e.height);
  });
}

function checkBulletHits() {
  bullets.forEach((b, i) => {
    enemies.forEach((e, j) => {
      if (
        b.x > e.x && b.x < e.x + e.width &&
        b.y > e.y && b.y < e.y + e.height
      ) {
        bullets.splice(i, 1);
        e.hp--;
        if (e.hp <= 0) enemies.splice(j, 1);
      }
    });
  });
}

function enemyShootLogic() {
  enemies.forEach((e) => {
    e.cooldown--;
    if (e.cooldown <= 0) {
      // Shoot towards player
      let dx = player.x - e.x;
      let dy = player.y - e.y;
      let angle = Math.atan2(dy, dx);
      enemyBullets.push({
        x: e.x + e.width / 2,
        y: e.y + e.height / 2,
        radius: 4,
        speed: 3,
        dx: Math.cos(angle),
        dy: Math.sin(angle)
      });
      e.cooldown = 100; // wait 100 frames before shooting again
    }
  });
}

function drawEnemyBullets() {
  ctx.fillStyle = 'orange';
  enemyBullets.forEach((b, i) => {
    b.x += b.dx * b.speed;
    b.y += b.dy * b.speed;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fill();

    // Collision with player
    if (
      b.x > player.x && b.x < player.x + player.width &&
      b.y > player.y && b.y < player.y + player.height
    ) {
      player.hp--;
      enemyBullets.splice(i, 1);
      if (player.hp <= 0) {
        alert("Game Over 😢");
        location.reload();
      }
    }

    // Remove if off screen
    if (b.x < 0 || b.x > canvas.width || b.y < 0 || b.y > canvas.height) {
      enemyBullets.splice(i, 1);
    }
  });
}

function drawUI() {
  ctx.fillStyle = "white";
  ctx.font = "16px sans-serif";
  ctx.fillText("Player HP: " + player.hp, 10, 20);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  movePlayer();
  drawPlayer();
  drawBullets();
  drawEnemies();
  checkBulletHits();
  enemyShootLogic();
  drawEnemyBullets();
  drawUI();

  requestAnimationFrame(update);
}

update();

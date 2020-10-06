import Container from "../lib/Container";
import Camera from "../lib/Camera";
import Text from "../lib/Text";
import Level from "../entites/Level";
import Squizz from "../entites/Squizz";
import Enemy from "../entites/Enemy";
import entityMath from "../util/entity";
import { clamp } from "../util/math";

class GameScreen extends Container {
  constructor(config = {}) {
    super();
    const { game, controls } = config;
    this.width = game.width;
    this.height = game.height;
    const worldSize = {
      width: this.width * 2,
      height: this.height * 2,
    };
    const level = new Level(worldSize);

    const squizz = new Squizz({
      spawnPosition: {
        x: this.width / 2,
        y: this.height / 2,
      },
      controls,
    });

    const camera = new Camera({
      subject: squizz,
      viewport: {
        width: this.width,
        height: this.height,
      },
      worldSize,
    });

    const enemies = this.addEnemies(level);

    camera.add(level);
    camera.add(squizz);
    camera.add(enemies);

    this.add(camera);

    this.worldSize = worldSize;
    this.level = level;
    this.enemies = enemies;
    this.squizz = squizz;
    this.camera = camera;
  }

  addEnemies(level) {
    const enemies = new Container();

    //vertical enemies
    for (let i = 0; i < 10; i++) {
      enemies.add(
        new Enemy({
          spawnPosition: {
            x: Math.floor(level.width / 10) * i + level.tileWidth,
            y: 0,
          },
          direction: {
            x: 0,
            y: 1,
          },
        })
      );
    }
    //horizontal Enemies
    for (let i = 0; i < 5; i++) {
      enemies.add(
        new Enemy({
          spawnPosition: {
            x: 0,
            y: Math.floor(level.height / 5) * i + level.tileHeight,
          },
          direction: {
            x: 1,
            y: 0,
          },
        })
      );
    }
    return enemies;
  }

  updateEnemies(deltaTime, currentTime) {
    this.enemies.map((enemy) => {
      if (enemy.position.x > this.worldSize.width) enemy.position.x = -32;
      if (enemy.position.y > this.worldSize.height) enemy.position.y = -32;
    });
  }

  checkForCollisions() {
    //keep squizz in bounds
    const {
      bounds: { top, bottom, left, right },
    } = this.level;
    this.squizz.position.x = clamp(this.squizz.position.x, left, right);
    this.squizz.position.y = clamp(this.squizz.position.y, top, bottom);

    //check for collision with enemy
    this.enemies.map((enemy) => {
      if (entityMath.distance(this.squizz, enemy) < 32) {
        this.squizz.isDead = true;
        enemy.isDead = true;
      }
    });

    //check for collision with own trail
    const ground = this.level.checkGround(
      entityMath.centerPosition(this.squizz)
    );
    if (ground === "cleared") {
      this.squizz.isDead = true;
    }
  }

  update(deltaTime, currentTime) {
    super.update(deltaTime, currentTime);
    this.updateEnemies(deltaTime, currentTime);
    this.checkForCollisions();
  }
}

export default GameScreen;

import Base2DScene from "../base-2d-scene"

/**
 * Spiellogik für das Level04.
 */
export default class Level04 extends Base2DScene {
  constructor() {
    super({ key: "level-04" })
  }

  preload() {
    // Load the assets here
    this.load.tilemapTiledJSON(
      "map-level-04",
      "./assets/maps/map-level-04.json",
    )
  }

  create() {
    super.create("map-level-04")
  }
}

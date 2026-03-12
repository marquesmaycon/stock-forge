import type RawMaterial from '#models/raw_material'

export class ProductService {
  static async forgeProduct() {}

  static checkRawMaterialSufficiency(quantity: number, rawMaterials: RawMaterial) {
    const currentQuantity = Number(rawMaterials.quantity)

    const neededPerUnit = Number(rawMaterials.$extras?.pivot_quantity_needed ?? 0)

    if (Number.isNaN(currentQuantity) || Number.isNaN(neededPerUnit)) {
      throw new Error(`Invalid quantity data for raw material ${rawMaterials.name}`)
    }

    const requiredQuantity = neededPerUnit * quantity

    if (currentQuantity < requiredQuantity) {
      throw new Error(`Insufficient quantity for raw material ${rawMaterials.name}`)
    }
  }
}

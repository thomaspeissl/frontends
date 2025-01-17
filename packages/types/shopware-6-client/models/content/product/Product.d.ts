import { ProductMedia } from "./ProductMedia";
import { Tax } from "../../system/tax/Tax";
import { Unit } from "../../system/unit/Unit";
import { ProductReview } from "./ProductReview";
import { ListingPrice } from "../../framework/pricing/ListingPrice";
import { Price } from "../../framework/pricing/Price";
import { CalculatedPrice } from "../../checkout/cart/price/CalculatedPrice";
import { ProductPrice } from "./ProductPrice";
import { PropertyGroup } from "../property/PropertyGroup";
import { DeliveryTime } from "../../checkout/delivery/DeliveryTime";
import { ProductManufacturer } from "./ProductManufacturer";
import { ProductTranslation } from "./ProductTranslation";
import { Category } from "../category/Category";
import { Tag } from "../../system/tag/Tag";
import { CustomFields } from "../../common/CustomField";
import { SeoUrl } from "../navigation/Navigation";
import { CmsPage } from "../cms/CmsPage";
import { PropertyGroupOptionCart } from "../property/PropertyGroupOptionCart";
import { PropertyGroupOption } from "../property/PropertyGroupOption";
import type { Schemas } from "#shopware";

/**
 * @deprecated - use Schema["CrossSellingElementCollection"] instead from import "#shopware"
 */
export type CrossSelling = Schemas["CrossSellingElementCollection"];
// export type CrossSelling = {
//   apiAlias: "cross_selling_element";
//   crossSelling: {
//     name: string;
//     position: number;
//     sortBy: string;
//     sortDirection: string;
//     limit: number;
//     active: boolean;
//     productId: string;
//     product: null | Product;
//     productStreamId: null | string;
//     type: string;
//     assignedProducts: Product[];
//     translations: unknown;
//     _uniqueIdentifier: string;
//     versionId: null | string;
//     translated: unknown;
//     createdAt: Date;
//     updatedAt: Date | string | null;
//     extensions: unknown;
//     id: string;
//     productVersionId: string;
//     apiAlias: string;
//   };
//   products: Product[];
//   streamId: string;
//   total: number;
// };

/**
 * @deprecated - use Schema["Product"] instead from import "#shopware"
 */
export type Product = Schemas["Product"];
// export type Product = {
//   active: boolean;
//   additionalText?: string | null;
//   apiAlias: "product";
//   autoIncrement: number;
//   available: boolean;
//   availableStock: number | null;
//   calculatedCheapestPrice: CalculatedPrice;
//   calculatedListingPrice: ListingPrice | null;
//   calculatedMaxPurchase: number;
//   calculatedPrice: CalculatedPrice;
//   calculatedPrices: CalculatedPrice[];
//   canonicalProduct: any;
//   canonicalProductId: string | null;
//   categories: Category[] | null;
//   categoriesRo: Category[] | null;
//   categoryIds: string[];
//   categoryTree: string[] | null;
//   cheapestPrice: ProductCheapestPrice | null;
//   childCount: number | null;
//   children: Product[] | null;
//   cmsPage: null | CmsPage;
//   cmsPageId: string | null;
//   configuratorSettings: PropertyGroup[] | null;
//   cover: ProductMedia;
//   coverId: string | null;
//   createdAt: Date | string;
//   crossSellings: CrossSelling[] | null;
//   customFields: CustomFields;
//   updatedAt: Date | string | null;
//   deliveryTime: DeliveryTime;
//   deliveryTimeId: string | null;
//   description: string | null;
//   displayGroup: string;
//   downloads: any;
//   ean: string | null;
//   extensions: [];
//   height: number | null;
//   id: string;
//   isCloseout: boolean | null;
//   isNew: boolean;
//   keywords: string | null;
//   length: number | null;
//   listingPrices: ListingPrice[] | null;
//   mainCategories: ProductMainCategories | null;
//   manufacturer: ProductManufacturer | null;
//   manufacturerId: string | null;
//   manufacturerNumber: string | null;
//   markAsTopseller: boolean | null;
//   maxPurchase: number | null;
//   media: ProductMedia[];
//   metaDescription: string | null;
//   metaTitle: string | null;
//   minPurchase: number | null;
//   name: string | null;
//   optionIds?: string[];
//   options: PropertyGroupOption[] | null;
//   packUnit: string | null;
//   packUnitPlural: string | null;
//   parent: Product | null;
//   parentId: string | null;
//   parentVersionId: string | null;
//   price: Price[] | null;
//   prices: ProductPrice[] | null;
//   productManufacturerVersionId: string | null;
//   productNumber: string;
//   productReviews: ProductReview[] | null;
//   properties: PropertyGroupOption[] | null;
//   propertyIds: [] | null;
//   purchasePrice: number | null;
//   purchaseSteps: number | null;
//   purchaseUnit: number | null;
//   ratingAverage: number | null;
//   referenceUnit: number | null;
//   releaseDate: Date | string | null;
//   restockTime: number;
//   sales: number;
//   seoCategory: Category | null;
//   seoUrls: SeoUrl[] | null;
//   shippingFree: boolean | null;
//   sortedProperties: PropertyGroup[] | null;
//   states: string[];
//   stock: number;
//   streamIds: string[] | null;
//   streams: ProductStreams | null;
//   tagIds: [] | null;
//   tags: Tag[] | null;
//   tax: Tax;
//   taxId: string | null;
//   translated: ProductTranslated;
//   translations: ProductTranslation[] | null;
//   unit: Unit | null;
//   unitId: string | null;
//   updatedAt: Date;
//   versionId: string;
//   weight: number | null;
//   width: number | null;
// };

/**
 * @deprecated - use Schema["LineItem"] instead from import "#shopware"
 */
export type CartProductItem = Product & {
  options: PropertyGroupOptionCart[];
};

export type ProductCheapestPrice = {
  apiAlias: "shopware_core_content_product_data_abstraction_layer_cheapest_price_cheapest_price";
  hasRange: boolean;
  parentId: null | string;
  price: Price[];
  purchase: number;
  reference: number;
  ruleId: null | string;
  unitId: null | string;
  variantId: null | string;
};

export type ProductTranslated = {
  name: string | null;
  description: string;
  metaDescription: string | null;
  keywords: string | null;
  metaTitle: string | null;
  customFields: CustomFields;
  packUnit: string | null;
  packUnitPlural: string | null;
};

export type ProductMainCategories = {
  id: string;
  productId: string;
  productVersionId: string | null;
  categoryId: string;
  categoryVersionId: string | null;
  salesChannelId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductStreams = {
  id: string;
  name: string;
  description: string | null;
  customFields: CustomFields;
  createdAt: Date;
  updatedAt: Date;
  translated: unknown;
};

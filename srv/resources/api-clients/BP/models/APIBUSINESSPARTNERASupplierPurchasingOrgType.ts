/* tslint:disable */
/* eslint-disable */
/**
 * Business Partner (A2X)
 *     This service enables you to create, display, update, and delete data related to Business Partner, Supplier, and Customer with the data provided in a payload, in an API call. This service also supports create deep entity operation and batch processing.
 *
 * The version of the OpenAPI document: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { APIBUSINESSPARTNERASupplierPartnerFuncType } from './APIBUSINESSPARTNERASupplierPartnerFuncType';
import {
    APIBUSINESSPARTNERASupplierPartnerFuncTypeFromJSON,
    APIBUSINESSPARTNERASupplierPartnerFuncTypeFromJSONTyped,
    APIBUSINESSPARTNERASupplierPartnerFuncTypeToJSON,
} from './APIBUSINESSPARTNERASupplierPartnerFuncType';
import type { APIBUSINESSPARTNERASupplierPurchasingOrgTextType } from './APIBUSINESSPARTNERASupplierPurchasingOrgTextType';
import {
    APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeFromJSON,
    APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeFromJSONTyped,
    APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeToJSON,
} from './APIBUSINESSPARTNERASupplierPurchasingOrgTextType';
import type { MinimumOrderValue } from './MinimumOrderValue';
import {
    MinimumOrderValueFromJSON,
    MinimumOrderValueFromJSONTyped,
    MinimumOrderValueToJSON,
} from './MinimumOrderValue';
import type { PlannedDelivTime } from './PlannedDelivTime';
import {
    PlannedDelivTimeFromJSON,
    PlannedDelivTimeFromJSONTyped,
    PlannedDelivTimeToJSON,
} from './PlannedDelivTime';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERASupplierPurchasingOrgType
 */
export interface APIBUSINESSPARTNERASupplierPurchasingOrgType {
    /**
     * Supplier's Account Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    supplier?: string;
    /**
     * Purchasing Organization
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    purchasingOrganization?: string;
    /**
     * Automatic evaluated receipt settlement for return items
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    automaticEvaluatedRcptSettlmt?: boolean | null;
    /**
     * Group for Calculation Schema (Supplier)
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    calculationSchemaGroupCode?: string | null;
    /**
     * Deletion Indicator for Supplier at Purchasing Level
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    deletionIndicator?: boolean | null;
    /**
     * Evaluated Receipt Settlement (ERS)
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    evaldReceiptSettlementIsActive?: boolean | null;
    /**
     * Incoterms (Part 1)
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    incotermsClassification?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    incotermsTransferLocation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    incotermsVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    incotermsLocation1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    incotermsLocation2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    incotermsSupChnLoc1AddlUUID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    incotermsSupChnLoc2AddlUUID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    incotermsSupChnDvtgLocAddlUUID?: string | null;
    /**
     * Mode of Transport at the Border (Intrastat)
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    intrastatCrsBorderTrMode?: string | null;
    /**
     * Indicator: GR-Based Invoice Verification
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    invoiceIsGoodsReceiptBased?: boolean | null;
    /**
     * Indicator for Service-Based Invoice Verification
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    invoiceIsMMServiceEntryBased?: boolean | null;
    /**
     * 
     * @type {PlannedDelivTime}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    materialPlannedDeliveryDurn?: PlannedDelivTime | null;
    /**
     * 
     * @type {MinimumOrderValue}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    minimumOrderAmount?: MinimumOrderValue | null;
    /**
     * Key for Terms of Payment
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    paymentTerms?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    planningCycle?: string | null;
    /**
     * Price Determination (Pricing) Date Control
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    pricingDateControl?: string | null;
    /**
     * Profile for transferring material data via IDoc PROACT
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    prodStockAndSlsDataTransfPrfl?: string | null;
    /**
     * Unit of Measure Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    productUnitGroup?: string | null;
    /**
     * Automatic Generation of Purchase Order Allowed
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    purOrdAutoGenerationIsAllowed?: boolean | null;
    /**
     * Purchase order currency
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    purchaseOrderCurrency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    purchasingGroup?: string | null;
    /**
     * Purchasing block at purchasing organization level
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    purchasingIsBlockedForSupplier?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    roundingProfile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    shippingCondition?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    suplrDiscountInKindIsGranted?: boolean | null;
    /**
     * Revaluation allowed
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    suplrInvcRevalIsAllowed?: boolean | null;
    /**
     * Indicator: Relevant for Settlement Management
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    suplrIsRlvtForSettlmtMgmt?: boolean | null;
    /**
     * Indicator: "relev. to price determination (vend. hierarchy)
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    suplrPurgOrgIsRlvtForPriceDetn?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    supplierABCClassificationCode?: string | null;
    /**
     * Our account number with the supplier
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    supplierAccountNumber?: string | null;
    /**
     * Indicates whether supplier is returns supplier
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    supplierIsReturnsSupplier?: boolean | null;
    /**
     * Supplier's Telephone Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    supplierPhoneNumber?: string | null;
    /**
     * Responsible Salesperson at Supplier's Office
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    supplierRespSalesPersonName?: string | null;
    /**
     * Confirmation Control Key
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    supplierConfirmationControlKey?: string | null;
    /**
     * Order Acknowledgment Requirement
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    isOrderAcknRqd?: boolean | null;
    /**
     * Authorization Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    authorizationGroup?: string | null;
    /**
     * Supplier Account Group
     * @type {string}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    supplierAccountGroup?: string | null;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERASupplierPartnerFuncType>}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    toPartnerFunction?: Array<APIBUSINESSPARTNERASupplierPartnerFuncType>;
    /**
     * 
     * @type {Array<APIBUSINESSPARTNERASupplierPurchasingOrgTextType>}
     * @memberof APIBUSINESSPARTNERASupplierPurchasingOrgType
     */
    toPurchasingOrgText?: Array<APIBUSINESSPARTNERASupplierPurchasingOrgTextType>;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERASupplierPurchasingOrgType interface.
 */
export function instanceOfAPIBUSINESSPARTNERASupplierPurchasingOrgType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function APIBUSINESSPARTNERASupplierPurchasingOrgTypeFromJSON(json: any): APIBUSINESSPARTNERASupplierPurchasingOrgType {
    return APIBUSINESSPARTNERASupplierPurchasingOrgTypeFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERASupplierPurchasingOrgTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERASupplierPurchasingOrgType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'supplier': !exists(json, 'Supplier') ? undefined : json['Supplier'],
        'purchasingOrganization': !exists(json, 'PurchasingOrganization') ? undefined : json['PurchasingOrganization'],
        'automaticEvaluatedRcptSettlmt': !exists(json, 'AutomaticEvaluatedRcptSettlmt') ? undefined : json['AutomaticEvaluatedRcptSettlmt'],
        'calculationSchemaGroupCode': !exists(json, 'CalculationSchemaGroupCode') ? undefined : json['CalculationSchemaGroupCode'],
        'deletionIndicator': !exists(json, 'DeletionIndicator') ? undefined : json['DeletionIndicator'],
        'evaldReceiptSettlementIsActive': !exists(json, 'EvaldReceiptSettlementIsActive') ? undefined : json['EvaldReceiptSettlementIsActive'],
        'incotermsClassification': !exists(json, 'IncotermsClassification') ? undefined : json['IncotermsClassification'],
        'incotermsTransferLocation': !exists(json, 'IncotermsTransferLocation') ? undefined : json['IncotermsTransferLocation'],
        'incotermsVersion': !exists(json, 'IncotermsVersion') ? undefined : json['IncotermsVersion'],
        'incotermsLocation1': !exists(json, 'IncotermsLocation1') ? undefined : json['IncotermsLocation1'],
        'incotermsLocation2': !exists(json, 'IncotermsLocation2') ? undefined : json['IncotermsLocation2'],
        'incotermsSupChnLoc1AddlUUID': !exists(json, 'IncotermsSupChnLoc1AddlUUID') ? undefined : json['IncotermsSupChnLoc1AddlUUID'],
        'incotermsSupChnLoc2AddlUUID': !exists(json, 'IncotermsSupChnLoc2AddlUUID') ? undefined : json['IncotermsSupChnLoc2AddlUUID'],
        'incotermsSupChnDvtgLocAddlUUID': !exists(json, 'IncotermsSupChnDvtgLocAddlUUID') ? undefined : json['IncotermsSupChnDvtgLocAddlUUID'],
        'intrastatCrsBorderTrMode': !exists(json, 'IntrastatCrsBorderTrMode') ? undefined : json['IntrastatCrsBorderTrMode'],
        'invoiceIsGoodsReceiptBased': !exists(json, 'InvoiceIsGoodsReceiptBased') ? undefined : json['InvoiceIsGoodsReceiptBased'],
        'invoiceIsMMServiceEntryBased': !exists(json, 'InvoiceIsMMServiceEntryBased') ? undefined : json['InvoiceIsMMServiceEntryBased'],
        'materialPlannedDeliveryDurn': !exists(json, 'MaterialPlannedDeliveryDurn') ? undefined : PlannedDelivTimeFromJSON(json['MaterialPlannedDeliveryDurn']),
        'minimumOrderAmount': !exists(json, 'MinimumOrderAmount') ? undefined : MinimumOrderValueFromJSON(json['MinimumOrderAmount']),
        'paymentTerms': !exists(json, 'PaymentTerms') ? undefined : json['PaymentTerms'],
        'planningCycle': !exists(json, 'PlanningCycle') ? undefined : json['PlanningCycle'],
        'pricingDateControl': !exists(json, 'PricingDateControl') ? undefined : json['PricingDateControl'],
        'prodStockAndSlsDataTransfPrfl': !exists(json, 'ProdStockAndSlsDataTransfPrfl') ? undefined : json['ProdStockAndSlsDataTransfPrfl'],
        'productUnitGroup': !exists(json, 'ProductUnitGroup') ? undefined : json['ProductUnitGroup'],
        'purOrdAutoGenerationIsAllowed': !exists(json, 'PurOrdAutoGenerationIsAllowed') ? undefined : json['PurOrdAutoGenerationIsAllowed'],
        'purchaseOrderCurrency': !exists(json, 'PurchaseOrderCurrency') ? undefined : json['PurchaseOrderCurrency'],
        'purchasingGroup': !exists(json, 'PurchasingGroup') ? undefined : json['PurchasingGroup'],
        'purchasingIsBlockedForSupplier': !exists(json, 'PurchasingIsBlockedForSupplier') ? undefined : json['PurchasingIsBlockedForSupplier'],
        'roundingProfile': !exists(json, 'RoundingProfile') ? undefined : json['RoundingProfile'],
        'shippingCondition': !exists(json, 'ShippingCondition') ? undefined : json['ShippingCondition'],
        'suplrDiscountInKindIsGranted': !exists(json, 'SuplrDiscountInKindIsGranted') ? undefined : json['SuplrDiscountInKindIsGranted'],
        'suplrInvcRevalIsAllowed': !exists(json, 'SuplrInvcRevalIsAllowed') ? undefined : json['SuplrInvcRevalIsAllowed'],
        'suplrIsRlvtForSettlmtMgmt': !exists(json, 'SuplrIsRlvtForSettlmtMgmt') ? undefined : json['SuplrIsRlvtForSettlmtMgmt'],
        'suplrPurgOrgIsRlvtForPriceDetn': !exists(json, 'SuplrPurgOrgIsRlvtForPriceDetn') ? undefined : json['SuplrPurgOrgIsRlvtForPriceDetn'],
        'supplierABCClassificationCode': !exists(json, 'SupplierABCClassificationCode') ? undefined : json['SupplierABCClassificationCode'],
        'supplierAccountNumber': !exists(json, 'SupplierAccountNumber') ? undefined : json['SupplierAccountNumber'],
        'supplierIsReturnsSupplier': !exists(json, 'SupplierIsReturnsSupplier') ? undefined : json['SupplierIsReturnsSupplier'],
        'supplierPhoneNumber': !exists(json, 'SupplierPhoneNumber') ? undefined : json['SupplierPhoneNumber'],
        'supplierRespSalesPersonName': !exists(json, 'SupplierRespSalesPersonName') ? undefined : json['SupplierRespSalesPersonName'],
        'supplierConfirmationControlKey': !exists(json, 'SupplierConfirmationControlKey') ? undefined : json['SupplierConfirmationControlKey'],
        'isOrderAcknRqd': !exists(json, 'IsOrderAcknRqd') ? undefined : json['IsOrderAcknRqd'],
        'authorizationGroup': !exists(json, 'AuthorizationGroup') ? undefined : json['AuthorizationGroup'],
        'supplierAccountGroup': !exists(json, 'SupplierAccountGroup') ? undefined : json['SupplierAccountGroup'],
        'toPartnerFunction': !exists(json, 'to_PartnerFunction') ? undefined : ((json['to_PartnerFunction'] as Array<any>).map(APIBUSINESSPARTNERASupplierPartnerFuncTypeFromJSON)),
        'toPurchasingOrgText': !exists(json, 'to_PurchasingOrgText') ? undefined : ((json['to_PurchasingOrgText'] as Array<any>).map(APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeFromJSON)),
    };
}

export function APIBUSINESSPARTNERASupplierPurchasingOrgTypeToJSON(value?: APIBUSINESSPARTNERASupplierPurchasingOrgType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Supplier': value.supplier,
        'PurchasingOrganization': value.purchasingOrganization,
        'AutomaticEvaluatedRcptSettlmt': value.automaticEvaluatedRcptSettlmt,
        'CalculationSchemaGroupCode': value.calculationSchemaGroupCode,
        'DeletionIndicator': value.deletionIndicator,
        'EvaldReceiptSettlementIsActive': value.evaldReceiptSettlementIsActive,
        'IncotermsClassification': value.incotermsClassification,
        'IncotermsTransferLocation': value.incotermsTransferLocation,
        'IncotermsVersion': value.incotermsVersion,
        'IncotermsLocation1': value.incotermsLocation1,
        'IncotermsLocation2': value.incotermsLocation2,
        'IncotermsSupChnLoc1AddlUUID': value.incotermsSupChnLoc1AddlUUID,
        'IncotermsSupChnLoc2AddlUUID': value.incotermsSupChnLoc2AddlUUID,
        'IncotermsSupChnDvtgLocAddlUUID': value.incotermsSupChnDvtgLocAddlUUID,
        'IntrastatCrsBorderTrMode': value.intrastatCrsBorderTrMode,
        'InvoiceIsGoodsReceiptBased': value.invoiceIsGoodsReceiptBased,
        'InvoiceIsMMServiceEntryBased': value.invoiceIsMMServiceEntryBased,
        'MaterialPlannedDeliveryDurn': PlannedDelivTimeToJSON(value.materialPlannedDeliveryDurn),
        'MinimumOrderAmount': MinimumOrderValueToJSON(value.minimumOrderAmount),
        'PaymentTerms': value.paymentTerms,
        'PlanningCycle': value.planningCycle,
        'PricingDateControl': value.pricingDateControl,
        'ProdStockAndSlsDataTransfPrfl': value.prodStockAndSlsDataTransfPrfl,
        'ProductUnitGroup': value.productUnitGroup,
        'PurOrdAutoGenerationIsAllowed': value.purOrdAutoGenerationIsAllowed,
        'PurchaseOrderCurrency': value.purchaseOrderCurrency,
        'PurchasingGroup': value.purchasingGroup,
        'PurchasingIsBlockedForSupplier': value.purchasingIsBlockedForSupplier,
        'RoundingProfile': value.roundingProfile,
        'ShippingCondition': value.shippingCondition,
        'SuplrDiscountInKindIsGranted': value.suplrDiscountInKindIsGranted,
        'SuplrInvcRevalIsAllowed': value.suplrInvcRevalIsAllowed,
        'SuplrIsRlvtForSettlmtMgmt': value.suplrIsRlvtForSettlmtMgmt,
        'SuplrPurgOrgIsRlvtForPriceDetn': value.suplrPurgOrgIsRlvtForPriceDetn,
        'SupplierABCClassificationCode': value.supplierABCClassificationCode,
        'SupplierAccountNumber': value.supplierAccountNumber,
        'SupplierIsReturnsSupplier': value.supplierIsReturnsSupplier,
        'SupplierPhoneNumber': value.supplierPhoneNumber,
        'SupplierRespSalesPersonName': value.supplierRespSalesPersonName,
        'SupplierConfirmationControlKey': value.supplierConfirmationControlKey,
        'IsOrderAcknRqd': value.isOrderAcknRqd,
        'AuthorizationGroup': value.authorizationGroup,
        'SupplierAccountGroup': value.supplierAccountGroup,
        'to_PartnerFunction': value.toPartnerFunction === undefined ? undefined : ((value.toPartnerFunction as Array<any>).map(APIBUSINESSPARTNERASupplierPartnerFuncTypeToJSON)),
        'to_PurchasingOrgText': value.toPurchasingOrgText === undefined ? undefined : ((value.toPurchasingOrgText as Array<any>).map(APIBUSINESSPARTNERASupplierPurchasingOrgTextTypeToJSON)),
    };
}


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
import type { AnnualNetIncome } from './AnnualNetIncome';
import {
    AnnualNetIncomeFromJSON,
    AnnualNetIncomeFromJSONTyped,
    AnnualNetIncomeToJSON,
} from './AnnualNetIncome';
import type { AnnualSales } from './AnnualSales';
import {
    AnnualSalesFromJSON,
    AnnualSalesFromJSONTyped,
    AnnualSalesToJSON,
} from './AnnualSales';
import type { BalanceSheetTotal } from './BalanceSheetTotal';
import {
    BalanceSheetTotalFromJSON,
    BalanceSheetTotalFromJSONTyped,
    BalanceSheetTotalToJSON,
} from './BalanceSheetTotal';
import type { CapitalReserve } from './CapitalReserve';
import {
    CapitalReserveFromJSON,
    CapitalReserveFromJSONTyped,
    CapitalReserveToJSON,
} from './CapitalReserve';
import type { CapitalStock } from './CapitalStock';
import {
    CapitalStockFromJSON,
    CapitalStockFromJSONTyped,
    CapitalStockToJSON,
} from './CapitalStock';
import type { DebtClearancePer } from './DebtClearancePer';
import {
    DebtClearancePerFromJSON,
    DebtClearancePerFromJSONTyped,
    DebtClearancePerToJSON,
} from './DebtClearancePer';
import type { DebtRatio } from './DebtRatio';
import {
    DebtRatioFromJSON,
    DebtRatioFromJSONTyped,
    DebtRatioToJSON,
} from './DebtRatio';
import type { Dividend } from './Dividend';
import {
    DividendFromJSON,
    DividendFromJSONTyped,
    DividendToJSON,
} from './Dividend';
import type { EquityCapital } from './EquityCapital';
import {
    EquityCapitalFromJSON,
    EquityCapitalFromJSONTyped,
    EquityCapitalToJSON,
} from './EquityCapital';
import type { EquityRatio } from './EquityRatio';
import {
    EquityRatioFromJSON,
    EquityRatioFromJSONTyped,
    EquityRatioToJSON,
} from './EquityRatio';
import type { FinancingCoeff } from './FinancingCoeff';
import {
    FinancingCoeffFromJSON,
    FinancingCoeffFromJSONTyped,
    FinancingCoeffToJSON,
} from './FinancingCoeff';
import type { GrossPremium } from './GrossPremium';
import {
    GrossPremiumFromJSON,
    GrossPremiumFromJSONTyped,
    GrossPremiumToJSON,
} from './GrossPremium';
import type { IssuedStockCapital } from './IssuedStockCapital';
import {
    IssuedStockCapitalFromJSON,
    IssuedStockCapitalFromJSONTyped,
    IssuedStockCapitalToJSON,
} from './IssuedStockCapital';
import type { LegalRevenueRes } from './LegalRevenueRes';
import {
    LegalRevenueResFromJSON,
    LegalRevenueResFromJSONTyped,
    LegalRevenueResToJSON,
} from './LegalRevenueRes';
import type { NetPremium } from './NetPremium';
import {
    NetPremiumFromJSON,
    NetPremiumFromJSONTyped,
    NetPremiumToJSON,
} from './NetPremium';
import type { OtherRevenueRes } from './OtherRevenueRes';
import {
    OtherRevenueResFromJSON,
    OtherRevenueResFromJSONTyped,
    OtherRevenueResToJSON,
} from './OtherRevenueRes';
import type { PLCarriedFwd } from './PLCarriedFwd';
import {
    PLCarriedFwdFromJSON,
    PLCarriedFwdFromJSONTyped,
    PLCarriedFwdToJSON,
} from './PLCarriedFwd';
import type { PartCertsOutstand } from './PartCertsOutstand';
import {
    PartCertsOutstandFromJSON,
    PartCertsOutstandFromJSONTyped,
    PartCertsOutstandToJSON,
} from './PartCertsOutstand';
import type { ReportedProfit } from './ReportedProfit';
import {
    ReportedProfitFromJSON,
    ReportedProfitFromJSONTyped,
    ReportedProfitToJSON,
} from './ReportedProfit';
import type { ReturnOnTotCap } from './ReturnOnTotCap';
import {
    ReturnOnTotCapFromJSON,
    ReturnOnTotCapFromJSONTyped,
    ReturnOnTotCapToJSON,
} from './ReturnOnTotCap';
import type { RevReservesOwnSt } from './RevReservesOwnSt';
import {
    RevReservesOwnStFromJSON,
    RevReservesOwnStFromJSONTyped,
    RevReservesOwnStToJSON,
} from './RevReservesOwnSt';
import type { StatutoryReserve } from './StatutoryReserve';
import {
    StatutoryReserveFromJSON,
    StatutoryReserveFromJSONTyped,
    StatutoryReserveToJSON,
} from './StatutoryReserve';
import type { SubordLiabilities } from './SubordLiabilities';
import {
    SubordLiabilitiesFromJSON,
    SubordLiabilitiesFromJSONTyped,
    SubordLiabilitiesToJSON,
} from './SubordLiabilities';

/**
 * 
 * @export
 * @interface APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
 */
export interface APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate {
    /**
     * Business Partner Number
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    businessPartner: string;
    /**
     * 
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    businessPartnerFiscalYear: string;
    /**
     * Balance Sheet Currency
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPBalanceSheetCurrency?: string | null;
    /**
     * Date of Annual Stockholders Meeting
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPAnnualStockholderMeetingDate?: Date | null;
    /**
     * Fiscal Year Start Date
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPFiscalYearStartDate?: Date | null;
    /**
     * Fiscal Year End Date
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPFiscalYearEndDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPFiscalYearIsClosed?: boolean | null;
    /**
     * Year-End Closing Date for Fiscal Year
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPFiscalYearClosingDate?: Date | null;
    /**
     * Date of Consolidated Financial Statements of Group Company
     * @type {Date}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPFsclYrCnsldtdFinStatementDte?: Date | null;
    /**
     * 
     * @type {CapitalStock}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPCapitalStockAmtInBalShtCrcy?: CapitalStock | null;
    /**
     * 
     * @type {IssuedStockCapital}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPIssdStockCptlAmtInBalShtCrcy?: IssuedStockCapital | null;
    /**
     * 
     * @type {PartCertsOutstand}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPPartcipnCertAmtInBalShtCrcy?: PartCertsOutstand | null;
    /**
     * 
     * @type {EquityCapital}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPEquityCapitalAmtInBalShtCrcy?: EquityCapital | null;
    /**
     * 
     * @type {GrossPremium}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPGrossPremiumAmtInBalShtCrcy?: GrossPremium | null;
    /**
     * 
     * @type {NetPremium}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPNetPremiumAmtInBalShtCrcy?: NetPremium | null;
    /**
     * 
     * @type {AnnualSales}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPAnnualSalesAmtInBalShtCrcy?: AnnualSales | null;
    /**
     * 
     * @type {AnnualNetIncome}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPAnnualNetIncAmtInBalShtCrcy?: AnnualNetIncome | null;
    /**
     * 
     * @type {Dividend}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPDividendDistrAmtInBalShtCrcy?: Dividend | null;
    /**
     * 
     * @type {DebtRatio}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPDebtRatioInYears?: DebtRatio | null;
    /**
     * 
     * @type {ReportedProfit}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPAnnualPnLAmtInBalShtCrcy?: ReportedProfit | null;
    /**
     * 
     * @type {BalanceSheetTotal}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPBalSheetTotalAmtInBalShtCrcy?: BalanceSheetTotal | null;
    /**
     * Number of Employees in Company
     * @type {string}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPNumberOfEmployees?: string | null;
    /**
     * 
     * @type {CapitalReserve}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPCptlReserveAmtInBalShtCrcy?: CapitalReserve | null;
    /**
     * 
     * @type {LegalRevenueRes}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPLglRevnRsrvAmtInBalShtCrcy?: LegalRevenueRes | null;
    /**
     * 
     * @type {RevReservesOwnSt}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    revnRsrvOwnStkAmtInBalShtCrcy?: RevReservesOwnSt | null;
    /**
     * 
     * @type {StatutoryReserve}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPStatryReserveAmtInBalShtCrcy?: StatutoryReserve | null;
    /**
     * 
     * @type {OtherRevenueRes}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPOthRevnRsrvAmtInBalShtCrcy?: OtherRevenueRes | null;
    /**
     * 
     * @type {PLCarriedFwd}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPPnLCarryfwdAmtInBalShtCrcy?: PLCarriedFwd | null;
    /**
     * 
     * @type {SubordLiabilities}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPSuborddLbltyAmtInBalShtCrcy?: SubordLiabilities | null;
    /**
     * 
     * @type {ReturnOnTotCap}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPRetOnTotalCptlEmpldInPercent?: ReturnOnTotCap | null;
    /**
     * 
     * @type {DebtClearancePer}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPDebtClearancePeriodInYears?: DebtClearancePer | null;
    /**
     * 
     * @type {FinancingCoeff}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPFinancingCoeffInPercent?: FinancingCoeff | null;
    /**
     * 
     * @type {EquityRatio}
     * @memberof APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate
     */
    bPEquityRatioInPercent?: EquityRatio | null;
}

/**
 * Check if a given object implements the APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate interface.
 */
export function instanceOfAPIBUSINESSPARTNERABPFiscalYearInformationTypeCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "businessPartner" in value;
    isInstance = isInstance && "businessPartnerFiscalYear" in value;

    return isInstance;
}

export function APIBUSINESSPARTNERABPFiscalYearInformationTypeCreateFromJSON(json: any): APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate {
    return APIBUSINESSPARTNERABPFiscalYearInformationTypeCreateFromJSONTyped(json, false);
}

export function APIBUSINESSPARTNERABPFiscalYearInformationTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessPartner': json['BusinessPartner'],
        'businessPartnerFiscalYear': json['BusinessPartnerFiscalYear'],
        'bPBalanceSheetCurrency': !exists(json, 'BPBalanceSheetCurrency') ? undefined : json['BPBalanceSheetCurrency'],
        'bPAnnualStockholderMeetingDate': !exists(json, 'BPAnnualStockholderMeetingDate') ? undefined : (json['BPAnnualStockholderMeetingDate'] === null ? null : new Date(json['BPAnnualStockholderMeetingDate'])),
        'bPFiscalYearStartDate': !exists(json, 'BPFiscalYearStartDate') ? undefined : (json['BPFiscalYearStartDate'] === null ? null : new Date(json['BPFiscalYearStartDate'])),
        'bPFiscalYearEndDate': !exists(json, 'BPFiscalYearEndDate') ? undefined : (json['BPFiscalYearEndDate'] === null ? null : new Date(json['BPFiscalYearEndDate'])),
        'bPFiscalYearIsClosed': !exists(json, 'BPFiscalYearIsClosed') ? undefined : json['BPFiscalYearIsClosed'],
        'bPFiscalYearClosingDate': !exists(json, 'BPFiscalYearClosingDate') ? undefined : (json['BPFiscalYearClosingDate'] === null ? null : new Date(json['BPFiscalYearClosingDate'])),
        'bPFsclYrCnsldtdFinStatementDte': !exists(json, 'BPFsclYrCnsldtdFinStatementDte') ? undefined : (json['BPFsclYrCnsldtdFinStatementDte'] === null ? null : new Date(json['BPFsclYrCnsldtdFinStatementDte'])),
        'bPCapitalStockAmtInBalShtCrcy': !exists(json, 'BPCapitalStockAmtInBalShtCrcy') ? undefined : CapitalStockFromJSON(json['BPCapitalStockAmtInBalShtCrcy']),
        'bPIssdStockCptlAmtInBalShtCrcy': !exists(json, 'BPIssdStockCptlAmtInBalShtCrcy') ? undefined : IssuedStockCapitalFromJSON(json['BPIssdStockCptlAmtInBalShtCrcy']),
        'bPPartcipnCertAmtInBalShtCrcy': !exists(json, 'BPPartcipnCertAmtInBalShtCrcy') ? undefined : PartCertsOutstandFromJSON(json['BPPartcipnCertAmtInBalShtCrcy']),
        'bPEquityCapitalAmtInBalShtCrcy': !exists(json, 'BPEquityCapitalAmtInBalShtCrcy') ? undefined : EquityCapitalFromJSON(json['BPEquityCapitalAmtInBalShtCrcy']),
        'bPGrossPremiumAmtInBalShtCrcy': !exists(json, 'BPGrossPremiumAmtInBalShtCrcy') ? undefined : GrossPremiumFromJSON(json['BPGrossPremiumAmtInBalShtCrcy']),
        'bPNetPremiumAmtInBalShtCrcy': !exists(json, 'BPNetPremiumAmtInBalShtCrcy') ? undefined : NetPremiumFromJSON(json['BPNetPremiumAmtInBalShtCrcy']),
        'bPAnnualSalesAmtInBalShtCrcy': !exists(json, 'BPAnnualSalesAmtInBalShtCrcy') ? undefined : AnnualSalesFromJSON(json['BPAnnualSalesAmtInBalShtCrcy']),
        'bPAnnualNetIncAmtInBalShtCrcy': !exists(json, 'BPAnnualNetIncAmtInBalShtCrcy') ? undefined : AnnualNetIncomeFromJSON(json['BPAnnualNetIncAmtInBalShtCrcy']),
        'bPDividendDistrAmtInBalShtCrcy': !exists(json, 'BPDividendDistrAmtInBalShtCrcy') ? undefined : DividendFromJSON(json['BPDividendDistrAmtInBalShtCrcy']),
        'bPDebtRatioInYears': !exists(json, 'BPDebtRatioInYears') ? undefined : DebtRatioFromJSON(json['BPDebtRatioInYears']),
        'bPAnnualPnLAmtInBalShtCrcy': !exists(json, 'BPAnnualPnLAmtInBalShtCrcy') ? undefined : ReportedProfitFromJSON(json['BPAnnualPnLAmtInBalShtCrcy']),
        'bPBalSheetTotalAmtInBalShtCrcy': !exists(json, 'BPBalSheetTotalAmtInBalShtCrcy') ? undefined : BalanceSheetTotalFromJSON(json['BPBalSheetTotalAmtInBalShtCrcy']),
        'bPNumberOfEmployees': !exists(json, 'BPNumberOfEmployees') ? undefined : json['BPNumberOfEmployees'],
        'bPCptlReserveAmtInBalShtCrcy': !exists(json, 'BPCptlReserveAmtInBalShtCrcy') ? undefined : CapitalReserveFromJSON(json['BPCptlReserveAmtInBalShtCrcy']),
        'bPLglRevnRsrvAmtInBalShtCrcy': !exists(json, 'BPLglRevnRsrvAmtInBalShtCrcy') ? undefined : LegalRevenueResFromJSON(json['BPLglRevnRsrvAmtInBalShtCrcy']),
        'revnRsrvOwnStkAmtInBalShtCrcy': !exists(json, 'RevnRsrvOwnStkAmtInBalShtCrcy') ? undefined : RevReservesOwnStFromJSON(json['RevnRsrvOwnStkAmtInBalShtCrcy']),
        'bPStatryReserveAmtInBalShtCrcy': !exists(json, 'BPStatryReserveAmtInBalShtCrcy') ? undefined : StatutoryReserveFromJSON(json['BPStatryReserveAmtInBalShtCrcy']),
        'bPOthRevnRsrvAmtInBalShtCrcy': !exists(json, 'BPOthRevnRsrvAmtInBalShtCrcy') ? undefined : OtherRevenueResFromJSON(json['BPOthRevnRsrvAmtInBalShtCrcy']),
        'bPPnLCarryfwdAmtInBalShtCrcy': !exists(json, 'BPPnLCarryfwdAmtInBalShtCrcy') ? undefined : PLCarriedFwdFromJSON(json['BPPnLCarryfwdAmtInBalShtCrcy']),
        'bPSuborddLbltyAmtInBalShtCrcy': !exists(json, 'BPSuborddLbltyAmtInBalShtCrcy') ? undefined : SubordLiabilitiesFromJSON(json['BPSuborddLbltyAmtInBalShtCrcy']),
        'bPRetOnTotalCptlEmpldInPercent': !exists(json, 'BPRetOnTotalCptlEmpldInPercent') ? undefined : ReturnOnTotCapFromJSON(json['BPRetOnTotalCptlEmpldInPercent']),
        'bPDebtClearancePeriodInYears': !exists(json, 'BPDebtClearancePeriodInYears') ? undefined : DebtClearancePerFromJSON(json['BPDebtClearancePeriodInYears']),
        'bPFinancingCoeffInPercent': !exists(json, 'BPFinancingCoeffInPercent') ? undefined : FinancingCoeffFromJSON(json['BPFinancingCoeffInPercent']),
        'bPEquityRatioInPercent': !exists(json, 'BPEquityRatioInPercent') ? undefined : EquityRatioFromJSON(json['BPEquityRatioInPercent']),
    };
}

export function APIBUSINESSPARTNERABPFiscalYearInformationTypeCreateToJSON(value?: APIBUSINESSPARTNERABPFiscalYearInformationTypeCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BusinessPartner': value.businessPartner,
        'BusinessPartnerFiscalYear': value.businessPartnerFiscalYear,
        'BPBalanceSheetCurrency': value.bPBalanceSheetCurrency,
        'BPAnnualStockholderMeetingDate': value.bPAnnualStockholderMeetingDate === undefined ? undefined : (value.bPAnnualStockholderMeetingDate === null ? null : value.bPAnnualStockholderMeetingDate.toISOString().substring(0,10)),
        'BPFiscalYearStartDate': value.bPFiscalYearStartDate === undefined ? undefined : (value.bPFiscalYearStartDate === null ? null : value.bPFiscalYearStartDate.toISOString().substring(0,10)),
        'BPFiscalYearEndDate': value.bPFiscalYearEndDate === undefined ? undefined : (value.bPFiscalYearEndDate === null ? null : value.bPFiscalYearEndDate.toISOString().substring(0,10)),
        'BPFiscalYearIsClosed': value.bPFiscalYearIsClosed,
        'BPFiscalYearClosingDate': value.bPFiscalYearClosingDate === undefined ? undefined : (value.bPFiscalYearClosingDate === null ? null : value.bPFiscalYearClosingDate.toISOString().substring(0,10)),
        'BPFsclYrCnsldtdFinStatementDte': value.bPFsclYrCnsldtdFinStatementDte === undefined ? undefined : (value.bPFsclYrCnsldtdFinStatementDte === null ? null : value.bPFsclYrCnsldtdFinStatementDte.toISOString().substring(0,10)),
        'BPCapitalStockAmtInBalShtCrcy': CapitalStockToJSON(value.bPCapitalStockAmtInBalShtCrcy),
        'BPIssdStockCptlAmtInBalShtCrcy': IssuedStockCapitalToJSON(value.bPIssdStockCptlAmtInBalShtCrcy),
        'BPPartcipnCertAmtInBalShtCrcy': PartCertsOutstandToJSON(value.bPPartcipnCertAmtInBalShtCrcy),
        'BPEquityCapitalAmtInBalShtCrcy': EquityCapitalToJSON(value.bPEquityCapitalAmtInBalShtCrcy),
        'BPGrossPremiumAmtInBalShtCrcy': GrossPremiumToJSON(value.bPGrossPremiumAmtInBalShtCrcy),
        'BPNetPremiumAmtInBalShtCrcy': NetPremiumToJSON(value.bPNetPremiumAmtInBalShtCrcy),
        'BPAnnualSalesAmtInBalShtCrcy': AnnualSalesToJSON(value.bPAnnualSalesAmtInBalShtCrcy),
        'BPAnnualNetIncAmtInBalShtCrcy': AnnualNetIncomeToJSON(value.bPAnnualNetIncAmtInBalShtCrcy),
        'BPDividendDistrAmtInBalShtCrcy': DividendToJSON(value.bPDividendDistrAmtInBalShtCrcy),
        'BPDebtRatioInYears': DebtRatioToJSON(value.bPDebtRatioInYears),
        'BPAnnualPnLAmtInBalShtCrcy': ReportedProfitToJSON(value.bPAnnualPnLAmtInBalShtCrcy),
        'BPBalSheetTotalAmtInBalShtCrcy': BalanceSheetTotalToJSON(value.bPBalSheetTotalAmtInBalShtCrcy),
        'BPNumberOfEmployees': value.bPNumberOfEmployees,
        'BPCptlReserveAmtInBalShtCrcy': CapitalReserveToJSON(value.bPCptlReserveAmtInBalShtCrcy),
        'BPLglRevnRsrvAmtInBalShtCrcy': LegalRevenueResToJSON(value.bPLglRevnRsrvAmtInBalShtCrcy),
        'RevnRsrvOwnStkAmtInBalShtCrcy': RevReservesOwnStToJSON(value.revnRsrvOwnStkAmtInBalShtCrcy),
        'BPStatryReserveAmtInBalShtCrcy': StatutoryReserveToJSON(value.bPStatryReserveAmtInBalShtCrcy),
        'BPOthRevnRsrvAmtInBalShtCrcy': OtherRevenueResToJSON(value.bPOthRevnRsrvAmtInBalShtCrcy),
        'BPPnLCarryfwdAmtInBalShtCrcy': PLCarriedFwdToJSON(value.bPPnLCarryfwdAmtInBalShtCrcy),
        'BPSuborddLbltyAmtInBalShtCrcy': SubordLiabilitiesToJSON(value.bPSuborddLbltyAmtInBalShtCrcy),
        'BPRetOnTotalCptlEmpldInPercent': ReturnOnTotCapToJSON(value.bPRetOnTotalCptlEmpldInPercent),
        'BPDebtClearancePeriodInYears': DebtClearancePerToJSON(value.bPDebtClearancePeriodInYears),
        'BPFinancingCoeffInPercent': FinancingCoeffToJSON(value.bPFinancingCoeffInPercent),
        'BPEquityRatioInPercent': EquityRatioToJSON(value.bPEquityRatioInPercent),
    };
}


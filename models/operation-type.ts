/* tslint:disable */
/* eslint-disable */
/**
 *
 * (c) Copyright Ascensio System SIA 2026
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


/**
 * [0 - Unknown, 1 - ServicePayment, 2 - PackagePayment, 3 - AiServicePayment, 4 - Deposit, 5 - ReceiveProviderInvoice, 6 - ProcessProviderInvoice, 7 - WriteOffServiceProfit, 8 - Profit, 9 - PartnerAccrual, 10 - ProviderPayment, 11 - PartnerPayment, 12 - Refund, 13 - BankDeposit, 14 - BankWithdrawal, 15 - GoodwillCredit, 16 - WriteOffProfit, 17 - WriteOffDifferenceCurrency, 18 - AiDebit, 19 - AiCredit]
 */

export const OperationType = {
    Unknown: 0,
    ServicePayment: 1,
    PackagePayment: 2,
    AiServicePayment: 3,
    Deposit: 4,
    ReceiveProviderInvoice: 5,
    ProcessProviderInvoice: 6,
    WriteOffServiceProfit: 7,
    Profit: 8,
    PartnerAccrual: 9,
    ProviderPayment: 10,
    PartnerPayment: 11,
    Refund: 12,
    BankDeposit: 13,
    BankWithdrawal: 14,
    GoodwillCredit: 15,
    WriteOffProfit: 16,
    WriteOffDifferenceCurrency: 17,
    AiDebit: 18,
    AiCredit: 19,
} as const;

export type OperationType = typeof OperationType[keyof typeof OperationType];




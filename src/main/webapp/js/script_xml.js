var Json = {
    "ElementDetail": [{
        "ElementID": "2072",
        "ElementName": "EXPORT INDICATOR",
        "ElementDescription": "Indicates if the subject business:=- Either imports materials to re-manufacture or sell=- Exports products to other countries=- Do both.",
        "ElementPCMXPath": "Product/Organization/ActivitiesAndOperations/ExportDetails/ExportIndicator",
        "PCMSection": "Product/Organization/ActivitiesAndOperations/ExportDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2073",
        "ElementName": "IMPORT INDICATOR",
        "ElementDescription": "Indicates if the subject business:=- Either imports materials to re-manufacture or sell=- Exports products to other countries=- Do both.",
        "ElementPCMXPath": "Product/Organization/ActivitiesAndOperations/ImportDetails/ImportIndicator",
        "PCMSection": "Product/Organization/ActivitiesAndOperations/ImportDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2074",
        "ElementName": "LINE OF BUSINESS",
        "ElementDescription": "A textual description of the subjects activities. This is independent text and is not derived from the Activity Code. It is used as a backstop for deficiencies in the Activity Coding schemes. E.g. Computers",
        "ElementPCMXPath": "Product/Organization/ActivitiesAndOperations/LineOfBusinessDetails/LineOfBusinessDescription",
        "PCMSection": "Product/Organization/ActivitiesAndOperations/LineOfBusinessDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2057",
        "ElementName": "Activities and Operations Text",
        "ElementDescription": "Profile longer than one paragraph of the company current operations.",
        "ElementPCMXPath": "Product/Organization/ActivitiesAndOperations/OperationsText",
        "PCMSection": "Product/Organization/ActivitiesAndOperations/OperationsText",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6185",
        "ElementName": "Major Industry Category",
        "ElementDescription": "A category that denotes under which major industry category an establishment falls",
        "ElementPCMXPath": "Product/Organization/ActivitiesAndOperations/PrimarySICCategoryValue",
        "PCMSection": "Product/Organization/ActivitiesAndOperations/PrimarySICCategoryValue",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2154",
        "ElementName": "AGENT INDICATOR",
        "ElementDescription": "Indicates if the subject business:- Either imports materials to re-manufacture or sell- Exports products to other countries- Do both.",
        "ElementPCMXPath": "Product/Organization/ActivitiesAndOperations/SubjectIsAgentDetails/AgentIndicator",
        "PCMSection": "Product/Organization/ActivitiesAndOperations/SubjectIsAgentDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2065",
        "ElementName": "MARKETING RISK CLASS",
        "ElementDescription": "A code value representing a high level classification of the Standard Commercial Credit Score.  This provides a measure of risk which is a segmentation of the scoreable universe into three distinct risk groups where a \"L\" represents businesses that have the lowest probability of severe delinquency, and an \"H\" represents businesses with the highest probability of severe delinquency. This Class enables a customer to quickly segment their new and existing accounts into various risk segments to determine appropriate marketing or credit policies.",
        "ElementPCMXPath": "Product/Organization/Assessment/CommercialCreditScore/MarketingRiskClassText",
        "PCMSection": "Product/Organization/Assessment/CommercialCreditScore",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3018",
        "ElementName": "HistoryRatingText",
        "ElementDescription": "Text that specifies if D&B has any information that may reflect unfavorably on this organization",
        "ElementPCMXPath": "Product/Organization/Assessment/HistoryRatingText",
        "PCMSection": "Product/Organization/Assessment/HistoryRatingText",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_IndustryProfile_GetIndustryProfile"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_HST",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2059",
        "ElementName": "Bank Organization Primary Name",
        "ElementDescription": "Name and address of the organization bank.",
        "ElementPCMXPath": "Product/Organization/Banking/Bank/OrganizationName/OrganizationPrimaryName/OrganizationName",
        "PCMSection": "Product/Organization/Banking/Bank",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6069",
        "ElementName": "Employees",
        "ElementDescription": "The number of employees at this competitor",
        "ElementPCMXPath": "Product/Organization/Competitors/Competitor/IndividualEmployeeQuantity",
        "PCMSection": "Product/Organization/Competitors/EmployeeFigures",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6076",
        "ElementName": "Market Cap",
        "ElementDescription": "Competitors market cap in millions (USD)",
        "ElementPCMXPath": "Product/Organization/Competitors/Competitor/IssuedShareCapitalAmount",
        "PCMSection": "Product/Organization/Competitors/Financial",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6067",
        "ElementName": "Company Name",
        "ElementDescription": "Primary Company Name of the competitor",
        "ElementPCMXPath": "Product/Organization/Competitors/Competitor/OrganizationPrimaryName/OrganizationName",
        "PCMSection": "Product/Organization/Competitors/OrganizationName",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6068",
        "ElementName": "Annual Sales",
        "ElementDescription": "The sales number in millions (USD) for this competitor",
        "ElementPCMXPath": "Product/Organization/Competitors/Competitor/SalesRevenueAmount",
        "PCMSection": "Product/Organization/Competitors/Financial",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2184",
        "ElementName": "ConsolidatedEmployeeDetailsEmployeeBasisText",
        "ElementDescription": "Indicates if the principals were included in the total number of employees",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetails/EmployeeCategoryDetails/EmployeeBasisText",
        "PCMSection": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2183",
        "ElementName": "ConsolidatedEmployeeDetailsEmployeeFiguresDate",
        "ElementDescription": "Describes the reliability of the employee total quantity figure. Examples are: audited, actual, estimated, modelled.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetails/EmployeeFiguresDate",
        "PCMSection": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2085",
        "ElementName": "EMPLOYEE RELIABILITY TEXT",
        "ElementDescription": "Describes the reliability of the employee at this location quantity figure. Examples are: audited, actual, estimated, modelled.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetails/ReliabilityText",
        "PCMSection": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2084",
        "ElementName": "CONSOLIDATED TOTAL EMPLOYEES",
        "ElementDescription": "The total number of individuals engaged by a business entity to perform its business operations.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetails/TotalEmployeeQuantity",
        "PCMSection": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2185",
        "ElementName": "ConsolidatedEmployeeDetailsHistoryEmployeeFiguresDate",
        "ElementDescription": "The total number of individuals engaged by a business entity to perform its business operations.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetailsHistory/EmployeeFiguresDate",
        "PCMSection": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetailsHistory",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2187",
        "ElementName": "ConsolidatedEmployeeDetailsHistoryReliabilityText",
        "ElementDescription": "Describes the reliability of the employee total quantity figure. Examples are: audited, actual, estimated, modelled.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetailsHistory/ReliabilityText",
        "PCMSection": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetailsHistory",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2186",
        "ElementName": "ConsolidatedEmployeeDetailsHistoryTotalEmployeeQuantity",
        "ElementDescription": "The total number of individuals engaged by a business entity to perform its business operations.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetailsHistory/TotalEmployeeQuantity",
        "PCMSection": "Product/Organization/EmployeeFigures/ConsolidatedEmployeeDetailsHistory",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2131",
        "ElementName": "GROUP EMPLOYEE TOTAL EMPLOYEE  QUANTIY",
        "ElementDescription": "Total Employees at the Global Ultimate (Need definition from business)",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/GroupEmployeeDetails/TotalEmployeeQuantity",
        "PCMSection": "Product/Organization/EmployeeFigures/GroupEmployeeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2179",
        "ElementName": "IndividualEmployeeDetailsEmployeeFiguresDate",
        "ElementDescription": "The total number of individuals engaged by a business entity at the location of the DUNS numbered subject entity.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetails/EmployeeFiguresDate",
        "PCMSection": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2155",
        "ElementName": "INDIVIDUAL EMPLOYEE RELIABILITY TEXT",
        "ElementDescription": "Employees Here Estimated Indicator Describes the reliability of the employee at this location quantity figure. Examples are: audited, actual, estimated, modelled.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetails/ReliabilityText",
        "PCMSection": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2147",
        "ElementName": "Individual Total Employees",
        "ElementDescription": "The total number of individuals engaged by a business entity at the location of the DUNS numbered subject entity.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetails/TotalEmployeeQuantity",
        "PCMSection": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2180",
        "ElementName": "IndividualEmployeeDetailsHistoryEmployeeFiguresDate",
        "ElementDescription": "The total number of individuals engaged by a business entity at the location of the DUNS numbered subject entity.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetailsHistory/EmployeeFiguresDate",
        "PCMSection": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetailsHistory",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2182",
        "ElementName": "IndividualEmployeeDetailsHistoryReliabilityText",
        "ElementDescription": "Describes the reliability of the employee at this location quantity figure. Examples are: audited, actual, estimated, modelled.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetailsHistory/ReliabilityText",
        "PCMSection": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetailsHistory",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2181",
        "ElementName": "IndividualEmployeeDetailsHistoryTotalEmployeeQuantity",
        "ElementDescription": "The total number of individuals engaged by a business entity at the location of the DUNS numbered subject entity.",
        "ElementPCMXPath": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetailsHistory/TotalEmployeeQuantity",
        "PCMSection": "Product/Organization/EmployeeFigures/IndividualEntityEmployeeDetailsHistory",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2157",
        "ElementName": "FINANCIAL FULL ACCOUNTANT NAME",
        "ElementDescription": "The full name of the individual or organization who/which is employed to provide a professional service to the Subject.",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/AccountantDetails/AccountantName/FullName",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3378",
        "ElementName": "TotalEquityAmount",
        "ElementDescription": "Text that describes in general terms the type of data provider",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/BalanceSheet/Liabilities/TotalEquityAmount",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3375",
        "ElementName": "TotalAssetsAmount",
        "ElementDescription": "Text that describes in general terms the type of data provider",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/BalanceSheet/TotalAssetsAmount",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_FIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "6002",
        "ElementName": "Price Sales Ratio",
        "ElementDescription": "Price/Sales Ratio equals the Last Closing Stock Price divided by the LTM Revenue Per Share.",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/FinancialRatios/FinancialRatioCategory/FinancialRatioItem/ItemDescriptionText",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyComparisonData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6001",
        "ElementName": "Price Sales Ratio",
        "ElementDescription": "Price/Sales Ratio equals the Last Closing Stock Price divided by the LTM Revenue Per Share.",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/FinancialRatios/FinancialRatioCategory/FinancialRatioItem/ItemRatio",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyComparisonData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove FinancialRatio",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "3364",
        "ElementName": "CurrencyISOAlpha3Code",
        "ElementDescription": "CurrencyISOAlpha3Code",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/StatementHeaderDetails/CurrencyISOAlpha3Code",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6033",
        "ElementName": "Year",
        "ElementDescription": "Year of the latest financial statement",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/StatementHeaderDetails/FinancialPeriodDuration",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6032",
        "ElementName": "Period",
        "ElementDescription": "Fiscal Period reporting date",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/StatementHeaderDetails/FinancialStatementToDate",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_FIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "4106",
        "ElementName": "UnitOfSizeText",
        "ElementDescription": "UnitOfSizeText",
        "ElementPCMXPath": "Product/Organization/Financial/FinancialStatement/StatementHeaderDetails/UnitOfSizeText",
        "PCMSection": "Product/Organization/Financial/FinancialStatement",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyFinancialSummary"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2088",
        "ElementName": "EMPLOYEE EQUITY GROWTH RATE",
        "ElementDescription": "Growth in the value for \"the total number employed by all branches and subsidiaries of a business\" for the Global Ultimate Parent of this particular DUNS number, during the most recently reported fiscal year.",
        "ElementPCMXPath": "Product/Organization/Financial/KeyFinancialFiguresOverview/EmployeeQuantityGrowthRate",
        "PCMSection": "Product/Organization/Financial/KeyFinancialFiguresOverview",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2077",
        "ElementName": "PROFIT OR LOSS AMOUNT",
        "ElementDescription": "The net income for the current year in millions (USD)",
        "ElementPCMXPath": "Product/Organization/Financial/KeyFinancialFiguresOverview/ProfitOrLossAmount",
        "PCMSection": "Product/Organization/Financial/KeyFinancialFiguresOverview",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2078",
        "ElementName": "PROFIT OR LOSS GROWTH RATE",
        "ElementDescription": "Latest 12-Month Net Income Growth Rate is the Annual Growth Rate of Net Income of Total Operations based on LTM data.",
        "ElementPCMXPath": "Product/Organization/Financial/KeyFinancialFiguresOverview/ProfitOrLossGrowthRate",
        "PCMSection": "Product/Organization/Financial/KeyFinancialFiguresOverview",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2087",
        "ElementName": "SALES REVENUE",
        "ElementDescription": "Revenue equals total sales from operations. (Note: For financial institutions, Morningstar displays net revenue; Hoover Products/Operations charts are based on gross revenue.) Sales and Revenue are technically different. All sales are revenue, but not all Revenue is from sales (dividend, interest, royalties).",
        "ElementPCMXPath": "Product/Organization/Financial/KeyFinancialFiguresOverview/SalesRevenueAmount",
        "PCMSection": "Product/Organization/Financial/KeyFinancialFiguresOverview",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2081",
        "ElementName": "SALES TURNOVER GROWTH RATE",
        "ElementDescription": "Growth in the sales reported for this particular DUNS number between the two most recently reported annual figures.",
        "ElementPCMXPath": "Product/Organization/Financial/KeyFinancialFiguresOverview/SalesTurnoverGrowthRate",
        "PCMSection": "Product/Organization/Financial/KeyFinancialFiguresOverview",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2192",
        "ElementName": "FINANCIAL PERIOD DURATION",
        "ElementDescription": "Specifies fiscal year or quarter",
        "ElementPCMXPath": "Product/Organization/Financial/KeyFinancialFiguresOverview/StatementHeaderDetails/FinancialPeriodDuration",
        "PCMSection": "Product/Organization/Financial/KeyFinancialFiguresOverview",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2080",
        "ElementName": "FINANCIAL STATEMENT END DATE",
        "ElementDescription": "Financial Statement Date of the latest finanical statement",
        "ElementPCMXPath": "Product/Organization/Financial/KeyFinancialFiguresOverview/StatementHeaderDetails/FinancialStatementToDate",
        "PCMSection": "Product/Organization/Financial/KeyFinancialFiguresOverview",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2149",
        "ElementName": "ASSET ARTICLE QUANTITY",
        "ElementDescription": "The estimated number of personal computers utilized by the subject.1.Actual value for 0-49 PCs 2.Rounded to nearest 5 for 50-99 PCs 3.Rounded to nearest 10 for 100-999 PCs 4.Rounded to nearest 100 for 1000+ PCs",
        "ElementPCMXPath": "Product/Organization/FinancialAssetArticle/AssetArticleSummary/AssetArticleQuantity",
        "PCMSection": "Product/Organization/FinancialAssetArticle",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "13829",
        "ElementName": "AssetClassText",
        "ElementDescription": "Text that describes the class of asset at a high level, e.g., Vehicles.",
        "ElementPCMXPath": "Product/Organization/FinancialAssetArticle/AssetArticleSummary/AssetClassText",
        "PCMSection": "Product/Organization/FinancialAssetArticle",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2166",
        "ElementName": "FINANCIAL ASSET TYPE TEXT",
        "ElementDescription": "The estimated number of personal computers utilized by the subject.Actual value for 0-49 PCsRounded to nearest 5 for 50-99 PCsRounded to nearest 10 for 100-999 PCsRounded to nearest 100 for 1000+ PCs",
        "ElementPCMXPath": "Product/Organization/FinancialAssetArticle/AssetArticleSummary/AssetTypeText",
        "PCMSection": "Product/Organization/FinancialAssetArticle",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2152",
        "ElementName": "DISPLAY SEQUENCE",
        "ElementDescription": "An alphanumeric value identifying primary business activity based on the US SIC Code",
        "ElementPCMXPath": "Product/Organization/IndustryCode/IndustryCode/DisplaySequence",
        "PCMSection": "Product/Organization/IndustryCode/IndustryCode",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "5006",
        "ElementName": "NACE_CD_1",
        "ElementDescription": "IndustryCode.",
        "ElementPCMXPath": "Product/Organization/IndustryCode/IndustryCode/IndustryCode",
        "PCMSection": "Product/Organization/IndustryCode/IndustryCode",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2151",
        "ElementName": "INDUSTRY CODE DESCRIPTION",
        "ElementDescription": "Text that describes the business activity based on the scheme specified by the attribute typeText.",
        "ElementPCMXPath": "Product/Organization/IndustryCode/IndustryCode/IndustryCodeDescription",
        "PCMSection": "Product/Organization/IndustryCode/IndustryCode",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3096",
        "ElementName": "SalesPercentage",
        "ElementDescription": "Percentage score of sales",
        "ElementPCMXPath": "Product/Organization/IndustryCode/IndustryCode/SalesPercentage",
        "PCMSection": "Product/Organization/IndustryCode/IndustryCode",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_IndustryProfile_GetIndustryProfile"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2117",
        "ElementName": "DOMESTIC ULTIMATE DUNS NUMBER",
        "ElementDescription": "DUNS Number of the organization Domestic Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/DomesticUltimateOrganization/DUNSNumber",
        "PCMSection": "Product/Organization/Linkage/DomesticUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2118",
        "ElementName": "DOMESTIC ULTIMATE ORGANISATION",
        "ElementDescription": "Text recording a name of this organization.",
        "ElementPCMXPath": "Product/Organization/Linkage/DomesticUltimateOrganization/OrganizationPrimaryName/OrganizationName",
        "PCMSection": "Product/Organization/Linkage/DomesticUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2120",
        "ElementName": "DOMESTIC ULTIMATE COUNTRY CODE",
        "ElementDescription": "The two-letter country code, defined in the ISO 3166-1 scheme published by International Organization for Standardization (ISO), identifying the country for this address.",
        "ElementPCMXPath": "Product/Organization/Linkage/DomesticUltimateOrganization/PrimaryAddress/CountryISOAlpha2Code",
        "PCMSection": "Product/Organization/Linkage/DomesticUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2122",
        "ElementName": "DOMESTIC ULTIMATE POSTAL CODE",
        "ElementDescription": "Postal Code of the Domestic Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/DomesticUltimateOrganization/PrimaryAddress/PostalCode",
        "PCMSection": "Product/Organization/Linkage/DomesticUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2121",
        "ElementName": "DOMESTIC ULTIMATE POSTAL TOWN",
        "ElementDescription": "Postal Town of the Domestic Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/DomesticUltimateOrganization/PrimaryAddress/PrimaryTownName",
        "PCMSection": "Product/Organization/Linkage/DomesticUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2119",
        "ElementName": "DOMESTIC ULTIMATE ADDRESS LINE",
        "ElementDescription": "Text that records the street address components as it would be presented on an address label. This includes, but is not limited to, details such as street name, street number, building name, estate name.",
        "ElementPCMXPath": "Product/Organization/Linkage/DomesticUltimateOrganization/PrimaryAddress/StreetAddressLine/LineText",
        "PCMSection": "Product/Organization/Linkage/DomesticUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2123",
        "ElementName": "DOMESTIC ULTIMATE TERRITORY ABBRIEVATED NAME",
        "ElementDescription": "Territory Name of the Domestic Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/DomesticUltimateOrganization/PrimaryAddress/TerritoryAbbreviatedName",
        "PCMSection": "Product/Organization/Linkage/DomesticUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6182",
        "ElementName": "DomesticUltimateOrganization TerritoryOfficialName",
        "ElementDescription": "Territory Name of the Domestic Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/DomesticUltimateOrganization/PrimaryAddress/TerritoryOfficialName",
        "PCMSection": "Product/Organization/Linkage/DomesticUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2124",
        "ElementName": "GLOBAL ULTIMATE DUNS NUMBER",
        "ElementDescription": "DUNS Number of the global ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/GlobalUltimateOrganization/DUNSNumber",
        "PCMSection": "Product/Organization/Linkage/GlobalUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2125",
        "ElementName": "GLOBAL ULTIMATE ORGANISATION",
        "ElementDescription": "Primary name of the Global Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/GlobalUltimateOrganization/OrganizationPrimaryName/OrganizationName",
        "PCMSection": "Product/Organization/Linkage/GlobalUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2109",
        "ElementName": "GLOBAL ULTIMATE PRIMARY COUNTRY CODE",
        "ElementDescription": "The two-letter country code, defined in the ISO 3166-1 scheme published by International Organization for Standardization (ISO), identifying the country for this address.",
        "ElementPCMXPath": "Product/Organization/Linkage/GlobalUltimateOrganization/PrimaryAddress/CountryISOAlpha2Code",
        "PCMSection": "Product/Organization/Linkage/GlobalUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2129",
        "ElementName": "GLOBAL ULTIMATE POSTAL CODE",
        "ElementDescription": "Postal Code of the Global Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/GlobalUltimateOrganization/PrimaryAddress/PostalCode",
        "PCMSection": "Product/Organization/Linkage/GlobalUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2128",
        "ElementName": "GLOBAL ULTIMATE POSTAL TOWN",
        "ElementDescription": "Postal Town of the Global Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/GlobalUltimateOrganization/PrimaryAddress/PrimaryTownName",
        "PCMSection": "Product/Organization/Linkage/GlobalUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2126",
        "ElementName": "GLOBAL ULTIMATE STREET ADDRESS",
        "ElementDescription": "Text that records the street address components as it would be presented on an address label. This includes, but is not limited to, details such as street name, street number, building name, estate name.",
        "ElementPCMXPath": "Product/Organization/Linkage/GlobalUltimateOrganization/PrimaryAddress/StreetAddressLine/LineText",
        "PCMSection": "Product/Organization/Linkage/GlobalUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2130",
        "ElementName": "GLOBAL ULTIMATE TERRITORY OFFICIAL NAME",
        "ElementDescription": "Territory Name of the Global Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/GlobalUltimateOrganization/PrimaryAddress/TerritoryAbbreviatedName",
        "PCMSection": "Product/Organization/Linkage/GlobalUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2215",
        "ElementName": "GlobalUltimateOrganization TerritoryOfficialName",
        "ElementDescription": "Territory Name of the Global Ultimate",
        "ElementPCMXPath": "Product/Organization/Linkage/GlobalUltimateOrganization/PrimaryAddress/TerritoryOfficialName",
        "PCMSection": "Product/Organization/Linkage/GlobalUltimateOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2132",
        "ElementName": "HEADQUARTERS DUNS NUMER",
        "ElementDescription": "DUNS Number of the Headquarters or Parent organization",
        "ElementPCMXPath": "Product/Organization/Linkage/HeadquartersOrganization/DUNSNumber",
        "PCMSection": "Product/Organization/Linkage/HeadquartersOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2133",
        "ElementName": "HEADQUARTERS ORGANISATIO",
        "ElementDescription": "Primary name of the Headquarters or Parent Organization",
        "ElementPCMXPath": "Product/Organization/Linkage/HeadquartersOrganization/OrganizationPrimaryName/OrganizationName",
        "PCMSection": "Product/Organization/Linkage/HeadquartersOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2135",
        "ElementName": "HEADQUATERS COUNTRY CODE",
        "ElementDescription": "The two-letter country code, defined in the ISO 3166-1 scheme published by International Organization for Standardization (ISO), identifying the country for this address.",
        "ElementPCMXPath": "Product/Organization/Linkage/HeadquartersOrganization/PrimaryAddress/CountryISOAlpha2Code",
        "PCMSection": "Product/Organization/Linkage/HeadquartersOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2137",
        "ElementName": "HEADQUATERS POSTAL CODE",
        "ElementDescription": "Postal Code of the Headquarters or Parent organization",
        "ElementPCMXPath": "Product/Organization/Linkage/HeadquartersOrganization/PrimaryAddress/PostalCode",
        "PCMSection": "Product/Organization/Linkage/HeadquartersOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2136",
        "ElementName": "HEADQUATERS POSTAL TOWN",
        "ElementDescription": "Postal Town of Headquarters or Parent organization",
        "ElementPCMXPath": "Product/Organization/Linkage/HeadquartersOrganization/PrimaryAddress/PrimaryTownName",
        "PCMSection": "Product/Organization/Linkage/HeadquartersOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2134",
        "ElementName": "HEADQUATERS STREET ADDRESS",
        "ElementDescription": "Text that records the street address components as it would be presented on an address label. This includes, but is not limited to, details such as street name, street number, building name, estate name.",
        "ElementPCMXPath": "Product/Organization/Linkage/HeadquartersOrganization/PrimaryAddress/StreetAddressLine/LineText",
        "PCMSection": "Product/Organization/Linkage/HeadquartersOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2138",
        "ElementName": "HEADQUATERS TERRITORY ABBREVIATED NAME",
        "ElementDescription": "Territory Name of the Headquarters or Parent organization",
        "ElementPCMXPath": "Product/Organization/Linkage/HeadquartersOrganization/PrimaryAddress/TerritoryAbbreviatedName",
        "PCMSection": "Product/Organization/Linkage/HeadquartersOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6183",
        "ElementName": "HeadquartersOrganization TerritoryOfficialName",
        "ElementDescription": "Territory Name of the Headquarters Organization",
        "ElementPCMXPath": "Product/Organization/Linkage/HeadquartersOrganization/PrimaryAddress/TerritoryOfficialName",
        "PCMSection": "Product/Organization/Linkage/HeadquartersOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "5041",
        "ElementName": "MIN_FAM_COUNT_NO_BRNCH",
        "ElementDescription": "GlobalUltimateFamilyTreeLinkageCount.",
        "ElementPCMXPath": "Product/Organization/Linkage/LinkageSummary/GlobalUltimateFamilyTreeLinkageCount",
        "PCMSection": "Product/Organization/Linkage/LinkageSummary",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2158",
        "ElementName": "PARENT DUNS NUMER",
        "ElementDescription": "DUNS Number of the Headquarters or Parent organization",
        "ElementPCMXPath": "Product/Organization/Linkage/ParentOrganization/DUNSNumber",
        "PCMSection": "Product/Organization/Linkage/ParentOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2159",
        "ElementName": "PARENT ORGANISATIO",
        "ElementDescription": "Primary name of the Headquarters or Parent Organization",
        "ElementPCMXPath": "Product/Organization/Linkage/ParentOrganization/OrganizationPrimaryName/OrganizationName",
        "PCMSection": "Product/Organization/Linkage/ParentOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2161",
        "ElementName": "PARENT COUNTRY CODE",
        "ElementDescription": "The two-letter country code, defined in the ISO 3166-1 scheme published by International Organization for Standardization (ISO), identifying the country for this address.",
        "ElementPCMXPath": "Product/Organization/Linkage/ParentOrganization/PrimaryAddress/CountryISOAlpha2Code",
        "PCMSection": "Product/Organization/Linkage/ParentOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2163",
        "ElementName": "PARENT POSTAL CODE",
        "ElementDescription": "Postal Code of the Headquarters or Parent organization",
        "ElementPCMXPath": "Product/Organization/Linkage/ParentOrganization/PrimaryAddress/PostalCode",
        "PCMSection": "Product/Organization/Linkage/ParentOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2162",
        "ElementName": "PARENT POSTAL TOWN",
        "ElementDescription": "Postal Town of Headquarters or Parent organization",
        "ElementPCMXPath": "Product/Organization/Linkage/ParentOrganization/PrimaryAddress/PrimaryTownName",
        "PCMSection": "Product/Organization/Linkage/ParentOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2208",
        "ElementName": "ParentOrganization PrimaryStreetAddressLine",
        "ElementDescription": "Text that records the street address components as it would be presented on an address label. This includes, but is not limited to, details such as street name, street number, building name, estate name.",
        "ElementPCMXPath": "Product/Organization/Linkage/ParentOrganization/PrimaryAddress/StreetAddressLine/LineText",
        "PCMSection": "Product/Organization/Linkage/ParentOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2164",
        "ElementName": "PARENT TERRITORY ABBREVIATED NAME",
        "ElementDescription": "Territory Name of the Headquarters or Parent organization",
        "ElementPCMXPath": "Product/Organization/Linkage/ParentOrganization/PrimaryAddress/TerritoryAbbreviatedName",
        "PCMSection": "Product/Organization/Linkage/ParentOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6184",
        "ElementName": "ParentOrganization TerritoryOfficialName",
        "ElementDescription": "Territory Name of the Parent Organization",
        "ElementPCMXPath": "Product/Organization/Linkage/ParentOrganization/PrimaryAddress/TerritoryOfficialName",
        "PCMSection": "Product/Organization/Linkage/ParentOrganization",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2101",
        "ElementName": "MAILING ADDRESS COUNTRY CODE",
        "ElementDescription": "The two-letter country code, defined in the ISO 3166-1 scheme published by International Organization for Standardization (ISO), identifying the country for this address.",
        "ElementPCMXPath": "Product/Organization/Location/MailingAddress/CountryISOAlpha2Code",
        "PCMSection": "Product/Organization/Location/MailingAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Country_Check",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "3065",
        "ElementName": "CountyOfficialName",
        "ElementDescription": "CountyOfficialName",
        "ElementPCMXPath": "Product/Organization/Location/MailingAddress/CountyOfficialName",
        "PCMSection": "Product/Organization/Location/MailingAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2050",
        "ElementName": "MAILING ADDRESS POSTAL CODE",
        "ElementDescription": "An identifier used by the local country Postal Authority to identify a particular geographic location. For example, in Belgium, Postal Code 9000 identifies the town of GHENT",
        "ElementPCMXPath": "Product/Organization/Location/MailingAddress/PostalCode",
        "PCMSection": "Product/Organization/Location/MailingAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2100",
        "ElementName": "MAILING ADDRESS TOWN NAME",
        "ElementDescription": "The name of the town or city recognized by the Postal Authority for delivering mail.",
        "ElementPCMXPath": "Product/Organization/Location/MailingAddress/PrimaryTownName",
        "PCMSection": "Product/Organization/Location/MailingAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2146",
        "ElementName": "Mailing Address STREET ADDRESS LINE",
        "ElementDescription": "Text that records the street address components as it would be presented on an address label. This includes, but is not limited to, details such as street name, street number, building name, estate name.",
        "ElementPCMXPath": "Product/Organization/Location/MailingAddress/StreetAddressLine/LineText",
        "PCMSection": "Product/Organization/Location/MailingAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3066",
        "ElementName": "TerritoryAbbreviatedName",
        "ElementDescription": "TerritoryAbbreviatedName",
        "ElementPCMXPath": "Product/Organization/Location/MailingAddress/TerritoryAbbreviatedName",
        "PCMSection": "Product/Organization/Location/MailingAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2103",
        "ElementName": "MAILING ADDRESS TERRITORY OFFICIAL NAME",
        "ElementDescription": "The legal name of the locally governed area which forms part of a centrally governed nation.",
        "ElementPCMXPath": "Product/Organization/Location/MailingAddress/TerritoryOfficialName",
        "PCMSection": "Product/Organization/Location/MailingAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2102",
        "ElementName": "MAILING ADDRESS UNDELIVERABLE INDICATOR",
        "ElementDescription": "Indicates if its an undeliverable address or not",
        "ElementPCMXPath": "Product/Organization/Location/MailingAddress/UndeliverableIndicator",
        "PCMSection": "Product/Organization/Location/MailingAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3123",
        "ElementName": "TenureTypeText",
        "ElementDescription": "Text that indicates estimated financial strength",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/AddressUsageTenureDetail/TenureTypeText",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2165",
        "ElementName": "PRIMARY ADDRESS COUNTRY CODE NAME",
        "ElementDescription": "Continent name where the business is located.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/CountryGroupName",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "5002",
        "ElementName": "CTRY_NME",
        "ElementDescription": "Country Name.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/CountryISOAlpha2Code",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Country_Check",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2091",
        "ElementName": "PRIMARY ADDRESS COUNTY OFFICIAL NAME",
        "ElementDescription": "The legal name of the primary administrative division within a Territory or Country.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/CountyOfficialName",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2093",
        "ElementName": "PRIMARY ADDRESS GEOGRAPHICAL PRECISION TEXT",
        "ElementDescription": "Text that identifies the accuracy of the match used for an address, e.g., Street Segment .1 to .2 miles, Block Group .2 to .4 mile U.S. ZIP + 4.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/GeographicalPrecisionText",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2092",
        "ElementName": "PRIMARY ADDRESS LATITUDE",
        "ElementDescription": "The angular distance north or south from the Earth equator measured through 90 degrees expressed in decimal numbers.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/LatitudeMeasurement",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2094",
        "ElementName": "PRIMARY ADDRESS LONGITUDE",
        "ElementDescription": "The angular distance east or west from the prime (Greenwich) meridian measured through 180 degrees expressed in decimal numbers.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/LongitudeMeasurement",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2047",
        "ElementName": "PRIMARY ADDRESS METROPOLITAN STATISCAL AREA US CENSUS CODE",
        "ElementDescription": "This is a five-digit code representing one of the U.S. Census Bureaus core-based statistical areas (metropolitan, not micropolitan).Full description to be returned",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/MetropolitanStatisticalAreaUSCensusCode",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3120",
        "ElementName": "MinorTownName",
        "ElementDescription": "Name of the town",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/MinorTownName",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3081",
        "ElementName": "PoliticalDistrictText",
        "ElementDescription": "PoliticalDistrictText",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/PoliticalDistrict/PoliticalDistrictText",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2049",
        "ElementName": "PRIMARY ADDRESS POSTAL CODE",
        "ElementDescription": "An identifier used by the local country Postal Authority to identify a particular geographic location. For example, in Belgium, Postal Code 9000 identifies the town of GHENT",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/PostalCode",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2148",
        "ElementName": "PREMISES AREA MEASUREMENT",
        "ElementDescription": "Describes the reliability of the figure. Examples are: audited, actual, estimated, modelled.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/PremisesDetail/PremisesAreaMeasurement",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2097",
        "ElementName": "PRIMARY ADDRESS PREMISES AREA MEASUREMENT RELIABILITY TEXT",
        "ElementDescription": "Describes the reliability of the figure. Examples are: audited, actual, estimated, modelled.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/PremisesDetail/PremisesAreaMeasurementReliabilityText",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2098",
        "ElementName": "PRIMARY ADDRESS PREMISES AREA MEASUREMENT UNIT",
        "ElementDescription": "Describes the measurement unit used. [Note: Square feet is the only unit of measurement currently used.]",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/PremisesDetail/PremisesAreaMeasurementUnitText",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2064",
        "ElementName": "PRIMARY ADDRESS PREMISES USAGE FUNCTION",
        "ElementDescription": "A text that represents if the organization does (or does NOT) manufacture at the location address",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/PremisesUsageDetail/PremisesUsageFunctionDetail/PremisesFunctionText",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2043",
        "ElementName": "PRIMARY ADDRESS TOWN NAME",
        "ElementDescription": "The name of the town or city recognized by the Postal Authority for delivering mail",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/PrimaryTownName",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2041",
        "ElementName": "PRIMARY ADDRESS REGISTERED ADDRESS INDICATOR",
        "ElementDescription": "Indicates if the address is a registered address or not",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/RegisteredAddressIndicator",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3101",
        "ElementName": "ResidentialAddressIndicator",
        "ElementDescription": "Address of the residence",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/ResidentialAddressIndicator",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_IndustryProfile_GetIndustryProfile"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2042",
        "ElementName": "Primary Address Line Text",
        "ElementDescription": "Text that records the street address line 1 component as it would be presented on an address label. This includes, but is not limited to, details such as street name, street number, building name, estate name",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/StreetAddressLine/LineText",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2095",
        "ElementName": "PRIMARY ADDRESS TERRITORY ABBREVIATED NAME",
        "ElementDescription": "The shortened name of the locally governed area which forms part of a centrally governed nation. For example ;NJ; for the US State New Jersey within Country United States of America.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/TerritoryAbbreviatedName",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "5125",
        "ElementName": "TerritoryOfficialName",
        "ElementDescription": "TerritoryOfficialName.",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/TerritoryOfficialName",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2090",
        "ElementName": "PRIMARY ADDRESS UNDELIVERABLE INDICATOR",
        "ElementDescription": "Indicates if its an undeliverable address or not",
        "ElementPCMXPath": "Product/Organization/Location/PrimaryAddress/UndeliverableIndicator",
        "PCMSection": "Product/Organization/Location/PrimaryAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2060",
        "ElementName": "Boneyard Organization Indicator",
        "ElementDescription": "Flag to indicate if this is a Boneyard (historical) Company",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/BoneyardOrganizationIndicator",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2069",
        "ElementName": "ORGANISATION CONTROL OWNERSHIP DATE",
        "ElementDescription": "The date that the current controlling owners of the business first acquired control. NB. Their percentage of controlling interest may have changed since that date.",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/ControlOwnershipDate",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2053",
        "ElementName": "ORGANISATION CONTROL OWNERSHIP TYPE",
        "ElementDescription": "Type of company; public, private, etc.",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/ControlOwnershipTypeText",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2177",
        "ElementName": "FAMILY TREE MEMBER ROLE TEXT",
        "ElementDescription": "Company Location Type such as Head Quarters, Single Location, etc",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/FamilyTreeMemberRole/FamilyTreeMemberRoleText",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2063",
        "ElementName": "FRANCHISE OPERATION TYPE",
        "ElementDescription": "Indicates the main franchise operation type of the business such as Owned by Franchiseethe franchisee. The significance of this is that a single company may operate many branch locations under the same franchise.",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/FranchiseOperationTypeText",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2061",
        "ElementName": "Operating Status Free Form",
        "ElementDescription": "Comment Boilerplate summary of how the company operations ended.",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/OperatingStatusComment/OperatingStatusFreeFormComment",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3008",
        "ElementName": "Out of Business Indicator",
        "ElementDescription": "Indicates whether the business at this address has discontinued operations",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/OperatingStatusText",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2070",
        "ElementName": "ORGANISATION START YEAR",
        "ElementDescription": "Year the company was founded",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/OrganizationStartYear",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyComparisonData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2062",
        "ElementName": "FAMILY TREE MEMBER ROLE",
        "ElementDescription": "Company Location Type such as Head Quarters, Single Location, etc",
        "ElementPCMXPath": "Product/Organization/OrganizationDetail/StandaloneOrganizationIndicator",
        "PCMSection": "Product/Organization/OrganizationDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "GLAS_EnhancedCorporate"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "5088",
        "ElementName": "FORMER_PRIMARY_BUSINESS_NAME",
        "ElementDescription": "FormerOrganizationPrimaryName.",
        "ElementPCMXPath": "Product/Organization/OrganizationName/FormerOrganizationPrimaryName/OrganizationName",
        "PCMSection": "Product/Organization/OrganizationName/FormerOrganizationPrimaryName",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2034",
        "ElementName": "ORGANISATION NAME",
        "ElementDescription": "An alphanumeric value identifying a business activity based on the scheme specified by the typeText.",
        "ElementPCMXPath": "Product/Organization/OrganizationName/OrganizationPrimaryName/OrganizationName",
        "PCMSection": "Product/Organization/OrganizationName/OrganizationPrimaryName",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "true"
    }, {
        "ElementID": "3001",
        "ElementName": "Tradestyle",
        "ElementDescription": "A trading style name used by a business.  It is an additional name used by a company.  Also referred to as \"Doing Business As\" (DBA) and \"Also Known As\" (AKA).",
        "ElementPCMXPath": "Product/Organization/OrganizationName/TradeStyleName/DisplaySequence",
        "PCMSection": "Product/Organization/OrganizationName/TradeStyleName",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2035",
        "ElementName": "TRADESTYLE NAME",
        "ElementDescription": "Text recording tradestyle name (doing business as) of this organization",
        "ElementPCMXPath": "Product/Organization/OrganizationName/TradeStyleName/OrganizationName",
        "PCMSection": "Product/Organization/OrganizationName/TradeStyleName",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2017",
        "ElementName": "COMPENSATION DATE",
        "ElementDescription": "Year of the current compensation details.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/CurrentCompensation/CompensationDate",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_COMP",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2015",
        "ElementName": "COMPENSATION AMOUNT",
        "ElementDescription": "Bonus/Salary for the year, in requested currency.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/CurrentCompensation/CompensationDetail/CompensationAmount",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_COMP",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2016",
        "ElementName": "COMPENSATION TYPE",
        "ElementDescription": "Bonus/Salary for the year, excluding bonus in requested currency.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/CurrentCompensation/CompensationDetail/CompensationTypeText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2021",
        "ElementName": "POSITION TEXT",
        "ElementDescription": "Text which denotes the job position the principal or manager holds in the organization, e.g., Financial Director, Managing Director, Sales Director, Operations Manager.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/CurrentManagementResponsibility/ManagementResponsibilityText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_CMR",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2022",
        "ElementName": "START DATE",
        "ElementDescription": "The year when the principal or manager was appointed to this position. This is not necessarily the date when the principal or manager was first employed by the subject; this is simply the date when they moved to this position, e.g., due to a promotion.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/CurrentManagementResponsibility/StartDate",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_CMR",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2020",
        "ElementName": "JOB TITLE TEXT",
        "ElementDescription": "Text that denotes a job held by the principal or manager.  E.g.  e.g., Leader Global Communication, Manager National Technical Support Center.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/JobTitle/JobTitleText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "4323",
        "ElementName": "PersonAge",
        "ElementDescription": "PersonAge",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PersonAge",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2005",
        "ElementName": "PERSON AGE",
        "ElementDescription": "Age of the principal.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PrincipalAge",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2071",
        "ElementName": "PRINCIPLE IDENTIFICATION NUMBER",
        "ElementDescription": "A number assigned by an external body or by DNB which either uniquely identifies or helps to identify the principal",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PrincipalIdentificationNumberDetail/PrincipalIdentificationNumber",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2006",
        "ElementName": "FIRST NAME",
        "ElementDescription": "First name of the principal.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PrincipalName/FirstName",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2007",
        "ElementName": "FULL NAME",
        "ElementDescription": "Full Name of the principal .",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PrincipalName/FullName",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2008",
        "ElementName": "LAST NAME",
        "ElementDescription": "Last name of the principal.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PrincipalName/LastName",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2009",
        "ElementName": "MIDDLE NAME",
        "ElementDescription": "Person Middle Name.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PrincipalName/MiddleName",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2010",
        "ElementName": "NAME PREFIX",
        "ElementDescription": "A text defining the correct form of address for this principal. E.g. Dr, Professor, Lord, etc.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PrincipalName/NamePrefix/NamePrefixText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "2011",
        "ElementName": "NAME SUFFIX",
        "ElementDescription": "A text identifying either a familial suffix to the principals name (E.g. Senior, Junior, III. ) or a professional/qualification suffix to the principals name (E.g. MD, FRICS, PhD etc.) .",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal/PrincipalName/NameSuffix/NameSuffixText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/CurrentPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_CP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "4325",
        "ElementName": "CompensationDate",
        "ElementDescription": "CompensationDate",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/CurrentCompensation/CompensationDate",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_COMP",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "4322",
        "ElementName": "CompensationAmount",
        "ElementDescription": "CompensationAmount",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/CurrentCompensation/CompensationDetail/CompensationAmount",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_COMP",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "4324",
        "ElementName": "CompensationTypeText",
        "ElementDescription": "CompensationTypeText",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/CurrentCompensation/CompensationDetail/CompensationTypeText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "4313",
        "ElementName": "ManagementResponsibilityText",
        "ElementDescription": "ManagementResponsibilityText",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/CurrentManagementResponsibility/ManagementResponsibilityText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_CMR",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "4314",
        "ElementName": "StartDate",
        "ElementDescription": "StartDate",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/CurrentManagementResponsibility/StartDate",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_CMR",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "3104",
        "ElementName": "JobTitleText",
        "ElementDescription": "Describes the job type",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/JobTitle/JobTitleText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "4321",
        "ElementName": "PersonAge",
        "ElementDescription": "PersonAge",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/PrincipalAge",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "3103",
        "ElementName": "PrincipalIdentificationNumber",
        "ElementDescription": "PrincipalIdentificationNumber",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/PrincipalIdentificationNumberDetail/PrincipalIdentificationNumber",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_PIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "3069",
        "ElementName": "FirstName",
        "ElementDescription": "Records the different names for the Principal.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/PrincipalName/FirstName",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "3072",
        "ElementName": "FullName",
        "ElementDescription": "Records the different names for the Principal.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/PrincipalName/FullName",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "3071",
        "ElementName": "LastName",
        "ElementDescription": "Records the different names for the Principal.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/PrincipalName/LastName",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "3070",
        "ElementName": "MiddleName",
        "ElementDescription": "Records the different names for the Principal.",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/PrincipalName/MiddleName",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false",
        "RuleDetail": {
            "RuleName": "Remove_Malaysia_MSP_PRIN",
            "SelectedRuleIndicator": "true"
        }
    }, {
        "ElementID": "4319",
        "ElementName": "NamePrefixText",
        "ElementDescription": "NamePrefixText",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/PrincipalName/NamePrefix/NamePrefixText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "4320",
        "ElementName": "NameSuffixText",
        "ElementDescription": "NameSuffixText",
        "ElementPCMXPath": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal/PrincipalName/NameSuffix/NameSuffixText",
        "PCMSection": "Product/Organization/PrincipalsAndManagement/MostSeniorPrincipal",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3082",
        "ElementName": "RegisteredDetail",
        "ElementDescription": "Text that describes the content",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/IncorporationYear",
        "PCMSection": "Product/Organization/RegisteredDetail/IncorporationYear",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyComparisonData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2089",
        "ElementName": "LEGAL FORM TEXT",
        "ElementDescription": "Legal Status description for the company",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/LegalFormDetails/LegalFormText",
        "PCMSection": "Product/Organization/RegisteredDetail/LegalFormDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2048",
        "ElementName": "REGISTERED PRIMARY ADDRESS TERRITORY OFFICIAL NAME",
        "ElementDescription": "The US state in which a company is legally incorporated. (Abbreviated Name)",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/LegalFormDetails/RegistrationLocation/PrimaryAddress/TerritoryOfficialName",
        "PCMSection": "Product/Organization/RegisteredDetail/LegalFormDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3086",
        "ElementName": "AssignmentMethodText",
        "ElementDescription": "Text that specifies if DB has any information that may reflect unfavorably on this organization",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/AssignmentMethodText",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3090",
        "ElementName": "FilingOrganizationName",
        "ElementDescription": "The name of the filing organization.",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/FilingOrganizationName",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2037",
        "ElementName": "Organization Identification Number",
        "ElementDescription": "Business identification number?used in some countries for business registration and tax collection",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/OrganizationIdentificationNumber",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "13796",
        "ElementName": "PreferredOrganizationIdentificationNumberIndicator",
        "ElementDescription": "PreferredOrganizationIdentificationNumberIndicator",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/PreferredOrganizationIdentificationNumberIndicator",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3089",
        "ElementName": "RegistrationIssuerDUNSNumber",
        "ElementDescription": "The DUNSNumber of the authority issuing the Registration Number.",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/RegistrationIssuerDUNSNumber",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3088",
        "ElementName": "RegistrationIssuerName",
        "ElementDescription": "The name recording of the the authority issuing the Registration Number.",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/RegistrationIssuerName",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3092",
        "ElementName": "PostalCode",
        "ElementDescription": "PostalCode",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/RegistrationLocation/PrimaryAddress/PostalCode",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3094",
        "ElementName": "PrimaryTownName",
        "ElementDescription": "The name of the town or city recognized by the Postal Authority for delivering mail.",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/RegistrationLocation/PrimaryAddress/PrimaryTownName",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "4043",
        "ElementName": "DisplaySequence",
        "ElementDescription": "DisplaySequence",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/RegistrationLocation/PrimaryAddress/StreetAddressLine/DisplaySequence",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3124",
        "ElementName": "LineText",
        "ElementDescription": "LineText",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/RegistrationLocation/PrimaryAddress/StreetAddressLine/LineText",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3093",
        "ElementName": "TerritoryName",
        "ElementDescription": "The name of the locally governed area which forms part of a centrally governed nation as received by D&B.",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/RegistrationLocation/PrimaryAddress/TerritoryName",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3091",
        "ElementName": "StartDate",
        "ElementDescription": "The date when the Organization Identifier became current, i.e., was first used / registered.",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail/StartDate",
        "PCMSection": "Product/Organization/RegisteredDetail/OrganizationIdentificationNumberDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_FEINservice_GetFEINDetails"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2075",
        "ElementName": "SHARE CAPITAL AMOUNT",
        "ElementDescription": "Price * Total SharesOutstanding.The most current market cap for example, would be the most recent closing price x the most recent reported shares outstanding. For ADR shareclasses, market cap is price * (ordinary shares outstanding / adr ratio).",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/ShareCapitalDetails/CapitalAmount",
        "PCMSection": "Product/Organization/RegisteredDetail/ShareCapitalDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2076",
        "ElementName": "SHARE CAPITAL START DATE",
        "ElementDescription": "The last date for which an end-of-day stock price is available",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/ShareCapitalDetails/StartDate",
        "PCMSection": "Product/Organization/RegisteredDetail/ShareCapitalDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2113",
        "ElementName": "STOCK EXCHANGE DETAILS COUNTRY CODE",
        "ElementDescription": "Country name where exchange is located.",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/StockExchangeDetails/CountryISOAlpha2Code",
        "PCMSection": "Product/Organization/RegisteredDetail/StockExchangeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2112",
        "ElementName": "PRIMARY STOCK EXCHNAGE INDICATOR",
        "ElementDescription": "Ticker symbol for the company on the current exchange",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/StockExchangeDetails/PrimaryStockExchangeIndicator",
        "PCMSection": "Product/Organization/RegisteredDetail/StockExchangeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2111",
        "ElementName": "STOCK EXCHANGE NAME",
        "ElementDescription": "Name of the exchange the company is traded",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/StockExchangeDetails/StockExchangeName",
        "PCMSection": "Product/Organization/RegisteredDetail/StockExchangeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2110",
        "ElementName": "STOCK EXCHANGE TICKER NAME",
        "ElementDescription": "Ticker Symbol used for this company.",
        "ElementPCMXPath": "Product/Organization/RegisteredDetail/StockExchangeDetails/StockExchangeTickerName",
        "PCMSection": "Product/Organization/RegisteredDetail/StockExchangeDetails",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2055",
        "ElementName": "FEMALE OWNED INDICATOR",
        "ElementDescription": "Indicates if the company is owned by women",
        "ElementPCMXPath": "Product/Organization/SocioEconomicIdentification/FemaleOwnedIndicator",
        "PCMSection": "Product/Organization/SocioEconomicIdentification",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3085",
        "ElementName": "LaborSurplusAreaIndicator",
        "ElementDescription": "LaborSurplusAreaIndicator",
        "ElementPCMXPath": "Product/Organization/SocioEconomicIdentification/LaborSurplusAreaIndicator",
        "PCMSection": "Product/Organization/SocioEconomicIdentification",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2054",
        "ElementName": "MINORITY OWNED INDICATOR",
        "ElementDescription": "When turned ON (set to TRUE), it indicates that this organization is certified as a business that is greater than 50% owned by, and whose management and daily business operations are controlled by, one or more minority group members. When turned OFF (set to FALSE), it indicates that this organization is not certified as a business that is greater than 50% owned by, and whose management and daily business operations are controlled by, one or more minority group members; however as this is the assumed condition there is no requirement to create this tag to represent this fact. Note: The percentage of ownership requirement may differ by country. For example, in the US, for a business to be considered minority owned, the percentage of ownership must be at least 51%",
        "ElementPCMXPath": "Product/Organization/SocioEconomicIdentification/MinorityOwnedIndicator",
        "PCMSection": "Product/Organization/SocioEconomicIdentification",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2066",
        "ElementName": "OWNERSHIP ETHINICITY",
        "ElementDescription": "Ethnicity of business owner.",
        "ElementPCMXPath": "Product/Organization/SocioEconomicIdentification/OwnershipEthnicity/EthnicityTypeText",
        "PCMSection": "Product/Organization/SocioEconomicIdentification",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2067",
        "ElementName": "SMALL BUSINESS INDICATOR",
        "ElementDescription": "Indicates whether or not this organization is a small business",
        "ElementPCMXPath": "Product/Organization/SocioEconomicIdentification/SmallBusinessIndicator",
        "PCMSection": "Product/Organization/SocioEconomicIdentification",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2000",
        "ElementName": "DUNS NUMBER",
        "ElementDescription": "The subject identifier under the Data Universal Numbering System.",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/DUNSNumber",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "true"
    }, {
        "ElementID": "3100",
        "ElementName": "DUNSSelfRequestDate",
        "ElementDescription": "DUNSSelfRequestDate",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/DUNSSelfRequestDate",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_IndustryProfile_GetIndustryProfile"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3099",
        "ElementName": "DUNSSelfRequestIndicator",
        "ElementDescription": "ON indicates DUNS number",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/DUNSSelfRequestIndicator",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_IndustryProfile_GetIndustryProfile"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3080",
        "ElementName": "LastUpdateDate",
        "ElementDescription": "The date when the subject's record was last updated on D&B's system.",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/LastUpdateDate",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3079",
        "ElementName": "MarketabilityIndicator",
        "ElementDescription": "When turned ON (set to TRUE) this indicates that the record satisfies D&B marketability rules.",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/MarketabilityIndicator",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2001",
        "ElementName": "NON MARKETABLE REASON TEXT",
        "ElementDescription": "TText that describes the reason for non markeatability of the company.",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/NonMarketableReasonText",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2056",
        "ElementName": "Organization Summary",
        "ElementDescription": "One-paragraph profile of the company current operations",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/OrganizationSummaryText",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2051",
        "ElementName": "SUBJECT HANDLING TEXT",
        "ElementDescription": "Indicates whether company is listed on a UK Do Not Call registry",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/SubjectHandling/SubjectHandlingText",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3098",
        "ElementName": "TotalInquiriesCount",
        "ElementDescription": "the total count of inquires",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/TotalInquiriesCount",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_IndustryProfile_GetIndustryProfile"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2142",
        "ElementName": "TRANSFER DATE",
        "ElementDescription": "Records the date when the new DUNS # was assigned Format: YYYY-MM-DD",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/TransferDUNSNumberRegistration/TransferDate",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_DUNSAuditTrailService_GetDUNSAuditTrail"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2144",
        "ElementName": "TRANSFER REASON TEXT",
        "ElementDescription": "A text that provides the reason for the new DUNS number assigned to the organization.",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/TransferDUNSNumberRegistration/TransferReasonText",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_DUNSAuditTrailService_GetDUNSAuditTrail"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2033",
        "ElementName": "DUNS NUMBER TRANSFER ORIGINAL/OLD DUNS",
        "ElementDescription": "Previous DUNS Number of the organization",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/TransferDUNSNumberRegistration/TransferredFromDUNSNumber",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_DUNSAuditTrailService_GetDUNSAuditTrail"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "7063",
        "ElementName": "TransferredToDUNSNumber",
        "ElementDescription": "TransferredToDUNSNumber",
        "ElementPCMXPath": "Product/Organization/SubjectHeader/TransferDUNSNumberRegistration/TransferredToDUNSNumber",
        "PCMSection": "Product/Organization/SubjectHeader",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_DUNSAuditTrailService_GetDUNSAuditTrail"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2105",
        "ElementName": "FASCIMILE NUMBER INTERNATIONAL DIALING CODE",
        "ElementDescription": "Address Country ID",
        "ElementPCMXPath": "Product/Organization/Telecommunication/FacsimileNumber/InternationalDialingCode",
        "PCMSection": "Product/Organization/Telecommunication/FacsimileNumber",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2145",
        "ElementName": "Fascimile Telecommunication Number",
        "ElementDescription": "A sequence of digits used by the subject for voice communication in a public switched telephone network. This sequence of digits includes the area code or city code. Note: This number does not include the International Dialing Code and Domestic Dialing Code",
        "ElementPCMXPath": "Product/Organization/Telecommunication/FacsimileNumber/TelecommunicationNumber",
        "PCMSection": "Product/Organization/Telecommunication/FacsimileNumber",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6166",
        "ElementName": "SocialMediaPlatformName",
        "ElementDescription": "Social Media Platform Name",
        "ElementPCMXPath": "Product/Organization/Telecommunication/SocialMediaDetail/SocialMediaPlatformName",
        "PCMSection": "Product/Organization/Telecommunication/SocialMediaDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "6165",
        "ElementName": "Wikipedia URL",
        "ElementDescription": "URL of Wikipedia page",
        "ElementPCMXPath": "Product/Organization/Telecommunication/SocialMediaDetail/WebPageURL",
        "PCMSection": "Product/Organization/Telecommunication/SocialMediaDetail",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2104",
        "ElementName": "TELEPHONE NUMBER INTERNATIONAL DIALING CODE",
        "ElementDescription": "Address Country ID (International dialing code)",
        "ElementPCMXPath": "Product/Organization/Telecommunication/TelephoneNumber/InternationalDialingCode",
        "PCMSection": "Product/Organization/Telecommunication/TelephoneNumber",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2002",
        "ElementName": "TELECOMMUNICATION NUMBER",
        "ElementDescription": "A sequence of digits used by the subject for voice communication in a public switched telephone network. This sequence of digits includes the area code or city code. Note: This number does not include the International Dialing Code and Domestic Dialing Code.",
        "ElementPCMXPath": "Product/Organization/Telecommunication/TelephoneNumber/TelecommunicationNumber",
        "PCMSection": "Product/Organization/Telecommunication/TelephoneNumber",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Atlas_Lookup"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "3102",
        "ElementName": "TelephoneNumber",
        "ElementDescription": "TelephoneNumber",
        "ElementPCMXPath": "Product/Organization/Telecommunication/TelephoneNumber/UnreachableIndicator",
        "PCMSection": "Product/Organization/Telecommunication/TelephoneNumber",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_IndustryProfile_GetIndustryProfile"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2106",
        "ElementName": "WEBPAGE ADDRESS",
        "ElementDescription": "A primary url for a companyThe Internet URL (Uniform Resource Locator) which uniquely identifies the propreitary website of the subject or the website preferred by the subject which gives more information on the subject.Note: The communications protocol followed by a colon and two slashes (http://) is not included in the Web Page address.",
        "ElementPCMXPath": "Product/Organization/Telecommunication/WebPageAddress/TelecommunicationAddress",
        "PCMSection": "Product/Organization/Telecommunication/WebPageAddress",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2189",
        "ElementName": "THIRD PARTY ASSESSMENT TYPE VALUE",
        "ElementDescription": "A company rank on a ranking list, such as 100 on the Fortune 500",
        "ElementPCMXPath": "Product/Organization/ThirdPartyAssessment/ThirdPartyAssessment/AssessmentTypeValue",
        "PCMSection": "Product/Organization/ThirdPartyAssessment/ThirdPartyAssessment",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }, {
        "ElementID": "2108",
        "ElementName": "THIRD PARTY ASSESSMENT VALUE",
        "ElementDescription": "A company rank on a ranking list, such as 100 on the Fortune 500",
        "ElementPCMXPath": "Product/Organization/ThirdPartyAssessment/ThirdPartyAssessment/AssessmentValue",
        "PCMSection": "Product/Organization/ThirdPartyAssessment/ThirdPartyAssessment",
        "DataSourceID": {
            "_SelectedDataSource": "true",
            "__text": "Marketing_Hoovers_GetCompanyDetailOptionalData"
        },
        "ElementIncludedIndicator": "true",
        "MandatoryElementIndicator": "false"
    }]
}
$(document).ready(function() {
    DrawTree(Json);

    function DrawTree(data) {
        var $div = $("#container"),
            $ulRootNode = $('<ul>', { 'class': 'root-node' }),
            i = 0;
        $ulRootNode.append("<li><span class='root-span expand'></span><a href='#' id='plus' class='label'> D&B Internal Services </a></li>");
        $div.empty();
        $.each(data, function() {
            $.each(this, function(index) {
                i = index+1;
                // console.log(this.ElementID);
                var keyText = this.ElementPCMXPath;
                keyText = keyText.substring(keyText.lastIndexOf("/") + 1, keyText.length);
                $ulouter = $('<ul>', { 'class': 'outer' });
                $ulouter.append("<li><span class='img-icon expand'></span><a href='#' id='plus' class='label'>" + " XPath: " + keyText + "</a></li>");
                $ulinner = $('<ul>', { 'class': 'inner' });

                $ulinner.append($('<li>').append(this.ElementID));
                $ulinner.append($('<li>').append(this.DataSourceID.__text));
                $ulouter.append($ulinner);
                $ulRootNode.append($ulouter);
                $div.append($ulRootNode);
            });
            if (i == 0) {
                $ulRootNode = $('<ul>', { 'class': 'root-node' }),                    
                $ulRootNode.append("<li><span class='root-span expand'></span><a href='#' id='plus' class='label'> D&B Internal Services </a></li>");
                $ulouter = $('<ul>', { 'class': 'outer' });
                $ulouter.append("<li class='err'>There are no results for the searched item, plese refine you keyword</li>");
                $ulRootNode.append($ulouter);
                $div.append($ulRootNode);
                $("body").append($div);
                
            } else {
                $("body").append($div);
            }

        });
    }

    $(".data_container_hide").hide();

    $("#container").on("click", ".outer", function(e) {
        var $this = $(this);
        if ($(this).find("span").hasClass("expand")) {
            $this.find(".inner").fadeIn();
            $(this).find("span").removeClass("expand").addClass("collapse");
        } else if ($(this).find("span").hasClass("collapse")) {
            $this.find(".inner").fadeOut();
            $(this).find("span").removeClass("collapse").addClass("expand");
        }
        e.preventDefault();
        e.stopPropagation();
    });

    $("#container").on("click", ".root-node", function(e) {
        var $this = $(this);
        if ($(this).find(".root-span").hasClass("expand")) {
            $this.find(".outer").fadeIn();
            $(this).find(".root-span").removeClass("expand").addClass("collapse");
        } else if ($(this).find(".root-span").hasClass("collapse")) {
            $this.find(".outer").fadeOut();
            $(this).find(".root-span").removeClass("collapse").addClass("expand");
        }
        e.preventDefault();
    });

    $("#expand").on("click", function() {
        $(".inner").fadeIn();
        $(".outer").fadeIn();
        $(".outer").find("span").removeClass("expand").addClass("collapse");
        $(".root-node").find(".root-span").removeClass("expand").addClass("collapse");
    });

    $("#collapse").on("click", function() {
        $(".inner").fadeOut();
        $(".outer").fadeOut();
        $(".outer").find("span").removeClass("collapse").addClass("expand");
        $(".root-node").find(".root-span").removeClass("collapse").addClass("expand");
    });

    $("#DNBProductID_bt").on("click", function() {
        $(".data_container_hide").fadeIn();
        $(".inner").css("display", "none");
        $(".outer").find("span").removeClass("collapse").addClass("expand");

    });

    $("#Clear_bt").on("click", function() {
        $(".data_container_hide").fadeOut();
        // $(".outer").find("span").removeClass("expand").addClass("collapse");
        // $(".inner").fadeOut();
    });

    $("#filter").on("keyup", function(e) {
        var filterText = $(this).val().toLowerCase();
        if (filterText == "") {
            DrawTree(Json);
        } else {
            var filteredJson = $.grep(Json.ElementDetail, function(element, index) {
                return element.ElementPCMXPath.substring(element.ElementPCMXPath.lastIndexOf("/") + 1, element.ElementPCMXPath.length).toLowerCase().match("^" + filterText);
            });
            var Json_Text = JSON.stringify(filteredJson, null, 2)
            DrawTree($.parseJSON("[" + Json_Text + "]"));
        }
        $(".root-node").trigger("click");
    });
    // $("#search").on("click",function(){
    //      var filterText = $("#filter").val().toLowerCase();
    //      var filteredJson = $.grep(Json.ElementDetail, function(element, index) {
    //         return element.ElementPCMXPath.substring(element.ElementPCMXPath.lastIndexOf("/") + 1, element.ElementPCMXPath.length).toLowerCase().match("^" + filterText);
    //     });
    //      var Json_Text = JSON.stringify(filteredJson, null, 2)
    //      DrawTree($.parseJSON("[" + Json_Text + "]"));
    //      // console.log($.parseJSON("[" + Json_Text + "]"));
    // })
});

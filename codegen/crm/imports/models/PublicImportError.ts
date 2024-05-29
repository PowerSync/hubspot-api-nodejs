/**
 * Imports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ImportRowCore } from '../models/ImportRowCore';

export class PublicImportError {
    'createdAt': number;
    'extraContext'?: string;
    'objectTypeId'?: string;
    'errorType': PublicImportErrorErrorTypeEnum;
    'knownColumnNumber'?: number;
    'id': string;
    'sourceData': ImportRowCore;
    'objectType'?: PublicImportErrorObjectTypeEnum;
    'invalidValue'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "extraContext",
            "baseName": "extraContext",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectTypeId",
            "baseName": "objectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorType",
            "baseName": "errorType",
            "type": "PublicImportErrorErrorTypeEnum",
            "format": ""
        },
        {
            "name": "knownColumnNumber",
            "baseName": "knownColumnNumber",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceData",
            "baseName": "sourceData",
            "type": "ImportRowCore",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "PublicImportErrorObjectTypeEnum",
            "format": ""
        },
        {
            "name": "invalidValue",
            "baseName": "invalidValue",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicImportError.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicImportErrorErrorTypeEnum {
    IncorrectNumberOfColumns = 'INCORRECT_NUMBER_OF_COLUMNS',
    InvalidObjectId = 'INVALID_OBJECT_ID',
    InvalidAssociationIdentifier = 'INVALID_ASSOCIATION_IDENTIFIER',
    NoObjectIdFromAssociationIdentifier = 'NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER',
    MultipleCompaniesWithThisDomain = 'MULTIPLE_COMPANIES_WITH_THIS_DOMAIN',
    PropertyDefinitionNotFound = 'PROPERTY_DEFINITION_NOT_FOUND',
    PropertyValueNotFound = 'PROPERTY_VALUE_NOT_FOUND',
    CouldNotFindOwner = 'COULD_NOT_FIND_OWNER',
    MultipleOwnersFound = 'MULTIPLE_OWNERS_FOUND',
    CouldNotFindBusinessUnit = 'COULD_NOT_FIND_BUSINESS_UNIT',
    CouldNotParseNumber = 'COULD_NOT_PARSE_NUMBER',
    CouldNotParseDate = 'COULD_NOT_PARSE_DATE',
    CouldNotParseTerm = 'COULD_NOT_PARSE_TERM',
    OutsideValidTimeRange = 'OUTSIDE_VALID_TIME_RANGE',
    OutsideValidTermRange = 'OUTSIDE_VALID_TERM_RANGE',
    CouldNotParseRow = 'COULD_NOT_PARSE_ROW',
    InvalidEnumerationOption = 'INVALID_ENUMERATION_OPTION',
    AmbiguousEnumerationOption = 'AMBIGUOUS_ENUMERATION_OPTION',
    FailedValidation = 'FAILED_VALIDATION',
    FailedToCreateAssociation = 'FAILED_TO_CREATE_ASSOCIATION',
    FileNotFound = 'FILE_NOT_FOUND',
    InvalidColumnConfiguration = 'INVALID_COLUMN_CONFIGURATION',
    InvalidFileType = 'INVALID_FILE_TYPE',
    InvalidSpreadsheet = 'INVALID_SPREADSHEET',
    InvalidSheetCount = 'INVALID_SHEET_COUNT',
    FailedToProcessObjectWithEmptyPropertyValues = 'FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES',
    UnknownBadRequest = 'UNKNOWN_BAD_REQUEST',
    GdprBlacklistedEmail = 'GDPR_BLACKLISTED_EMAIL',
    DuplicateAssociationId = 'DUPLICATE_ASSOCIATION_ID',
    LimitExceeded = 'LIMIT_EXCEEDED',
    PortalWideCustomObjectLimitExceeded = 'PORTAL_WIDE_CUSTOM_OBJECT_LIMIT_EXCEEDED',
    InvalidAlternateId = 'INVALID_ALTERNATE_ID',
    InvalidEmail = 'INVALID_EMAIL',
    InvalidDomain = 'INVALID_DOMAIN',
    DuplicateRowContent = 'DUPLICATE_ROW_CONTENT',
    InvalidNumberSize = 'INVALID_NUMBER_SIZE',
    UnknownError = 'UNKNOWN_ERROR',
    FailedToOptOutContact = 'FAILED_TO_OPT_OUT_CONTACT',
    InvalidRequiredProperty = 'INVALID_REQUIRED_PROPERTY',
    MissingRequiredProperty = 'MISSING_REQUIRED_PROPERTY',
    DuplicateAlternateId = 'DUPLICATE_ALTERNATE_ID',
    DuplicateObjectId = 'DUPLICATE_OBJECT_ID',
    DuplicateUniquePropertyValue = 'DUPLICATE_UNIQUE_PROPERTY_VALUE',
    BlankValueProvided = 'BLANK_VALUE_PROVIDED',
    UnknownAssociationRecordId = 'UNKNOWN_ASSOCIATION_RECORD_ID',
    InvalidRecordId = 'INVALID_RECORD_ID',
    DuplicateRecordId = 'DUPLICATE_RECORD_ID',
    InvalidCustomPropertyValidation = 'INVALID_CUSTOM_PROPERTY_VALIDATION',
    CreateOnlyImport = 'CREATE_ONLY_IMPORT',
    UpdateOnlyImport = 'UPDATE_ONLY_IMPORT',
    ColumnTooLarge = 'COLUMN_TOO_LARGE',
    RowDataTooLarge = 'ROW_DATA_TOO_LARGE',
    InvalidEventTimestamp = 'INVALID_EVENT_TIMESTAMP',
    InvalidEvent = 'INVALID_EVENT',
    DuplicateEvent = 'DUPLICATE_EVENT',
    MissingEventDefinition = 'MISSING_EVENT_DEFINITION'
}
export enum PublicImportErrorObjectTypeEnum {
    Contact = 'CONTACT',
    Company = 'COMPANY',
    Deal = 'DEAL',
    Engagement = 'ENGAGEMENT',
    Ticket = 'TICKET',
    Owner = 'OWNER',
    Product = 'PRODUCT',
    LineItem = 'LINE_ITEM',
    BetDeliverableService = 'BET_DELIVERABLE_SERVICE',
    Content = 'CONTENT',
    Conversation = 'CONVERSATION',
    BetAlert = 'BET_ALERT',
    Portal = 'PORTAL',
    Quote = 'QUOTE',
    FormSubmissionInbounddb = 'FORM_SUBMISSION_INBOUNDDB',
    Quota = 'QUOTA',
    Unsubscribe = 'UNSUBSCRIBE',
    Communication = 'COMMUNICATION',
    FeedbackSubmission = 'FEEDBACK_SUBMISSION',
    Attribution = 'ATTRIBUTION',
    SalesforceSyncError = 'SALESFORCE_SYNC_ERROR',
    RestorableCrmObject = 'RESTORABLE_CRM_OBJECT',
    Hub = 'HUB',
    LandingPage = 'LANDING_PAGE',
    ProductOrFolder = 'PRODUCT_OR_FOLDER',
    Task = 'TASK',
    Form = 'FORM',
    MarketingEmail = 'MARKETING_EMAIL',
    AdAccount = 'AD_ACCOUNT',
    AdCampaign = 'AD_CAMPAIGN',
    AdGroup = 'AD_GROUP',
    Ad = 'AD',
    Keyword = 'KEYWORD',
    Campaign = 'CAMPAIGN',
    SocialChannel = 'SOCIAL_CHANNEL',
    SocialPost = 'SOCIAL_POST',
    SitePage = 'SITE_PAGE',
    BlogPost = 'BLOG_POST',
    Import = 'IMPORT',
    Export = 'EXPORT',
    Cta = 'CTA',
    TaskTemplate = 'TASK_TEMPLATE',
    AutomationPlatformFlow = 'AUTOMATION_PLATFORM_FLOW',
    ObjectList = 'OBJECT_LIST',
    Note = 'NOTE',
    MeetingEvent = 'MEETING_EVENT',
    Call = 'CALL',
    Email = 'EMAIL',
    PublishingTask = 'PUBLISHING_TASK',
    ConversationSession = 'CONVERSATION_SESSION',
    ContactCreateAttribution = 'CONTACT_CREATE_ATTRIBUTION',
    Invoice = 'INVOICE',
    MarketingEvent = 'MARKETING_EVENT',
    ConversationInbox = 'CONVERSATION_INBOX',
    Chatflow = 'CHATFLOW',
    MediaBridge = 'MEDIA_BRIDGE',
    Sequence = 'SEQUENCE',
    SequenceStep = 'SEQUENCE_STEP',
    Forecast = 'FORECAST',
    Snippet = 'SNIPPET',
    Template = 'TEMPLATE',
    DealCreateAttribution = 'DEAL_CREATE_ATTRIBUTION',
    QuoteTemplate = 'QUOTE_TEMPLATE',
    QuoteModule = 'QUOTE_MODULE',
    QuoteModuleField = 'QUOTE_MODULE_FIELD',
    QuoteField = 'QUOTE_FIELD',
    SequenceEnrollment = 'SEQUENCE_ENROLLMENT',
    Subscription = 'SUBSCRIPTION',
    AcceptanceTest = 'ACCEPTANCE_TEST',
    SocialBroadcast = 'SOCIAL_BROADCAST',
    DealSplit = 'DEAL_SPLIT',
    DealRegistration = 'DEAL_REGISTRATION',
    GoalTarget = 'GOAL_TARGET',
    GoalTargetGroup = 'GOAL_TARGET_GROUP',
    PortalObjectSyncMessage = 'PORTAL_OBJECT_SYNC_MESSAGE',
    FileManagerFile = 'FILE_MANAGER_FILE',
    FileManagerFolder = 'FILE_MANAGER_FOLDER',
    SequenceStepEnrollment = 'SEQUENCE_STEP_ENROLLMENT',
    Approval = 'APPROVAL',
    ApprovalStep = 'APPROVAL_STEP',
    CtaVariant = 'CTA_VARIANT',
    SalesDocument = 'SALES_DOCUMENT',
    Discount = 'DISCOUNT',
    Fee = 'FEE',
    Tax = 'TAX',
    MarketingCalendar = 'MARKETING_CALENDAR',
    PermissionsTesting = 'PERMISSIONS_TESTING',
    PrivacyScannerCookie = 'PRIVACY_SCANNER_COOKIE',
    DataSyncState = 'DATA_SYNC_STATE',
    WebInteractive = 'WEB_INTERACTIVE',
    Playbook = 'PLAYBOOK',
    Folder = 'FOLDER',
    PlaybookQuestion = 'PLAYBOOK_QUESTION',
    PlaybookSubmission = 'PLAYBOOK_SUBMISSION',
    PlaybookSubmissionAnswer = 'PLAYBOOK_SUBMISSION_ANSWER',
    CommercePayment = 'COMMERCE_PAYMENT',
    GscProperty = 'GSC_PROPERTY',
    SoxProtectedDummyType = 'SOX_PROTECTED_DUMMY_TYPE',
    BlogListingPage = 'BLOG_LISTING_PAGE',
    QuarantinedSubmission = 'QUARANTINED_SUBMISSION',
    PaymentSchedule = 'PAYMENT_SCHEDULE',
    PaymentScheduleInstallment = 'PAYMENT_SCHEDULE_INSTALLMENT',
    MarketingCampaignUtm = 'MARKETING_CAMPAIGN_UTM',
    DiscountTemplate = 'DISCOUNT_TEMPLATE',
    DiscountCode = 'DISCOUNT_CODE',
    FeedbackSurvey = 'FEEDBACK_SURVEY',
    CmsUrl = 'CMS_URL',
    SalesTask = 'SALES_TASK',
    SalesWorkload = 'SALES_WORKLOAD',
    User = 'USER',
    PostalMail = 'POSTAL_MAIL',
    SchemasBackendTest = 'SCHEMAS_BACKEND_TEST',
    PaymentLink = 'PAYMENT_LINK',
    SubmissionTag = 'SUBMISSION_TAG',
    CampaignStep = 'CAMPAIGN_STEP',
    SchedulingPage = 'SCHEDULING_PAGE',
    SoxProtectedTestType = 'SOX_PROTECTED_TEST_TYPE',
    Order = 'ORDER',
    MarketingSms = 'MARKETING_SMS',
    PartnerAccount = 'PARTNER_ACCOUNT',
    CampaignTemplate = 'CAMPAIGN_TEMPLATE',
    CampaignTemplateStep = 'CAMPAIGN_TEMPLATE_STEP',
    Playlist = 'PLAYLIST',
    Clip = 'CLIP',
    CampaignBudgetItem = 'CAMPAIGN_BUDGET_ITEM',
    CampaignSpendItem = 'CAMPAIGN_SPEND_ITEM',
    Mic = 'MIC',
    ContentAudit = 'CONTENT_AUDIT',
    ContentAuditPage = 'CONTENT_AUDIT_PAGE',
    PlaylistFolder = 'PLAYLIST_FOLDER',
    Lead = 'LEAD',
    AbandonedCart = 'ABANDONED_CART',
    ExternalWebUrl = 'EXTERNAL_WEB_URL',
    View = 'VIEW',
    ViewBlock = 'VIEW_BLOCK',
    Roster = 'ROSTER',
    Cart = 'CART',
    AutomationPlatformFlowAction = 'AUTOMATION_PLATFORM_FLOW_ACTION',
    SocialProfile = 'SOCIAL_PROFILE',
    PartnerClient = 'PARTNER_CLIENT',
    RosterMember = 'ROSTER_MEMBER',
    MarketingEventAttendance = 'MARKETING_EVENT_ATTENDANCE',
    AllPages = 'ALL_PAGES',
    AiForecast = 'AI_FORECAST',
    CrmPipelinesDummyType = 'CRM_PIPELINES_DUMMY_TYPE',
    Unknown = 'UNKNOWN'
}


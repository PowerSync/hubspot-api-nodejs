/**
 * Automation Actions V4
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Option } from '../models/Option';

export class FieldTypeDefinition {
    'helpText'?: string;
    'referencedObjectType'?: FieldTypeDefinitionReferencedObjectTypeEnum;
    'name': string;
    'options': Array<Option>;
    'description'?: string;
    'externalOptionsReferenceType'?: string;
    'label'?: string;
    'type': FieldTypeDefinitionTypeEnum;
    'fieldType'?: FieldTypeDefinitionFieldTypeEnum;
    'optionsUrl'?: string;
    'externalOptions': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "helpText",
            "baseName": "helpText",
            "type": "string",
            "format": ""
        },
        {
            "name": "referencedObjectType",
            "baseName": "referencedObjectType",
            "type": "FieldTypeDefinitionReferencedObjectTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<Option>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalOptionsReferenceType",
            "baseName": "externalOptionsReferenceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "FieldTypeDefinitionTypeEnum",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "FieldTypeDefinitionFieldTypeEnum",
            "format": ""
        },
        {
            "name": "optionsUrl",
            "baseName": "optionsUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalOptions",
            "baseName": "externalOptions",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FieldTypeDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FieldTypeDefinitionReferencedObjectTypeEnum {
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
    Order = 'ORDER',
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
    KnowledgeArticle = 'KNOWLEDGE_ARTICLE',
    PropertyInfo = 'PROPERTY_INFO',
    DataPrivacyConsent = 'DATA_PRIVACY_CONSENT',
    GoalTemplate = 'GOAL_TEMPLATE',
    ScoreConfiguration = 'SCORE_CONFIGURATION',
    Audience = 'AUDIENCE',
    PartnerClientRevenue = 'PARTNER_CLIENT_REVENUE',
    AutomationJourney = 'AUTOMATION_JOURNEY',
    Unknown = 'UNKNOWN'
}
export enum FieldTypeDefinitionTypeEnum {
    String = 'string',
    Number = 'number',
    Bool = 'bool',
    Datetime = 'datetime',
    Enumeration = 'enumeration',
    Date = 'date',
    PhoneNumber = 'phone_number',
    CurrencyNumber = 'currency_number',
    Json = 'json',
    ObjectCoordinates = 'object_coordinates'
}
export enum FieldTypeDefinitionFieldTypeEnum {
    Booleancheckbox = 'booleancheckbox',
    Checkbox = 'checkbox',
    Date = 'date',
    File = 'file',
    Number = 'number',
    Phonenumber = 'phonenumber',
    Radio = 'radio',
    Select = 'select',
    Text = 'text',
    Textarea = 'textarea',
    CalculationEquation = 'calculation_equation',
    CalculationRollup = 'calculation_rollup',
    CalculationScore = 'calculation_score',
    CalculationReadTime = 'calculation_read_time',
    Unknown = 'unknown',
    Html = 'html'
}

